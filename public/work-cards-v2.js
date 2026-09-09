(() => {
  const worksGrid = document.querySelector('.works-grid');
  if (!(worksGrid instanceof HTMLElement)) return;

  const existingCards = Array.from(worksGrid.querySelectorAll('.work-card'));
  const firstTrigger = document.querySelector('.works-grid .preview-trigger');
  const firstImage = firstTrigger?.dataset.previewImage || '';
  const baseUrl = firstImage.includes('images/projects/')
    ? firstImage.slice(0, firstImage.indexOf('images/projects/'))
    : '/';
  const projectImage = (name) => `${baseUrl}images/projects/${name}`;

  const anonymousWorks = [
    {
      number: '07',
      status: 'Built / Anonymized',
      category: 'Document Automation / Business Tool',
      title: '工事情報から、仕様書・体制表・工程表までを一つの生成フローへ。',
      copy: '工事情報の入力から、関係者情報、資材、工程表、A4仕様書・PDF出力までを一つの業務フローとして設計。固有名詞・実データを除いた匿名化事例として掲載しています。',
      flow: ['Input', 'Structure', 'Schedule', 'Document', 'PDF'],
      image: projectImage('07-construction-spec-platform.webp'),
      alt: '工事情報入力と工程ガントチャートから仕様書作成につなげる業務Webツールの匿名化プレビュー',
    },
    {
      number: '08',
      status: 'Built / Anonymized',
      category: 'Document Search / OCR / Database',
      title: '共有ストレージの技術資料を、探せる検索DBへ。',
      copy: '共有ストレージ内の技術・保守資料を収集し、全文検索、タグ、信頼度、確認状態を持つ検索DBとして整理。大量資料から必要情報へ到達する時間を短縮する仕組みです。',
      flow: ['Scan', 'Extract', 'Index', 'Search', 'Review'],
      image: projectImage('08-technical-doc-search-db.webp'),
      alt: 'NAS内の技術資料をスキャンし、文書一覧、タグ、信頼度、確認状態を検索DBとして管理する匿名化プレビュー',
    },
    {
      number: '09',
      status: 'Built / Anonymized',
      category: 'Rack Design / Drag & Drop / Export',
      title: '19インチラックの機器配置を、画面上で設計・出力。',
      copy: 'ラックへ機器をドラッグ＆ドロップで配置し、U位置、重複・空き、機器・ポート情報を管理。構成結果をJSONで保存し、Excel・PowerPoint・PDFへ出力できる設計支援ツールです。',
      flow: ['Place', 'Validate', 'Ports', 'Save', 'Export'],
      image: projectImage('09-rack-layout-designer.webp'),
      alt: '19インチラックへ機器を配置し、U位置、空きスロット、機器とポート情報を管理する匿名化プレビュー',
    },
    {
      number: '10',
      status: 'Built / Anonymized',
      category: 'Maintenance / Full-text Search / Support',
      title: '大量の保守資料から、障害対応に必要な情報へすぐ到達。',
      copy: '保守資料を全文検索し、該当箇所だけでなく前後文脈、関連情報、確認手順までまとめて提示。現場で調査にかかる時間を減らすためのローカル支援システムです。',
      flow: ['Query', 'Search', 'Context', 'Related', 'Action'],
      image: projectImage('10-maintenance-search-tool.webp'),
      alt: '保守資料を全文検索し、該当箇所、前後文脈、関連情報、確認手順へ素早く到達する匿名化プレビュー',
    },
  ];

  const buildMeta = (config) => {
    const meta = document.createElement('div');
    meta.className = 'work-meta';
    const number = document.createElement('span');
    number.textContent = config.number;
    const status = document.createElement('span');
    status.textContent = config.status;
    meta.append(number, status);
    return meta;
  };

  const buildFlow = (items) => {
    const flow = document.createElement('div');
    flow.className = 'flow';
    flow.setAttribute('aria-label', '処理の流れ');
    items.forEach((item, index) => {
      const step = document.createElement('span');
      step.textContent = item;
      flow.append(step);
      if (index < items.length - 1) {
        const arrow = document.createElement('i');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        flow.append(arrow);
      }
    });
    return flow;
  };

  const openFallbackPreview = (button) => {
    const dialog = document.querySelector('#work-preview');
    const image = document.querySelector('#preview-image');
    const title = document.querySelector('#preview-title');
    const external = document.querySelector('#preview-external');
    const fullSize = document.querySelector('.preview-fullsize');
    const imageStage = document.querySelector('.preview-image-stage');

    if (!(dialog instanceof HTMLDialogElement) || !(image instanceof HTMLImageElement) || !(title instanceof HTMLElement) || !(external instanceof HTMLAnchorElement)) return;

    const source = button.dataset.previewImage || '';
    image.src = source;
    image.alt = button.dataset.previewAlt || button.dataset.previewTitle || 'プロジェクトプレビュー';
    title.textContent = button.dataset.previewTitle || 'プロジェクトプレビュー';
    external.hidden = true;
    external.removeAttribute('href');

    if (fullSize instanceof HTMLAnchorElement) fullSize.href = source;
    imageStage?.classList.remove('is-zoomed');
    dialog.showModal();
  };

  const privateArticles = Array.from(document.querySelectorAll('.private-grid article'));
  const wmsCard = existingCards[6] instanceof HTMLElement ? existingCards[6] : null;
  const automationCard = existingCards[7] instanceof HTMLElement ? existingCards[7] : null;

  privateArticles.forEach((article, index) => {
    const config = anonymousWorks[index];
    if (!config) return;

    const existingButton = article.querySelector('.injected-preview-trigger');
    let button = existingButton instanceof HTMLButtonElement ? existingButton : null;
    if (!button) {
      button = document.createElement('button');
      button.className = 'work-link preview-trigger injected-preview-trigger';
      button.type = 'button';
      button.dataset.previewImage = config.image;
      button.dataset.previewTitle = config.title;
      button.dataset.previewAlt = config.alt;
      button.innerHTML = 'プレビューを見る<span aria-hidden="true">↗</span>';
      button.addEventListener('click', () => openFallbackPreview(button));
    }

    const category = document.createElement('p');
    category.className = 'work-category';
    category.textContent = config.category;

    const title = document.createElement('h3');
    title.textContent = config.title;

    const copy = document.createElement('p');
    copy.textContent = config.copy;

    article.className = 'work-card';
    article.dataset.workNumber = config.number;
    article.replaceChildren(buildMeta(config), category, title, copy, buildFlow(config.flow), button);

    if (wmsCard) {
      worksGrid.insertBefore(article, wmsCard);
    } else {
      worksGrid.append(article);
    }
  });

  document.querySelector('.private-cases')?.remove();

  if (wmsCard) {
    const number = wmsCard.querySelector('.work-meta span:first-child');
    if (number) number.textContent = '11';
    wmsCard.dataset.workNumber = '11';
  }

  if (automationCard) {
    const number = automationCard.querySelector('.work-meta span:first-child');
    if (number) number.textContent = '12';
    automationCard.dataset.workNumber = '12';
  }

  Array.from(worksGrid.querySelectorAll('.work-card')).forEach((card, index) => {
    if (!(card instanceof HTMLElement)) return;
    if (!card.dataset.workNumber) {
      const displayed = card.querySelector('.work-meta span:first-child')?.textContent?.trim();
      card.dataset.workNumber = displayed || String(index + 1).padStart(2, '0');
    }
  });

  const style = document.createElement('style');
  style.textContent = `
    .works-grid{
      gap:22px;
      align-items:stretch;
    }

    .works-grid .work-card{
      position:relative;
      isolation:isolate;
      overflow:hidden;
      min-height:410px;
      height:100%;
      padding:30px 30px 26px;
      border:1px solid rgba(242,237,227,.13);
      background:
        radial-gradient(circle at 100% 0%,rgba(168,96,52,.13),transparent 34%),
        linear-gradient(145deg,rgba(255,255,255,.036),rgba(255,255,255,.008) 55%,rgba(122,31,43,.018));
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.025),
        0 18px 42px rgba(0,0,0,.16);
      transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease,background .24s ease;
    }

    .works-grid .work-card::before{
      content:"";
      position:absolute;
      z-index:0;
      inset:0 0 auto;
      height:3px;
      background:linear-gradient(90deg,var(--color-wood) 0 16%,var(--color-wine) 16% 34%,transparent 72%);
      opacity:.82;
    }

    .works-grid .work-card::after{
      content:attr(data-work-number);
      position:absolute;
      z-index:-1;
      right:18px;
      top:16px;
      color:rgba(242,237,227,.035);
      font-size:clamp(5.4rem,8vw,7.2rem);
      line-height:1;
      font-weight:800;
      letter-spacing:-.08em;
      pointer-events:none;
      user-select:none;
    }

    .works-grid .work-card:hover{
      transform:translateY(-4px);
      border-color:rgba(201,132,77,.34);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.04),
        0 24px 54px rgba(0,0,0,.26);
      background:
        radial-gradient(circle at 100% 0%,rgba(168,96,52,.17),transparent 38%),
        linear-gradient(145deg,rgba(255,255,255,.044),rgba(255,255,255,.01) 55%,rgba(122,31,43,.026));
    }

    .works-grid .work-card>*{
      position:relative;
      z-index:1;
    }

    .works-grid .work-meta{
      align-items:center;
      min-height:32px;
    }

    .works-grid .work-meta span:first-child{
      display:inline-grid;
      place-items:center;
      min-width:42px;
      height:30px;
      padding:0 9px;
      border:1px solid rgba(201,132,77,.42);
      background:rgba(201,132,77,.07);
      color:var(--color-ivory);
      font-size:.72rem;
      font-weight:700;
      letter-spacing:.12em;
    }

    .works-grid .work-meta span:last-child{
      max-width:58%;
      padding:4px 0 4px 10px;
      border-left:1px solid rgba(201,132,77,.28);
      color:#c9946d;
      font-size:.67rem;
      line-height:1.35;
      letter-spacing:.08em;
    }

    .works-grid .work-category{
      align-self:flex-start;
      margin:34px 0 14px;
      padding:7px 10px 6px;
      border:1px solid rgba(169,50,73,.34);
      border-radius:999px;
      background:rgba(122,31,43,.11);
      color:#d4a8b0;
      font-size:.66rem;
      line-height:1.2;
      letter-spacing:.1em;
    }

    .works-grid .work-card h3{
      margin-bottom:14px;
      max-width:92%;
      color:#f3eee6;
      line-height:1.5;
    }

    .works-grid .work-card>p:not(.work-category){
      margin-bottom:0;
      color:#c8c1b8;
      line-height:1.78;
    }

    .works-grid .flow{
      margin-top:auto;
      padding:16px 17px;
      border:1px solid rgba(242,237,227,.09);
      border-radius:10px;
      background:rgba(5,5,6,.28);
      gap:7px;
    }

    .works-grid .flow span{
      padding:0;
      border:0;
      color:#aaa39b;
      font-size:.68rem;
      letter-spacing:.035em;
    }

    .works-grid .flow i{
      color:#b74d61;
      opacity:.88;
    }

    .works-grid .work-link{
      min-height:48px;
      margin-top:15px;
      padding:14px 2px 0;
      border-top:1px solid rgba(242,237,227,.1);
      color:#eee8df;
      text-decoration:none;
      transition:color .2s ease,border-color .2s ease;
    }

    .works-grid .work-link span{
      display:grid;
      place-items:center;
      width:30px;
      height:30px;
      border:1px solid rgba(201,132,77,.45);
      border-radius:50%;
      color:#d7a276;
      font-size:.88rem;
      transition:transform .2s ease,background .2s ease,color .2s ease,border-color .2s ease;
    }

    .works-grid .work-link:hover{
      color:#fff;
      text-decoration:none;
      border-color:rgba(201,132,77,.28);
    }

    .works-grid .work-card:hover .work-link span{
      transform:translate(2px,-2px);
      border-color:var(--color-wood);
      background:var(--color-wood);
      color:#111113;
    }

    @media(max-width:900px){
      .works-grid .work-card:hover{transform:none}
      .works-grid .work-card::after{font-size:5.5rem}
    }

    @media(max-width:640px){
      .works-grid{gap:16px}
      .works-grid .work-card{
        min-height:370px;
        padding:24px 22px 22px;
      }
      .works-grid .work-card::after{
        right:14px;
        top:18px;
        font-size:4.8rem;
      }
      .works-grid .work-meta span:last-child{max-width:62%;font-size:.62rem}
      .works-grid .work-category{margin-top:28px}
      .works-grid .flow{padding:14px}
    }

    @media(prefers-reduced-motion:reduce){
      .works-grid .work-card,
      .works-grid .work-link span{transition:none}
      .works-grid .work-card:hover{transform:none}
    }
  `;
  document.head.append(style);
})();
