/* 光的課程島敘事入口。僅接收原站提供的角色與導覽，不改動其他島嶼。 */
'use strict';
window.createLightJourney = function ({container, mountSoul, guideMarkup, goMap, backToIslands}) {
  let screen = 'story', act = 1, beat = 0, choice = null, pause = false, finished = false;
  let lifeTopic = 'body', lifeOpened = false, blessingFor = null, blessingHeld = false;
  const responses = {
    A: '你花了那麼多心力，第一個念頭卻是「我得證明自己」，很可以理解。腦內的辯論大會可能連開場白都準備好了。先不急著責怪這股火，它也許是在替你的付出說話。',
    B: '嘴上說「沒事」，心裡卻已經重播第八遍了。安靜不一定代表不在意，也可能是你還不知道怎麼把委屈說出來。這份不舒服，可以先讓自己知道。',
    C: '你感覺到不舒服，也試著留一點時間給自己。停一下，不代表要忍下來；等你準備好了，仍然可以清楚說明，甚至告訴對方：「這樣說，我不太能接受。」'
  };
  const testimony = [
    {title:'我慢慢發現，自己變得不一樣了。', text:'我修習《光的課程》多年，最大的感受是自己越來越自在、快樂、平靜。我的心容量越來越大，也很少生氣了。', foot:'這是網站創作者的真實修習感受。'},
    {title:'生活還是會有不順心的時候。', text:'事情並沒有從此一帆風順，別人也沒有突然都照著我的期待說話、做事。只是以前很容易讓我生氣的事，如今不一定需要花掉我那麼多心力。', foot:'不是世界都配合我了，而是我多了一點回應的餘地。'},
    {title:'我不必負責讓所有人都平靜。', text:'有一段時間，我很想讓家裡每個人都心平氣和。後來，我問自己：是不是因為害怕不和樂，把原本需要各自面對的事情，也扛到自己身上了？我可以關心，也需要看見自己的承受度。', foot:'依創作者2023年12月4日的生活紀錄整理。'},
    {title:'心變大了，世界也變寬了。', text:'對我來說，自在、快樂、平靜，是長期修習裡逐漸感受到的變化。我慢慢有更多餘裕，把心力放回真正想過的生活。', foot:'這是我的個人經驗，每個人的步調與感受都可能不同。'}
  ];
  // 依創作者貼文整理；不重用舊招生資料、個案回饋或療效宣稱。
  const lifeStories = {
    body: {
      title: '事情過去了，身體卻還沒有下班。',
      eyebrow: '身體照顧・從一個感受開始',
      paragraphs: ['忙完一整天，嘴上說著「沒事」，肩膀卻還聳著，手也一直握得很緊。', '在一篇談身體的文章裡，我寫過這樣的情境：情緒過去了，身體卻好像還沒有下班。光的練習，可以從願意停下來、聽見自己的狀態開始。'],
      quote: '有時候，真正的修行就是：今天承認一句「我真的累了。」然後好好休息。',
      source: '2026年9月2日｜光的靈魂答錄機 Q6',
      action: '陪自己的身體停一下',
      response: '你可以先看看：肩膀、下巴或手掌，哪裡還在用力？不用刻意改變呼吸，也不用急著讓它放鬆。問問自己：「現在有什麼需要被照顧？」休息、喝口水，或把一件事情留到明天，都可以是回應。',
      note: '這是一份日常覺察邀請。身體不適持續、嚴重或讓你擔心時，也請尋求合適的醫療照顧。'
    },
    relationship: {
      title: '關心一個人，不必接管他的情緒。',
      eyebrow: '人際關係・把自己的位置留回來',
      paragraphs: ['我曾經很想當家裡的和平擁護者，看到家人有情緒，就希望趕快讓一切平靜下來。', '後來我開始問：我是不是因為害怕不和樂，扛起了讓所有人心平氣和的責任？有些感受與磨合，需要留給彼此去面對。', '修習走進關係，可以包含陪伴與理解，也包含把自己的需要說出來。'],
      quote: '扛起讓所有人感受到心平氣和的責任，明明這是要各自負責的？',
      source: '2023年12月4日｜創作者的家庭相處紀錄',
      action: '看看可以怎麼說',
      response: '「我聽見你很不舒服，也願意陪你談。不過，我現在需要先休息一下，我們晚一點再說。」你可以依自己的情況調整這句話，不必一次就說得很漂亮。',
      note: '送光、傾聽與表達界線，可以一起存在。你也在這段關係裡。'
    },
    giving: {
      title: '有些時候，送光就是我此刻能做的一件事。',
      eyebrow: '送光與祝福・當我還沒有答案',
      paragraphs: ['2019年，看見一則讓我很受觸動的新聞時，我不知道能幫上什麼忙，於是寫下了這幾句話。', '後來，面對家人的困境，我也提醒自己：陪在旁邊、聽他訴苦，不跟著謾罵，也是一種支持。朋友問，想祝福，卻說不出好聽的話怎麼辦？我回答：「那麼就送光吧。」'],
      quote: '我不知道能夠幫什麼忙，但我知道，我可以送光，送上祝福，送上善念。',
      source: '2019年6月12日、2022年12月26日｜創作者的送光筆記',
      note: '在《光的課程》的修習裡，送光是一種運用靜心、祈請與光的觀想，表達關懷與祝福的方式。也可以繼續傾聽、陪伴，留意現實中能提供的協助。'
    }
  };
  function lifeButtons() {
    return `<section class="light-life-overview"><p class="light-eyebrow">光，可以走進這些時刻</p><h2>把光的修習，帶進身體、關係與日常生活。</h2><p class="light-note">選一段生活筆記，看看你想從哪裡開始。也可以直接往下認識課程。</p><div class="light-life-grid">
      <button type="button" data-life-topic="body"><span class="light-life-symbol" aria-hidden="true">○</span><strong>身體還沒有下班</strong><small>從緊繃與疲累裡，聽見自己的需要。</small><span>讀身體照顧的故事 →</span></button>
      <button type="button" data-life-topic="relationship"><span class="light-life-symbol" aria-hidden="true">◇</span><strong>不必當全家的情緒管理員</strong><small>陪伴別人時，也把自己的位置留下。</small><span>讀關係與界線的故事 →</span></button>
      <button type="button" data-life-topic="giving"><span class="light-life-symbol" aria-hidden="true">✧</span><strong>不知道怎麼幫忙，也能送出祝福</strong><small>「我可以送光，送上祝福，送上善念。」</small><span>讀送光的故事 →</span></button>
    </div></section>`;
  }
  function lifeStoryHtml() {
    const story = lifeStories[lifeTopic];
    const receiver = {self:'自己',person:'一位在乎的人',place:'一個牽掛的地方'};
    return `<section class="light-card light-life-story"><p class="light-eyebrow">${story.eyebrow}</p>${story.paragraphs.map(t=>`<p>${t}</p>`).join('')}<blockquote class="light-life-quote">「${story.quote}」</blockquote><p class="light-note">${story.source}・依貼文整理</p><p class="light-note">${story.note}</p></section>
      ${lifeTopic==='giving'?`<section class="light-card light-blessing"><h2>此刻，你想把關懷放在哪裡？</h2><p class="light-note">不需要輸入姓名，也不用在這裡說明發生了什麼。你可以只讀故事，或帶一份心意離開。</p><div class="light-recipient-buttons" role="group" aria-label="想祝福的對象">${Object.entries(receiver).map(([key,name])=>`<button type="button" data-blessing-for="${key}" aria-pressed="${blessingFor===key}">${name}</button>`).join('')}</div><div class="light-blessing-response" aria-live="polite">${blessingFor?`<p>想起${receiver[blessingFor]}，如果願意，可以在心裡說：</p><p class="light-quote">「願你得到需要的支持與照顧。」</p><p class="light-note">熟悉送光練習的你，也可以用自己的方式送上祝福。沒有練習經驗時，只把這份關懷留在心裡就好。</p>${blessingHeld?'<div class="light-kept-blessing"><span class="light-blessing-orb" aria-hidden="true"></span><p>帶著這份心意，照自己的步調回到生活裡。</p><p class="light-note">如果願意，也可以傳一句問候，或問問對方現在需要什麼。</p></div>':button('把這份祝福留在心裡','hold-blessing',true)}`:''}</div></section>`:
      `<section class="light-card light-life-practice"><p class="light-eyebrow">小光陪你想一想</p>${lifeOpened?`<p role="status">${story.response}</p>`:button(story.action,'open-life',true)}</section>`}
      <div class="light-actions">${button('← 回到光之旅程','invite',true)}${button('認識《光的課程》','info')}</div><nav class="light-life-switch" aria-label="其他生活筆記">${Object.entries(lifeStories).filter(([key])=>key!==lifeTopic).map(([key,item])=>`<button type="button" data-life-topic="${key}">${item.eyebrow.split('・')[0]} →</button>`).join('')}</nav>`;
  }
  const button = (label, action, quiet = false) => `<button type="button" class="${quiet ? 'btn-quiet' : 'btn-story'}" data-journey="${action}">${label}</button>`;
  let previousOpening = 0;
  function scene() {
    return `<div class="light-scene light-scene-${act}" style="--previous-opening:${previousOpening};--opening:${act === 2 ? beat : act === 3 ? 4 : pause ? 1 : 0}" aria-hidden="true">
      <svg viewBox="0 0 600 230" focusable="false">
        <ellipse class="light-scene-halo" cx="300" cy="120" rx="215" ry="100" fill="#F1E4C6"/>
        <polygon points="300,130 500,182 300,226 100,182" fill="#E8E2D4"/>
        <polygon points="100,182 300,226 300,236 100,192" fill="#D7CCB7"/>
        <g class="light-wall light-wall-left"><path d="M190 176V52l57-26v137z" fill="#E6DECE"/><path d="M247 26v137l12 5V34z" fill="#CDC1A9"/></g>
        <g class="light-wall light-wall-right"><path d="M410 176V52l-57-26v137z" fill="#F8F4E9"/><path d="M353 26v137l-12 5V34z" fill="#DFD4BE"/></g>
        <path d="M280 191l20-5 21 5-21 5z" fill="#FBF7EB"/>
        <g id="lightJourneySoulMount" transform="translate(282 151) scale(1.08)"></g>
        <g transform="translate(385 121) scale(.72)">${guideMarkup}</g>
        ${act === 1 ? '<g transform="translate(191 107)"><rect width="52" height="38" rx="3" fill="#FAF8F5" stroke="#C8BEAA"/><path d="M8 12h34M8 20h26M8 28h30" stroke="#C8BEAA"/></g>' : ''}
      </svg>
    </div>`;
  }
  function header(title) {
    return `<div class="light-heading"><p class="light-eyebrow">光的課程島・一段約 3 分鐘的小旅程</p><p class="light-subtitle">光的課程｜讓心越來越寬，讓生命越來越自在。</p><ol class="light-progress" aria-label="故事進度">${['一點空間','心的容量','自己的旅程'].map((t,i)=>`<li ${act===i+1?'aria-current="step"':''}><span>0${i+1}</span>${t}</li>`).join('')}</ol><h1 id="lightJourneyHeading" tabindex="-1">${title}</h1></div>`;
  }
  function render(focus = false) {
    let title, body;
    if (screen === 'life') {
      title = lifeStories[lifeTopic].title;
      body = lifeStoryHtml();
    } else if (screen === 'info') {
      title = '認識《光的課程》';
      body = `<section class="light-card"><h2>循序漸進，回到日常生活</h2><p>這是一套把光的修習帶進身體、關係與日常生活的課程。透過課文閱讀、靜心與光的觀想，循序漸進地探索自己，練習照顧感受、理解關係，也學習送光與祝福。</p><h2>從初階開始</h2><p>初階一至四，依序從身體、情緒感受、理性與乙太星光體的角度探索自己。最後一個名稱是課程用來描述精微層面的用語；可以先從「我如何感受自己與生活」開始理解。</p><p>你可以留意：身體什麼時候緊繃？情緒來了，我怎麼對待自己？哪些想法讓我一直繞圈？把課程中的覺察，帶回一次真實的對話與選擇裡。</p><h2>在一起修習的時候</h2><p>我們也練習傾聽與表達：聽同學正在經歷的事，說出自己的感受，需要支持時一起送光，有喜悅時也一起分享。</p><p class="light-note">依創作者2022年5月5日的課程介紹整理；最新上課安排仍以正式公告為準。</p><p class="light-note">本網站的生活邀請與情境題不等同正式課程教材；身體照顧也包含需要時尋求合適的醫療協助。</p></section>${lifeButtons()}
      <section class="light-card"><h2>實際課程資訊</h2><dl class="light-course-fields">${[['課程大綱','待補：正式初階課程大綱'],['修習方式與時數','待補：線上／實體、地點、課程時數'],['開課日期','待補：最新開課日期與梯次'],['教師與資格','待補：授課教師介紹及資格資訊'],['課程費用','待補：正式費用資訊'],['報名方式','待補：聯絡方式及經確認的報名網址']].map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl><p class="light-note">資訊確認後才會開放報名連結。</p></section><div class="light-actions">${button('回到旅程邀請','invite',true)}${button('探索17級光階','map')}</div>`;
    } else if (act === 1) {
      title = '如果有一天，你不再那麼容易生氣';
      body = `<section class="light-card"><p class="light-eyebrow">第一幕・辛苦完成的那件事</p><p>小靈魂忙了一下午，把大家的活動資料整理得整整齊齊，連檔名都改了三次。</p><p>結果，有人看了一眼就說：<br><strong>「這不是早就該做好的嗎？怎麼還弄成這樣？」</strong></p><p>小靈魂手上的茶還沒涼，心裡已經開始冒煙了。</p><h2>如果是你，哪個反應最接近當下？</h2><p class="light-note">沒有標準答案，也可以換個選項看看。</p><div class="light-choices" role="group" aria-label="最接近自己的反應">${[['A','立刻生氣，想證明自己沒有錯。'],['B','表面不說什麼，心裡卻反覆委屈。'],['C','感到不舒服，但願意停一下，想想是否真的需要立即反擊。']].map(([id,text])=>`<button type="button" data-choice="${id}" class="light-choice" aria-pressed="${choice===id}"><span>${id}</span>${text}</button>`).join('')}</div></section>
      ${choice ? `<section class="light-card light-response" aria-live="polite"><p class="light-eyebrow">小光坐在你旁邊</p><p>${responses[choice]}</p>${pause ? '<h2>不急著回，也是一個選擇。</h2><p>小靈魂先把茶放下，感覺一下腳踩著地面的重量。</p><p>生氣可以在，委屈也可以在。你不需要立刻變平靜，更不用答應對方。只是先問自己：「我現在最想讓對方理解的是什麼？」</p><p>在事情與反應之間，這一點空間，是可以慢慢長出來的。</p>' : button('陪小靈魂停一下','pause',true)}</section><div class="light-actions">${pause ? button('看看心變寬以後的生活 →','act2') : ''}</div>` : ''}`;
    } else if (act === 2) {
      title = '心變大了，世界也變寬了';
      const t = testimony[beat];
      body = `<section class="light-card light-testimony"><p class="light-eyebrow">第二幕・網站創作者的修習分享 ${beat+1} / 4</p><h2>${t.title}</h2><p class="light-quote">${t.text}</p><p class="light-note">${t.foot}</p></section><div class="light-actions">${button('← 上一段','previous',true)}${button(beat===3?'我也嚮往這樣的生活 →':'再聽一點 →','next')}</div>`;
    } else {
      title = '你也可以開始自己的光之旅程';
      body = `<section class="light-card"><p class="light-eyebrow">第三幕・從生活裡的一小步開始</p><p>修習不是讓你變成一個永遠不生氣的人，而是讓你漸漸擁有不必被每一次情緒帶走的自由。</p><h2>這份練習，叫作《光的課程》。</h2><p>它是一套循序漸進的修習與自我探索課程。透過課文閱讀、靜心與光的觀想，把覺察帶回身體與人際關係，也學習為自己、他人或牽掛的地方送光。</p><p>初階從身體、情緒感受、理性與乙太星光體四個角度展開。你可以先從最生活的地方開始：留意自己何時繃緊，聽見自己的需要，再練習選擇下一步。</p><p class="light-note">每個人的經驗與步調都不同。這裡的分享是一份邀請，沒有承諾你必須變成什麼樣子。</p></section>${lifeButtons()}<div class="light-paths">${button('認識《光的課程》','info')}${button('探索17級光階','map',true)}${button('返回群島','islands',true)}</div><div class="light-actions">${button('← 回看創作者的分享','back-testimony',true)}${button('重走這段故事','restart',true)}</div>`;
    }
    container.innerHTML = `<article class="light-journey">${header(title)}${scene()}${body}<footer class="light-footer">${button('返回群島，自由走走','islands',true)}<span>照自己的步調閱讀，隨時都可以離開。</span></footer></article>`;
    previousOpening = Number(container.querySelector('.light-scene').style.getPropertyValue('--opening'));
    mountSoul('lightJourneySoulMount');
    container.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{choice=b.dataset.choice;pause=false;render();container.querySelector('.light-response').scrollIntoView({behavior:'smooth',block:'nearest'});container.querySelector(`[data-choice="${choice}"]`).focus({preventScroll:true});});
    container.querySelectorAll('[data-life-topic]').forEach(b=>b.onclick=()=>{if(!finished)return;lifeTopic=b.dataset.lifeTopic;lifeOpened=false;blessingFor=null;blessingHeld=false;screen='life';act=3;render(true);});
    container.querySelectorAll('[data-blessing-for]').forEach(b=>b.onclick=()=>{blessingFor=b.dataset.blessingFor;blessingHeld=false;render();container.querySelector(`[data-blessing-for="${blessingFor}"]`).focus({preventScroll:true});});
    container.querySelectorAll('[data-journey]').forEach(b=>b.onclick=()=>action(b.dataset.journey));
    if (focus) { container.querySelector('h1').focus({preventScroll:true});container.scrollIntoView({behavior:'smooth',block:'start'}); }
  }
  function action(name) {
    switch(name) {
      case 'open-life': lifeOpened=true;render();container.querySelector('.light-life-practice').setAttribute('tabindex','-1');container.querySelector('.light-life-practice').focus({preventScroll:true});return;
      case 'hold-blessing': blessingHeld=true;render();container.querySelector('.light-kept-blessing').setAttribute('tabindex','-1');container.querySelector('.light-kept-blessing').focus({preventScroll:true});return;
      case 'pause': pause=true;render();container.querySelector('.light-response').scrollIntoView({behavior:'smooth',block:'nearest'});container.querySelector('[data-journey="act2"]').focus({preventScroll:true});return;
      case 'act2': act=2;beat=0;break;
      case 'previous': if(beat>0)beat--;else act=1;break;
      case 'next': if(beat<3)beat++;else {act=3;finished=true;}break;
      case 'info': if(finished)screen='info';break;
      case 'invite': act=3;screen='story';break;
      case 'back-testimony': act=2;beat=3;break;
      case 'restart': lifeOpened=false;blessingFor=null;blessingHeld=false;act=1;beat=0;choice=null;pause=false;screen='story';break;
      case 'map': if(finished){screen='map';goMap();container.scrollIntoView({behavior:'smooth',block:'start'});}return;
      case 'islands': backToIslands();return;
    }
    render(true);
  }
  return {render, isMap:()=>screen==='map', resetEntry:()=>{lifeOpened=false;blessingFor=null;blessingHeld=false;screen='story';act=1;beat=0;choice=null;pause=false;},home:()=>{screen='story';act=finished?3:1;render(true);}};
};
