
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  const splashDelay = 1400;

  // Translation dictionary
  const translations = {
    english: {
      home_title: 'Home',
      home_sub: 'Choose how you\'d like to communicate today',
      speech_to_symbols_title: 'Speech to Symbols',
      speech_to_symbols_sub: 'Speak and see symbols appear',
      symbols_to_voice_title: 'Symbols to Voice',
      symbols_to_voice_sub: 'Transform symbols into speech',
      ai_knowledge_title: 'AI Knowledge',
      ai_knowledge_sub: 'Learn and get smart assistance',
      live_sign_detection_title: 'Live Sign Detection',
      live_sign_detection_sub: 'Real-time sign language translation',
      settings_title: 'Settings',
      settings_sub: 'Customize your experience',
      about_title: 'About SilentConnect',
      about_sub: 'Learn more about the project',
      welcome_back: 'Welcome back!',
      choose_communication: 'Choose how you would like to communicate today',
      card_speech_to_symbols_title: 'Speech to Symbols',
      card_speech_to_symbols_desc: 'Convert speech to visual symbols',
      card_symbols_to_voice_title: 'Symbols to Voice',
      card_symbols_to_voice_desc: 'Transform symbols into speech',
      card_ai_knowledge_title: 'AI Knowledge',
      card_ai_knowledge_desc: 'Smart tips and assistance',
      card_settings_title: 'Settings',
      card_settings_desc: 'Customize your experience',
      start_listening: '🎤 Start Listening',
      live_sign_detection: '📷 Live Sign Detection',
      symbols_btn: '🗂️ Symbols',
      back_btn: 'Back',
      symbols_library_title: 'Symbols Library',
      symbols_library_sub: 'Manage your symbols and add new ones',
      all_symbols_title: 'All Symbols',
      add_new_symbol_title: 'Add New Symbol',
      add_symbol_emoji_placeholder: 'Emoji (e.g. 😊)',
      add_symbol_meaning_placeholder: 'Meaning (e.g. happy)',
      add_symbol_button: '➕ Add Symbol',
      speech_to_symbols_main_title: 'Speech to Symbols',
      speech_to_symbols_main_sub: 'Speak and see symbols appear',
      recognized_symbols_title: 'Recognized Symbols',
      symbols_will_appear: 'Symbols will appear here as you speak',
      symbols_to_voice_title: 'Symbols to Voice',
      symbols_to_voice_sub: 'Pick symbols to build a message',
      selected_phrase_placeholder: 'Selected phrase will appear here',
      ai_knowledge_main_title: 'AI Knowledge',
      ai_knowledge_main_sub: 'Learn and get smart assistance',
      tips_tab: 'Tips',
      emergency_tab: 'Emergency',
      signs_tab: 'Signs',
      ai_assistant_welcome: 'Hi! I\'m here to help. What would you like assistance with?',
      live_sign_detection_main_title: 'Live Sign Detection',
      live_sign_detection_main_sub: 'Real-time sign language translation',
      detected_text_title: 'Detected Text',
      start_detection: '📷 Start Detection',
      stop_btn: '⏹ Stop',
      reset_detection: '↻ Reset',
      tips_for_better_detection: 'Tips for Better Detection',
      tips_list_1: 'Ensure good lighting and clear background',
      tips_list_2: 'Keep hands within the camera frame',
      primary_language_label: 'Primary Language',
      dark_mode_label: 'Dark Mode',
      font_size_label: 'Font Size',
      call_me: 'Call someone for me',
      need_medical_help: 'I need medical help',
      yes: 'Yes',
      no: 'No'
    },
    arabic: {
      home_title: 'الرئيسية',
      home_sub: 'اختر كيف تود التواصل اليوم',
      speech_to_symbols_title: 'من الكلام إلى الرموز',
      speech_to_symbols_sub: 'تحدث وشاهد الرموز تظهر',
      symbols_to_voice_title: 'من الرموز إلى الصوت',
      symbols_to_voice_sub: 'تحويل الرموز إلى كلام',
      ai_knowledge_title: 'المعرفة بالذكاء الاصطناعي',
      ai_knowledge_sub: 'نصائح ومساعدة ذكية',
      live_sign_detection_title: 'كشف الإشارات الحية',
      live_sign_detection_sub: 'ترجمة لغة الإشارة في الوقت الحقيقي',
      settings_title: 'الإعدادات',
      settings_sub: 'خصص تجربتك',
      about_title: 'حول SilentConnect',
      about_sub: 'تعرف أكثر على المشروع',
      welcome_back: 'مرحباً مجدداً!',
      choose_communication: 'اختر كيف تود التواصل اليوم',
      card_speech_to_symbols_title: 'من الكلام إلى الرموز',
      card_speech_to_symbols_desc: 'تحويل الكلام إلى رموز بصرية',
      card_symbols_to_voice_title: 'من الرموز إلى الصوت',
      card_symbols_to_voice_desc: 'تحويل الرموز إلى كلام',
      card_ai_knowledge_title: 'المعرفة بالذكاء الاصطناعي',
      card_ai_knowledge_desc: 'نصائح ومساعدات ذكية',
      card_settings_title: 'الإعدادات',
      card_settings_desc: 'خصص تجربتك',
      start_listening: '🎤 بدء الاستماع',
      live_sign_detection: '📷 كشف الإشارة الحية',
      symbols_btn: '🗂️ الرموز',
      back_btn: 'عودة',
      symbols_library_title: 'مكتبة الرموز',
      symbols_library_sub: 'إدارة الرموز الخاصة بك وإضافة المزيد',
      all_symbols_title: 'جميع الرموز',
      add_new_symbol_title: 'إضافة رمز جديد',
      add_symbol_emoji_placeholder: 'رمز تعبيري (مثلا 😊)',
      add_symbol_meaning_placeholder: 'المعنى (مثلا سعيد)',
      add_symbol_button: '➕ إضافة رمز',
      speech_to_symbols_main_title: 'من الكلام إلى الرموز',
      speech_to_symbols_main_sub: 'تحدث وشاهد الرموز تظهر',
      recognized_symbols_title: 'الرموز المعترف بها',
      symbols_will_appear: 'ستظهر الرموز هنا أثناء حديثك',
      symbols_to_voice_title: 'من الرموز إلى الصوت',
      symbols_to_voice_sub: 'اختر الرموز لبناء جملة',
      selected_phrase_placeholder: 'الجملة المختارة ستظهر هنا',
      ai_knowledge_main_title: 'المعرفة بالذكاء الاصطناعي',
      ai_knowledge_main_sub: 'تعلم واحصل على مساعدة ذكية',
      tips_tab: 'نصائح',
      emergency_tab: 'حالات طوارئ',
      signs_tab: 'الإشارات',
      ai_assistant_welcome: 'مرحباً! أنا هنا للمساعدة. ماذا ترغب في المساعدة به؟',
      live_sign_detection_main_title: 'كشف الإشارات الحية',
      live_sign_detection_main_sub: 'ترجمة لغة الإشارة في الوقت الحقيقي',
      detected_text_title: 'النص المكتشف',
      start_detection: '📷 بدء الكشف',
      stop_btn: '⏹ إيقاف',
      reset_detection: '↻ إعادة تعيين',
      tips_for_better_detection: 'نصائح لتحسين الكشف',
      tips_list_1: 'تأكد من وجود إضاءة جيدة وخلفية واضحة',
      tips_list_2: 'حافظ على يديك ضمن إطار الكاميرا',
      primary_language_label: 'اللغة الأساسية',
      dark_mode_label: 'وضع الظلام',
      font_size_label: 'حجم الخط',
      call_me: 'اتصل بشخص ما',
      need_medical_help: 'أحتاج مساعدة طبية',
      yes: 'نعم',
      no: 'لا'
    },
    french: {
      home_title: 'Accueil',
      home_sub: 'Choisissez comment vous souhaitez communiquer aujourd\'hui',
      speech_to_symbols_title: 'Parole en symboles',
      speech_to_symbols_sub: 'Parlez et voyez les symboles apparaître',
      symbols_to_voice_title: 'Symboles en voix',
      symbols_to_voice_sub: 'Transformez les symboles en parole',
      ai_knowledge_title: 'Connaissances IA',
      ai_knowledge_sub: 'Conseils intelligents et assistance',
      live_sign_detection_title: 'Détection des signes en direct',
      live_sign_detection_sub: 'Traduction en temps réel du langage des signes',
      settings_title: 'Paramètres',
      settings_sub: 'Personnalisez votre expérience',
      about_title: 'À propos de SilentConnect',
      about_sub: 'En savoir plus sur le projet',
      welcome_back: 'Bon retour!',
      choose_communication: 'Choisissez comment vous souhaitez communiquer aujourd\'hui',
      card_speech_to_symbols_title: 'Parole en symboles',
      card_speech_to_symbols_desc: 'Convertir la parole en symboles visuels',
      card_symbols_to_voice_title: 'Symboles en voix',
      card_symbols_to_voice_desc: 'Transformer les symboles en parole',
      card_ai_knowledge_title: 'Connaissances IA',
      card_ai_knowledge_desc: 'Conseils et assistance intelligents',
      card_settings_title: 'Paramètres',
      card_settings_desc: 'Personnalisez votre expérience',
      start_listening: '🎤 Commencer à écouter',
      live_sign_detection: '📷 Détection en direct des signes',
      symbols_btn: '🗂️ Symboles',
      back_btn: 'Retour',
      symbols_library_title: 'Bibliothèque de symboles',
      symbols_library_sub: 'Gérez vos symboles et ajoutez-en de nouveaux',
      all_symbols_title: 'Tous les symboles',
      add_new_symbol_title: 'Ajouter un nouveau symbole',
      add_symbol_emoji_placeholder: 'Émoji (ex. 😊)',
      add_symbol_meaning_placeholder: 'Signification (ex. heureux)',
      add_symbol_button: '➕ Ajouter un symbole',
      speech_to_symbols_main_title: 'Parole en symboles',
      speech_to_symbols_main_sub: 'Parlez et voyez les symboles apparaître',
      recognized_symbols_title: 'Symboles reconnus',
      symbols_will_appear: 'Les symboles apparaîtront ici pendant que vous parlez',
      symbols_to_voice_title: 'Symboles en voix',
      symbols_to_voice_sub: 'Choisissez des symboles pour construire un message',
      selected_phrase_placeholder: 'La phrase sélectionnée apparaîtra ici',
      ai_knowledge_main_title: 'Connaissances IA',
      ai_knowledge_main_sub: 'Apprenez et obtenez une assistance intelligente',
      tips_tab: 'Conseils',
      emergency_tab: 'Urgence',
      signs_tab: 'Signes',
      ai_assistant_welcome: 'Salut! Je suis là pour aider. Que souhaitez-vous?',
      live_sign_detection_main_title: 'Détection des signes en direct',
      live_sign_detection_main_sub: 'Traduction en temps réel du langage des signes',
      detected_text_title: 'Texte détecté',
      start_detection: '📷 Démarrer la détection',
      stop_btn: '⏹ Arrêter',
      reset_detection: '↻ Réinitialiser',
      tips_for_better_detection: 'Conseils pour une meilleure détection',
      tips_list_1: 'Assurez-vous d\'une bonne lumière et d\'un arrière-plan clair',
      tips_list_2: 'Gardez les mains dans le cadre de la caméra',
      primary_language_label: 'Langue principale',
      dark_mode_label: 'Mode sombre',
      font_size_label: 'Taille de la police',
      call_me: 'Appelle quelqu\'un pour moi',
      need_medical_help: 'J\'ai besoin d\'aide médicale',
      yes: 'Oui',
      no: 'Non'
    }
  };

  let currentLang = 'english';

  // Function to apply translations to the UI
  function applyTranslations(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update main page lang attribute and direction
    const htmlEl = document.documentElement;
    htmlEl.lang = lang === 'arabic' ? 'ar' : (lang === 'french' ? 'fr' : 'en');
    htmlEl.dir = lang === 'arabic' ? 'rtl' : 'ltr';

    // Update texts in various UI elements
    // Home section
    const welcomeEl = document.querySelector('.welcome');
    if (welcomeEl) welcomeEl.textContent = t.welcome_back;
    const subMuted = document.querySelector('.sub.muted');
    if (subMuted) subMuted.textContent = t.choose_communication;

    // Cards on home page
    const cards = document.querySelectorAll('.cards .card');
    if (cards.length >= 4) {
      cards[0].querySelector('h4').textContent = t.card_speech_to_symbols_title;
      cards[0].querySelector('p.muted').textContent = t.card_speech_to_symbols_desc;

      cards[1].querySelector('h4').textContent = t.card_symbols_to_voice_title;
      cards[1].querySelector('p.muted').textContent = t.card_symbols_to_voice_desc;

      cards[2].querySelector('h4').textContent = t.card_ai_knowledge_title;
      cards[2].querySelector('p.muted').textContent = t.card_ai_knowledge_desc;

      cards[3].querySelector('h4').textContent = t.card_settings_title;
      cards[3].querySelector('p.muted').textContent = t.card_settings_desc;
    }

    // Buttons on home page
    const btnListen = document.getElementById('btn-listen');
    if (btnListen) btnListen.textContent = t.start_listening;
    const btnLive = document.getElementById('btn-live');
    if (btnLive) btnLive.textContent = t.live_sign_detection;
    const btnSymbols = document.getElementById('btn-symbols');
    if (btnSymbols) btnSymbols.textContent = t.symbols_btn;

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(btn => {
      btn.textContent = t.back_btn;
    });

    // Symbols Library section
    const symbolsLibraryTitle = document.querySelector('#symbols-library h3');
    if (symbolsLibraryTitle) symbolsLibraryTitle.textContent = t.symbols_library_title;
    const symbolsLibrarySub = document.querySelector('#symbols-library p.muted');
    if (symbolsLibrarySub) symbolsLibrarySub.textContent = t.symbols_library_sub;
    const allSymbolsTitle = document.querySelectorAll('#symbols-library .panel h4')[0];
    if (allSymbolsTitle) allSymbolsTitle.textContent = t.all_symbols_title;
    const addNewSymbolTitle = document.querySelectorAll('#symbols-library .panel h4')[1];
    if (addNewSymbolTitle) addNewSymbolTitle.textContent = t.add_new_symbol_title;
    const emojiInput = document.getElementById('new-emoji');
    if (emojiInput) emojiInput.placeholder = t.add_symbol_emoji_placeholder;
    const meaningInput = document.getElementById('new-meaning');
    if (meaningInput) meaningInput.placeholder = t.add_symbol_meaning_placeholder;
    const addSymbolBtn = document.getElementById('add-symbol-btn');
    if (addSymbolBtn) addSymbolBtn.textContent = t.add_symbol_button;

    // Speech to Symbols section
    const speechSymbolsTitle = document.querySelector('#speech-to-symbols h3');
    if (speechSymbolsTitle) speechSymbolsTitle.textContent = t.speech_to_symbols_main_title;
    const speechSymbolsSub = document.querySelector('#speech-to-symbols p.muted');
    if (speechSymbolsSub) speechSymbolsSub.textContent = t.speech_to_symbols_main_sub;
    const recognizedTitle = document.querySelector('#speech-to-symbols .panel h4');
    if (recognizedTitle) recognizedTitle.textContent = t.recognized_symbols_title;
    const symbolsArea = document.getElementById('symbols-area');
    if (symbolsArea && symbolsArea.textContent.includes('Symbols will appear')) symbolsArea.textContent = t.symbols_will_appear;

    // Symbols to Voice section
    const symbolsToVoiceTitle = document.querySelector('#symbols-to-voice h3');
    if (symbolsToVoiceTitle) symbolsToVoiceTitle.textContent = t.symbols_to_voice_title;
    const symbolsToVoiceSub = document.querySelector('#symbols-to-voice p.muted');
    if (symbolsToVoiceSub) symbolsToVoiceSub.textContent = t.symbols_to_voice_sub;
    const constructedText = document.getElementById('constructed-text');
    if (constructedText && constructedText.textContent.trim() === 'Selected phrase will appear here') {
      constructedText.textContent = t.selected_phrase_placeholder;
    }
    const speakBtn = document.getElementById('speak-symbols');
    if (speakBtn) speakBtn.textContent = '🔊 ' + (t.speak_button_text || 'Speak');

    // AI Knowledge section
    const aiKnowledgeTitle = document.querySelector('#ai-knowledge h3');
    if (aiKnowledgeTitle) aiKnowledgeTitle.textContent = t.ai_knowledge_main_title;
    const aiKnowledgeSub = document.querySelector('#ai-knowledge p.muted');
    if (aiKnowledgeSub) aiKnowledgeSub.textContent = t.ai_knowledge_main_sub;
    document.querySelectorAll('.tabs-head .tab')[0].textContent = t.tips_tab;
    document.querySelectorAll('.tabs-head .tab')[1].textContent = t.emergency_tab;
    document.querySelectorAll('.tabs-head .tab')[2].textContent = t.signs_tab;
    const assistantPopup = document.getElementById('assistant-popup');
    if (assistantPopup) {
      const p = assistantPopup.querySelector('p.muted');
      if (p) p.textContent = t.ai_assistant_welcome;
    }

    // Live Sign Detection section
    const liveSignTitle = document.querySelector('#live-sign-detection h3');
    if (liveSignTitle) liveSignTitle.textContent = t.live_sign_detection_main_title;
    const liveSignSub = document.querySelector('#live-sign-detection p.muted');
    if (liveSignSub) liveSignSub.textContent = t.live_sign_detection_main_sub;
    const detectedTextTitle = document.querySelector('#live-sign-detection .detection-box strong');
    if (detectedTextTitle) detectedTextTitle.textContent = t.detected_text_title;
    const startCameraBtn = document.getElementById('start-camera');
    if (startCameraBtn) startCameraBtn.textContent = t.start_detection;
    const stopCameraBtn = document.getElementById('stop-camera');
    if (stopCameraBtn) stopCameraBtn.textContent = t.stop_btn;
    const resetDetBtn = document.getElementById('reset-detection');
    if (resetDetBtn) resetDetBtn.textContent = t.reset_detection;
    const tipsHeader = document.querySelector('#live-sign-detection .tips strong');
    if (tipsHeader) tipsHeader.textContent = t.tips_for_better_detection;
    const tipsListItems = document.querySelectorAll('#live-sign-detection .tips ul li');
    if (tipsListItems.length >= 2) {
      tipsListItems[0].textContent = t.tips_list_1;
      tipsListItems[1].textContent = t.tips_list_2;
    }

    // Settings section
    const settingsTitle = document.querySelector('#settings h3');
    if (settingsTitle) settingsTitle.textContent = t.settings_title;
    const settingsSub = document.querySelector('#settings p.muted');
    if (settingsSub) settingsSub.textContent = t.settings_sub;
    const primaryLangLabel = document.querySelector('#settings .setting-row label');
    if (primaryLangLabel) primaryLangLabel.textContent = t.primary_language_label;
    const darkModeLabel = document.querySelectorAll('#settings .setting-row label')[1];
    if (darkModeLabel) darkModeLabel.textContent = t.dark_mode_label;
    const fontSizeLabel = document.querySelectorAll('#settings .setting-row label')[2];
    if (fontSizeLabel) fontSizeLabel.textContent = t.font_size_label;

    // About section
    const aboutTitle = document.querySelector('#about h3');
    if (aboutTitle) aboutTitle.textContent = t.about_title;
    const aboutSub = document.querySelector('#about p.muted');
    if (aboutSub) aboutSub.textContent = t.about_sub;

    // Buttons with static text
    const backBtns = document.querySelectorAll('.back-row .btn-back');
    backBtns.forEach(btn => btn.textContent = t.back_btn);

  }

  // Initial page load language
  let savedLang = localStorage.getItem('selectedLanguage');
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ar')) savedLang = 'arabic';
    else if (browserLang.startsWith('fr')) savedLang = 'french';
    else savedLang = 'english';
  }

  applyTranslations(savedLang);

  // Language selector listener
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      applyTranslations(selected);
      localStorage.setItem('selectedLanguage', selected);
    });
  }

  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');

    const title = document.getElementById('screen-title');
    const sub = document.getElementById('screen-sub');
    const map = {
      'home': [translations[currentLang].home_title, translations[currentLang].home_sub],
      'speech-to-symbols': [translations[currentLang].speech_to_symbols_title, translations[currentLang].speech_to_symbols_sub],
      'symbols-to-voice': [translations[currentLang].symbols_to_voice_title, translations[currentLang].symbols_to_voice_sub],
      'ai-knowledge': [translations[currentLang].ai_knowledge_title, translations[currentLang].ai_knowledge_sub],
      'live-sign-detection': [translations[currentLang].live_sign_detection_title, translations[currentLang].live_sign_detection_sub],
      'settings': [translations[currentLang].settings_title, translations[currentLang].settings_sub],
      'about': [translations[currentLang].about_title, translations[currentLang].about_sub]
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
  if (btnSymbols) btnSymbols.addEventListener('click', () => showView('symbols-library'));
  if (btnAbout) btnAbout.addEventListener('click', () => showView('about'));

  document.querySelectorAll('[data-back]').forEach(b => {
    b.addEventListener('click', () => showView('home'));
  });

  // New read text button logic for live sign detection
  const readTextBtn = document.getElementById('read-text-btn');
  const detectedText = document.getElementById('detected-text');
  let isSpeaking = false;
  let utterance = null;

  if (readTextBtn && detectedText && 'speechSynthesis' in window) {
    readTextBtn.addEventListener('click', () => {
      const textToRead = detectedText.textContent.trim();
      if (!textToRead || textToRead === 'Start camera to begin detection' || textToRead === 'Finished (demo)') {
        alert('No valid text to read.');
        return;
      }
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        readTextBtn.textContent = '🔊 Read Text';
        return;
      }

      utterance = new SpeechSynthesisUtterance(textToRead);
      isSpeaking = true;
      readTextBtn.textContent = '⏹ Stop Reading';

      utterance.onend = () => {
        isSpeaking = false;
        readTextBtn.textContent = '🔊 Read Text';
      };
      utterance.onerror = () => {
        isSpeaking = false;
        readTextBtn.textContent = '🔊 Read Text';
        alert('An error occurred during speech synthesis.');
      };

      window.speechSynthesis.speak(utterance);
    });
  }

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
        }, 4000);
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

  let customSymbols = JSON.parse(localStorage.getItem('customSymbols')) || [];

  function renderLibrary() {
    const libraryGrid = document.getElementById('library-grid');
    if (!libraryGrid) return;

    const defaultSymbols = Array.from(document.querySelectorAll('#symbol-grid .symbol')).map(btn => ({
      emoji: btn.querySelector('.sym-emoji').textContent,
      meaning: btn.querySelector('.sym-text').textContent
    }));

    const allSymbols = [...defaultSymbols, ...customSymbols];

    libraryGrid.innerHTML = allSymbols.map((symbol, index) => `
      <div class="library-symbol" data-index="${index}">
        <div class="symbol-emoji">${symbol.emoji}</div>
        <div class="symbol-label">${symbol.meaning}</div>
        ${index >= defaultSymbols.length ? '<button class="delete-symbol">×</button>' : ''}
      </div>
    `).join('');

    libraryGrid.querySelectorAll('.delete-symbol').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(e.target.closest('.library-symbol').dataset.index) - defaultSymbols.length;
        customSymbols.splice(index, 1);
        localStorage.setItem('customSymbols', JSON.stringify(customSymbols));
        renderLibrary();
      });
    });
  }

  const addSymbolBtn = document.getElementById('add-symbol-btn');
  const newEmojiInput = document.getElementById('new-emoji');
  const newMeaningInput = document.getElementById('new-meaning');

  function isEmoji(str) {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1f926}-\u{1f937}]|[\u{10000}-\u{10FFFF}]|[\u{1f1e6}-\u{1f1ff}]|[\u{1f191}-\u{1f251}]|[\u{1f004}]|[\u{1f0cf}]|[\u{1f170}-\u{1f171}]|[\u{1f17e}-\u{1f17f}]|[\u{1f18e}]|[\u{3030}]|[\u{2b50}]|[\u{2b55}]|[\u{2934}-\u{2935}]|[\u{2b05}-\u{2b07}]|[\u{2b1b}-\u{2b1c}]|[\u{3297}]|[\u{3299}]|[\u{303d}]|[\u{00a9}]|[\u{00ae}]|[\u{2122}]|[\u{23f3}]|[\u{24c2}]|[\u{23e9}-\u{23ef}]|[\u{25b6}]|[\u{23f8}-\u{23fa}]/u;
    return emojiRegex.test(str) && str.length <= 2;
  }

  if (addSymbolBtn) {
    addSymbolBtn.addEventListener('click', () => {
      const emoji = newEmojiInput.value.trim();
      const meaning = newMeaningInput.value.trim();

      if (!emoji) {
        alert('Please enter an emoji.');
        return;
      }
      if (!isEmoji(emoji)) {
        alert('Please enter a valid emoji only.');
        return;
      }
      if (!meaning) {
        alert('Please enter the meaning.');
        return;
      }

      const defaultSymbols = Array.from(document.querySelectorAll('#symbol-grid .symbol')).map(btn => ({
        emoji: btn.querySelector('.sym-emoji').textContent,
        meaning: btn.querySelector('.sym-text').textContent
      }));
      const allSymbols = [...defaultSymbols, ...customSymbols];

      const exists = allSymbols.some(symbol => symbol.emoji === emoji);
      if (exists) {
        alert('This emoji already exists in the library.');
        return;
      }

      customSymbols.push({ emoji, meaning });
      localStorage.setItem('customSymbols', JSON.stringify(customSymbols));
      newEmojiInput.value = '';
      newMeaningInput.value = '';
      renderLibrary();
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-screen="symbols-library"]') || e.target.id === 'btn-symbols') {
      setTimeout(renderLibrary, 100); 
    }
  });

});
