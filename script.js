document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  const splashDelay = 1400;

  const startNow = () => {
    if (splash) splash.classList.add('hidden');
    if (app) app.classList.remove('hidden');
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
      if (title) title.textContent = map[id][0];
      if (sub) sub.textContent = map[id][1];
    }
    window.scrollTo(0,0);
  }

  document.querySelectorAll('.card-action').forEach(c => {
    c.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.screen;
      if (target) showView(target);
    });
  });

  const btnListen = document.getElementById('btn-listen');
  const btnLive = document.getElementById('btn-live');
  const btnSymbols = document.getElementById('btn-symbols');
  const btnAbout = document.getElementById('btn-about');

  if (btnListen) btnListen.addEventListener('click', () => showView('speech-to-symbols'));
  if (btnLive) btnLive.addEventListener('click', () => showView('live-sign-detection'));
  if (btnSymbols) btnSymbols.addEventListener('click', () => showView('symbols-to-voice'));
  if (btnAbout) btnAbout.addEventListener('click', () => showView('about'));

  document.querySelectorAll('[data-back]').forEach(b => {
    b.addEventListener('click', () => showView('home'));
  });

  const micToggle = document.getElementById('mic-toggle');
  const symbolsArea = document.getElementById('symbols-area'); 
  const status = document.getElementById('status');
  const waveBars = document.getElementById('wave');

  if (waveBars && waveBars.children.length === 0) {
    for (let i=0;i<20;i++){
      const d = document.createElement('div');
      waveBars.appendChild(d);
    }
  }

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

  
  let listening = false;
  let mockTimers = [];
  let mockIntervalHandle = null;

  function startMockRecognition(){
    if (listening) return;
    listening = true;
    if (status) status.textContent = 'Listening...';
    if (symbolsArea) {
      symbolsArea.innerHTML = '';

      symbolsArea.style.position = symbolsArea.style.position || 'relative';
    }
    animateWave(true);

    const sentencePool = [
      'Hello, how are you?',
      'I need help please',
      'I am going home now',
      'Yes, please',
      'No, thank you',
      'I want some water',
      'I need food',
      'Call the doctor',
      'This is urgent help',
      'Thank you very much',
      'I am sorry',
      'Please help me',
      'I am going to the bathroom',
      'I want to eat food',
      'I want to drink coffee',
      'I have money',
      'I want to read a book',
      'Family time is important',
      'Call the police for help',
      'There is a fire emergency',
      'I need an ambulance',
      'The dog is barking',
      'The cat is sleeping',
      'I need medicine please',
      'I want to make a phone call',
      'It is time to sleep',
      'Please open the door',
      'Yes',
      'No'
    ];

    // Shuffle the pool and pick 3 random sentences
    const shuffled = sentencePool.sort(() => 0.5 - Math.random());
    const seq = shuffled.slice(0, 3).map((text, index) => ({
      text: text,
      delay: 800 + index * 1200
    }));

    seq.forEach((s) => {
      const t = setTimeout(()=> {
        appendSymbols(s.text);
      }, s.delay);
      mockTimers.push(t);
    });


    mockTimers.push(setTimeout(()=> { stopMockRecognition(); }, 4200));


    mockIntervalHandle = setInterval(()=>{ if(listening) animateWave(true); }, 150);
  }

  
  function appendSymbols(text){
    if (!symbolsArea) return;
    const words = String(text || '').trim().split(/\s+/).filter(Boolean);

    words.forEach(w => {
      const item = document.createElement('div');
      item.className = 'symbol-item clickable'; 
      const lw = w.toLowerCase();

      
      let emoji = '🔤';
      if (lw.includes('hello') || lw === 'hi') emoji = '👋';
      else if (lw.includes('thank')) emoji = '🙏';
      else if (lw.includes('help')) emoji = '✋';
      else if (lw.includes('home')) emoji = '🏠';
      else if (lw.includes('coffee')) emoji = '☕';
      else if (lw.includes('car')) emoji = '🚗';
      else if (lw.includes('water')) emoji = '💧';
      else if (lw.includes('food')) emoji = '🍎';
      else if (lw.includes('eat')) emoji = '🍽️';
      else if (lw.includes('sleep')) emoji = '🛌';
      else if (lw.includes('doctor')|| lw.includes('hospital')) emoji = '👨‍⚕';
      else if (lw.includes('call')) emoji = '📞';
      else if (lw.includes('urgent') || lw.includes('emergency')) emoji = '❗';
      else if (lw.includes('going') || lw.includes('go')) emoji = '➡';
      else if (lw.includes('door')) emoji = '🚪';
      else if (lw.includes('bathroom')) emoji = '🛁';
      else if (lw.includes('drink')) emoji = '🥤';
      else if (lw.includes('phone')) emoji = '📱';
      else if (lw.includes('medicine')) emoji = '💊';
      else if (lw.includes('dog')) emoji = '🐕';
      else if (lw.includes('cat')) emoji = '🐱';
      else if (lw.includes('ambulance')) emoji = '🚑';
      else if (lw.includes('fire')) emoji = '🔥';
      else if (lw.includes('police')) emoji = '🚨';
      else if (lw.includes('family')) emoji = '👨‍👩‍👧‍👦';
      else if (lw.includes('time')) emoji = '⏰';
      else if (lw.includes('money')) emoji = '💰';
      else if (lw.includes('book')) emoji = '📚';
      else if (lw.includes('yes')) emoji = '✅';
      else if (lw.includes('no')) emoji = '❌';
      else if (lw.includes('please')) emoji = '🙏🏻';
      else if (lw.includes('sorry')) emoji = '😔';
    
      item.innerHTML = `<div class="symbol-emoji">${emoji}</div><div class="symbol-label">${w}</div>`;
    
      
      item.style.opacity = '0';
      item.style.transform = 'translateY(6px)';
      symbolsArea.appendChild(item);

      
      requestAnimationFrame(() => {
        item.style.transition = 'all 220ms ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });

      
      item.addEventListener('click', () => {
        showTempLabel(w);
       
      });
    });

    
    if (symbolsArea.scrollWidth > symbolsArea.clientWidth) {
      symbolsArea.scrollLeft = symbolsArea.scrollWidth;
    }
  }

  function stopMockRecognition(){
    listening = false;
    if (status) status.textContent = 'Ready to listen';
    animateWave(false);
    mockTimers.forEach(t=>clearTimeout(t));
    mockTimers = [];
    if (mockIntervalHandle) { clearInterval(mockIntervalHandle); mockIntervalHandle = null; }
  }

  if (micToggle) micToggle.addEventListener('click', ()=>{
    if (!listening) startMockRecognition();
    else stopMockRecognition();
  });

  
  function showTempLabel(text){
    if (!symbolsArea) return;
    const flash = document.createElement('div');
    flash.className = 'symbol-flash';
    flash.textContent = text;
    
    Object.assign(flash.style, {
      position: 'absolute',
      left: '50%',
      top: '-32px',
      transform: 'translateX(-50%)',
      background: 'rgba(0,74,173,0.95)',
      color: 'white',
      padding: '6px 10px',
      borderRadius: '999px',
      fontSize: '13px',
      boxShadow: '0 8px 24px rgba(0,74,173,0.12)',
      opacity: '0',
      transition: 'all 260ms ease'
    });
    symbolsArea.appendChild(flash);
    requestAnimationFrame(()=> {
      flash.style.opacity = '1';
      flash.style.top = '-48px';
    });
    setTimeout(()=> {
      flash.style.opacity = '0';
      flash.style.top = '-32px';
      setTimeout(()=> flash.remove(), 260);
    }, 900);
  }

  
  const symbolButtons = Array.from(document.querySelectorAll('.symbol'));
  const constructed = document.getElementById('constructed-text');
  const speakBtn = document.getElementById('speak-symbols');
  let constructedPhrase = [];

  function addToConstructed(word){
    constructedPhrase.push(word);
    if (constructed) constructed.textContent = constructedPhrase.join(' ');
  }

  
  symbolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      
      const labelNode = btn.querySelector('.sym-text');
      const word = (labelNode && labelNode.textContent) ? labelNode.textContent.trim() : btn.textContent.trim();
      addToConstructed(word);
      
      btn.classList.add('active');
      setTimeout(()=> btn.classList.remove('active'), 220);
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
    if (assistantPopup) assistantPopup.classList.toggle('hidden');
  });

  
  const startCameraBtn = document.getElementById('start-camera');
  const stopCameraBtn = document.getElementById('stop-camera');
  const resetDetectionBtn = document.getElementById('reset-detection');
  const detectedText = document.getElementById('detected-text');

  let detectionIndex = 0;
  let detectionInterval = null;
  const demoSequence = ["Hello","Thank you","Help me","I need assistance","Good morning"];
  if (startCameraBtn) startCameraBtn.addEventListener('click', async ()=> {
   
    startCameraBtn.classList.add('hidden');
    if (stopCameraBtn) stopCameraBtn.classList.remove('hidden');
    if (resetDetectionBtn) resetDetectionBtn.classList.remove('hidden');

    
    let usingDemo = true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        
        const cameraArea = document.getElementById('camera-area');
        
        const demoEl = document.getElementById('camera-demo');
        if (demoEl) demoEl.classList.add('hidden');
        let video = document.getElementById('live-video');
        if (!video) {
          video = document.createElement('video');
          video.id = 'live-video';
          video.autoplay = true;
          video.playsInline = true;
          video.muted = true;
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          if (cameraArea) cameraArea.appendChild(video);
        }
        video.srcObject = stream;
        usingDemo = false;
        if (detectedText) detectedText.textContent = 'Camera active — analyzing...';
        
        detectionIndex = 0;
        detectionInterval = setInterval(()=>{
          if (detectionIndex < demoSequence.length) {
            if (detectedText) detectedText.textContent = demoSequence[detectionIndex];
            detectionIndex++;
          } else {
            clearInterval(detectionInterval);
            detectionInterval = null;
            if (detectedText) detectedText.textContent = 'Finished (demo)';
          }
        }, 1800);
      } catch (err) {
       
        if (detectedText) detectedText.textContent = 'Permission denied or camera error — using demo.';
        usingDemo = true;
      }
    } else {
      if (detectedText) detectedText.textContent = 'Camera not supported — using demo.';
    }

    if (usingDemo) {
      
      detectionIndex = 0;
      detectionInterval = setInterval(()=>{
        if (detectionIndex < demoSequence.length) {
          if (detectedText) detectedText.textContent = demoSequence[detectionIndex];
          detectionIndex++;
        } else {
          clearInterval(detectionInterval);
          detectionInterval = null;
          if (detectedText) detectedText.textContent = 'Finished (demo)';
        }
      }, 1800);
    }
  });

  if (stopCameraBtn) stopCameraBtn.addEventListener('click', ()=>{
    
    if (detectionInterval) { clearInterval(detectionInterval); detectionInterval = null; }
    
    const video = document.getElementById('live-video');
    if (video && video.srcObject) {
      const stream = video.srcObject;
      if (stream.getTracks) stream.getTracks().forEach(t => t.stop());
      video.srcObject = null;
      video.remove(); 
      const demoEl = document.getElementById('camera-demo');
      if (demoEl) demoEl.classList.remove('hidden');
    }
    if (startCameraBtn) startCameraBtn.classList.remove('hidden');
    stopCameraBtn.classList.add('hidden');
    if (detectedText) detectedText.textContent = 'Demo stopped';
  });

  if (resetDetectionBtn) resetDetectionBtn.addEventListener('click', ()=>{
    if (detectionInterval) { clearInterval(detectionInterval); detectionInterval = null; }
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

  
  window.addEventListener('beforeunload', () => {
    mockTimers.forEach(t=>clearTimeout(t));
    mockTimers = [];
    if (mockIntervalHandle) { clearInterval(mockIntervalHandle); mockIntervalHandle = null; }
    if (detectionInterval) { clearInterval(detectionInterval); detectionInterval = null; }
    
    const video = document.getElementById('live-video');
    if (video && video.srcObject) {
      const s = video.srcObject;
      if (s.getTracks) s.getTracks().forEach(t => t.stop());
    }
  });
  const clearBtn = document.getElementById("clear-symbols");

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      constructedPhrase = [];
      if (typeof constructed !== 'undefined' && constructed) {
        constructed.textContent = "Selected phrase will appear here";
      } else {

        const el = document.getElementById("constructed-text");
        if (el) el.textContent = "Selected phrase will appear here";
      }
    });
  }

});
