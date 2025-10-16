document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  const splashDelay = 1400; 
  const startNow = () => {
    splash.classList.add('hidden');
    app.classList.remove('hidden');
    showView('home');
  };

  setTimeout(startNow, splashDelay);

  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    const title = document.getElementById('screen-title');
    const sub = document.getElementById('screen-sub');
    const map = {
      'home': ['Home', 'Choose how you\'d like to communicate today'],
      'speech-to-symbols': ['Speech to Symbols','Speak and see symbols appear'],
      'symbols-to-voice': ['Symbols to Voice','Transform symbols into speech'],
      'ai-knowledge': ['AI Knowledge','Learn and get smart assistance'],
      'live-sign-detection': ['Live Sign Detection','Real-time sign language translation'],
      'settings': ['Settings','Customize your experience'],
      'about': ['About SilentConnect','Learn more about the project']
    };
    if (map[id]) {
      title.textContent = map[id][0];
      sub.textContent = map[id][1];
    }
    window.scrollTo(0,0);
  }

  
  document.querySelectorAll('.card-action').forEach(c => {
    c.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.screen;
      if (target) showView(target);
    });
  });

  document.getElementById('btn-listen').addEventListener('click', () => showView('speech-to-symbols'));
  document.getElementById('btn-live').addEventListener('click', () => showView('live-sign-detection'));
  document.getElementById('btn-symbols').addEventListener('click', () => showView('symbols-to-voice'));
  document.getElementById('btn-about').addEventListener('click', () => showView('about'));

  document.querySelectorAll('[data-back]').forEach(b => {
    b.addEventListener('click', () => showView('home'));
  });

  const micToggle = document.getElementById('mic-toggle');
  const symbolsArea = document.getElementById('symbols-area');
  const status = document.getElementById('status');
  const waveBars = document.getElementById('wave');

  if (waveBars) {
    for (let i=0;i<20;i++){
      const d = document.createElement('div');
      waveBars.appendChild(d);
    }
  }

  let listening = false;
  let mockTimers = [];

  function animateWave(active){
    const bars = document.querySelectorAll('#wave > div');
    bars.forEach((b,i) => {
      if (active) {
        const h = 8 + Math.round(Math.random()*40);
        b.style.height = h + 'px';
        b.style.opacity = (0.3 + Math.random()*0.9).toFixed(2);
      } else {
        b.style.height = '8px';
        b.style.opacity = '0.35';
      }
    });
  }

  function startMockRecognition(){
    listening = true;
    status.textContent = 'Listening...';
    symbolsArea.textContent = '';
    animateWave(true);
    const seq = [
      {text:'hello', delay:800},
      {text:'I need help', delay:1800},
      {text:'going home', delay:3000}
    ];
    seq.forEach((s, idx) => {
      const t = setTimeout(()=> {
        appendSymbols(s.text);
      }, s.delay);
      mockTimers.push(t);
    });
    mockTimers.push(setTimeout(()=> { stopMockRecognition(); }, 4200));
    mockTimers.push(setInterval(()=>{ if(listening) animateWave(true); }, 150));
  }

  function appendSymbols(text){
    const words = text.split(' ');
    const container = document.createElement('div');
    container.className = 'symbols-row';
    words.forEach(w=>{
      const btn = document.createElement('div');
      btn.className = 'symbol-pill';
      let emoji = '🔤';
      if (w.includes('hello')) emoji='👋';
      if (w.includes('help')) emoji='✋';
      if (w.includes('home')) emoji='🏠';
      if (w.includes('coffee')) emoji='☕';
      btn.innerHTML = `<div class="pill-icon">${emoji}</div><div class="pill-word">${w}</div>`;
      container.appendChild(btn);
    });
    symbolsArea.appendChild(container);
  }

  function stopMockRecognition(){
    listening = false;
    status.textContent = 'Ready to listen';
    animateWave(false);
    mockTimers.forEach(t=>clearTimeout(t));
    mockTimers = [];
   
  }

  if (micToggle) micToggle.addEventListener('click', ()=>{
    if (!listening) startMockRecognition();
    else stopMockRecognition();
  });

  const symbolButtons = document.querySelectorAll('.symbol');
  const constructed = document.getElementById('constructed-text');
  const speakBtn = document.getElementById('speak-symbols');
  let constructedPhrase = [];

  symbolButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const word = btn.textContent.trim();
      constructedPhrase.push(word);
      if (constructed) constructed.textContent = constructedPhrase.join(' ');
    });
  });

  if (speakBtn) speakBtn.addEventListener('click', ()=>{
    const txt = constructedPhrase.join(' ');
    if (!txt) return alert('Select some symbols first (demo).');
    if ('speechSynthesis' in window) {
      const ut = new SpeechSynthesisUtterance(txt);
      window.speechSynthesis.speak(ut);
    } else {
      alert('Speech synthesis not supported in this browser.');
    }
  });

  document.querySelectorAll('.tabs-head .tab').forEach(tab=>{
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tabs-head .tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const tname = tab.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.add('hidden'));
      const pick = document.getElementById(tname);
      if (pick) pick.classList.remove('hidden');
    });
  });

  const assistantBtn = document.getElementById('ai-assistant');
  const assistantPopup = document.getElementById('assistant-popup');
  if (assistantBtn) assistantBtn.addEventListener('click', ()=>{
    assistantPopup.classList.toggle('hidden');
  });

  const startCamera = document.getElementById('start-camera');
  const stopCamera = document.getElementById('stop-camera');
  const resetDetection = document.getElementById('reset-detection');
  const detectedText = document.getElementById('detected-text');

  let detectionIndex = 0;
  let detectionInterval = null;
  const demoSequence = ["Hello","Thank you","Help me","I need assistance","Good morning"];

  if (startCamera) startCamera.addEventListener('click', ()=>{
    startCamera.classList.add('hidden');
    stopCamera.classList.remove('hidden');
    resetDetection.classList.remove('hidden');
    if (detectedText) detectedText.textContent = 'Demo AI analyzing...';
    detectionIndex = 0;
    detectionInterval = setInterval(()=>{
      if (detectionIndex < demoSequence.length) {
        if (detectedText) detectedText.textContent = demoSequence[detectionIndex];
        detectionIndex++;
      } else {
        clearInterval(detectionInterval);
        if (detectedText) detectedText.textContent = 'Finished (demo)';
      }
    }, 1800);
  });

  if (stopCamera) stopCamera.addEventListener('click', ()=>{
    if (detectionInterval) clearInterval(detectionInterval);
    startCamera.classList.remove('hidden');
    stopCamera.classList.add('hidden');
    if (detectedText) detectedText.textContent = 'Demo stopped';
  });

  if (resetDetection) resetDetection.addEventListener('click', ()=>{
    if (detectionInterval) clearInterval(detectionInterval);
    detectionIndex = 0;
    if (detectedText) detectedText.textContent = 'Start camera to begin detection';
  });

  const lang = document.getElementById('lang-select');
  const dark = document.getElementById('dark-mode');
  const fs = document.getElementById('font-size');
  const fsVal = document.getElementById('font-size-val');

  if (fs) {
    fs.addEventListener('input', (e)=>{
      const val = e.target.value;
      document.documentElement.style.fontSize = val + 'px';
      if (fsVal) fsVal.textContent = val;
    });
  }
  if (dark) {
    dark.addEventListener('change', (e)=>{
      if (dark.checked) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    });
  }

});
