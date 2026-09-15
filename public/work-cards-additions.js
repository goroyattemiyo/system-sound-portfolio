(() => {
  const worksGrid = document.querySelector('.works-grid');
  if (!(worksGrid instanceof HTMLElement)) return;

  const firstTrigger = worksGrid.querySelector('.preview-trigger');
  const firstImage = firstTrigger?.dataset.previewImage || '';
  const baseUrl = firstImage.includes('images/projects/')
    ? firstImage.slice(0, firstImage.indexOf('images/projects/'))
    : '/';
  const projectImage = (name) => `${baseUrl}images/projects/${name}`;

  const additions = [
    {
      number: '13',
      status: 'Native Android / Real-device verified',
      category: 'Android / Media3 / Local-first Media',
      title: '共有した音源・動画を、端末の自分専用メディアプレーヤーへ。',
      copy: '検索、Android共有、端末ファイルから権利確認を経て音声・動画をローカル保存。Roomライブラリ、プレイリスト、Media3による画面OFF・バックグラウンド再生までをつないだネイティブAndroid版WMSです。製品UIとビジュアライザも実機で継続改善しています。',
      flow: ['Search / Share', 'Save', 'Library', 'Playlist', 'Background'],
      image: projectImage('13-wms-android.svg'),
      alt: 'WMS Androidの検索・共有、ローカル保存、Roomライブラリ、プレイリスト、Media3バックグラウンド再生を示す日本語プレビュー',
      url: 'https://github.com/goroyattemiyo/web-media-studio-android',
      label: 'WMS Androidの開発を見る',
    },
    {
      number: '14',
      status: 'Lead Sheet PASS / Band Score in development',
      category: 'AI Music / Transcription / Arrangement',
      title: 'MP3音源を、演奏できる17パートのバンド譜へ。',
      copy: '完成したMP3からメロディ、コード、テンポ、構成を抽出し、演奏者が使えるリードシートへ整形。そこからMusicXML、17人編成のジャズバンド用フルスコア、移調譜、個別パートPDFへつなぐ制作パイプラインです。現在はリードシートと17パートのコンサートスコア骨格まで検証済みです。',
      flow: ['MP3', 'Lead Sheet', 'MusicXML', '17-Part Score', 'Parts'],
      image: projectImage('14-ai-music-band-score.svg'),
      alt: 'MP3音源からリードシート、MusicXML、17パートのジャズバンドフルスコア、個別パート譜へ展開する制作フローの日本語プレビュー',
      url: '',
      label: '',
    },
  ];

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

  const openPreview = (button) => {
    const dialog = document.querySelector('#work-preview');
    const image = document.querySelector('#preview-image');
    const title = document.querySelector('#preview-title');
    const external = document.querySelector('#preview-external');
    const fullSize = document.querySelector('.preview-fullsize');
    const imageStage = document.querySelector('.preview-image-stage');
    const related = document.querySelector('.preview-related');

    if (!(dialog instanceof HTMLDialogElement) || !(image instanceof HTMLImageElement) || !(title instanceof HTMLElement) || !(external instanceof HTMLAnchorElement)) return;

    const source = button.dataset.previewImage || '';
    image.src = source;
    image.alt = button.dataset.previewAlt || button.dataset.previewTitle || 'プロジェクトプレビュー';
    title.textContent = button.dataset.previewTitle || 'プロジェクトプレビュー';

    const url = button.dataset.previewUrl || '';
    if (url) {
      external.href = url;
      external.textContent = button.dataset.previewLabel || '外部ページを見る';
      external.hidden = false;
    } else {
      external.hidden = true;
      external.removeAttribute('href');
    }

    if (fullSize instanceof HTMLAnchorElement) fullSize.href = source;
    if (related instanceof HTMLElement) {
      related.replaceChildren();
      related.hidden = true;
    }
    imageStage?.classList.remove('is-zoomed');
    dialog.showModal();
  };

  // Existing 11 is the Web/PWA edition. Make that distinction explicit now that
  // the native Android product is also part of the portfolio.
  const webWmsCard = worksGrid.querySelector('[data-work-number="11"]');
  const webWmsStatus = webWmsCard?.querySelector('.work-meta span:last-child');
  if (webWmsStatus) webWmsStatus.textContent = 'Web / PWA public app';

  additions.forEach((config) => {
    if (worksGrid.querySelector(`[data-work-number="${config.number}"]`)) return;

    const article = document.createElement('article');
    article.className = 'work-card';
    article.dataset.workNumber = config.number;

    const meta = document.createElement('div');
    meta.className = 'work-meta';
    const number = document.createElement('span');
    number.textContent = config.number;
    const status = document.createElement('span');
    status.textContent = config.status;
    meta.append(number, status);

    const category = document.createElement('p');
    category.className = 'work-category';
    category.textContent = config.category;

    const heading = document.createElement('h3');
    heading.textContent = config.title;

    const copy = document.createElement('p');
    copy.textContent = config.copy;

    const button = document.createElement('button');
    button.className = 'work-link preview-trigger injected-preview-trigger';
    button.type = 'button';
    button.dataset.previewImage = config.image;
    button.dataset.previewTitle = config.title;
    button.dataset.previewAlt = config.alt;
    button.dataset.previewUrl = config.url;
    button.dataset.previewLabel = config.label;
    button.innerHTML = 'プレビューを見る<span aria-hidden="true">↗</span>';
    button.addEventListener('click', () => openPreview(button));

    article.append(meta, category, heading, copy, buildFlow(config.flow), button);
    worksGrid.append(article);
  });
})();