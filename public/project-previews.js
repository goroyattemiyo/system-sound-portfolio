(() => {
  const existingTriggers = Array.from(document.querySelectorAll('.works-grid .preview-trigger'));
  const firstImage = existingTriggers[0]?.dataset.previewImage || '';
  const baseUrl = firstImage.includes('images/projects/')
    ? firstImage.slice(0, firstImage.indexOf('images/projects/'))
    : '/';
  const projectImage = (name) => `${baseUrl}images/projects/${name}`;

  const featuredPreviewConfig = [
    {
      image: projectImage('threads-automation.svg'),
      alt: 'AIとの会話からGitHub Actions、Threads投稿、履歴、分析までをつなぐSNS運用システムのプレビュー',
    },
    {
      image: projectImage('image-processing-zip-tool.webp'),
      alt: 'シート画像の分割または個別画像の取り込みから、背景除去とLINE申請用ZIP生成までを行うブラウザツールのプレビュー',
      url: 'https://note.com/goro_yattemiyo/n/n222268153952',
      label: 'noteで購入・詳細を見る',
    },
    {
      image: projectImage('03-product-selection-assist.webp'),
      alt: 'Rakuten Select Assistの商品検索、候補スコアリング、保存を行うWebアプリのプレビュー',
    },
    {
      image: projectImage('04-ai-voice-studio.webp'),
      alt: 'IrodoriTTS Studioで台本を分割し、参照音声を設定してWAV・MP3を連続生成する制作画面のプレビュー',
    },
    {
      image: projectImage('05-codex-novel-workflow.webp'),
      alt: 'CodexターミナルとGitHubリポジトリで長編小説の設定、構成、本文、改稿を管理する制作ワークフローのプレビュー',
    },
    {
      image: projectImage('06-line-stamp-sales-flow.webp'),
      alt: 'LINEスタンプの制作、画像加工、申請ZIP作成、Creators Market申請、販売までの実践フローのプレビュー',
      url: 'https://note.com/goro_yattemiyo/n/n5ce27278221f',
      label: 'noteで制作・販売記録を見る',
    },
  ];

  existingTriggers.forEach((trigger, index) => {
    const config = featuredPreviewConfig[index];
    if (!config) return;
    trigger.dataset.previewImage = config.image;
    trigger.dataset.previewAlt = config.alt;
    trigger.dataset.previewUrl = config.url || '';
    trigger.dataset.previewLabel = config.label || '';
  });

  const privatePreviewConfig = [
    {
      title: '工事仕様書作成プラットフォーム',
      image: projectImage('07-construction-spec-platform.webp'),
      alt: '工事情報入力と工程ガントチャートから仕様書作成につなげる業務Webツールの匿名化プレビュー',
    },
    {
      title: '技術資料スキャン・検索DB構築システム',
      image: projectImage('08-technical-doc-search-db.webp'),
      alt: 'NAS内の技術資料をスキャンし、文書一覧、タグ、信頼度、確認状態を検索DBとして管理する匿名化プレビュー',
    },
    {
      title: 'ラック構成設計ツール',
      image: projectImage('09-rack-layout-designer.webp'),
      alt: '19インチラックへ機器を配置し、U位置、空きスロット、機器とポート情報を管理する匿名化プレビュー',
    },
    {
      title: 'システム保守支援ツール',
      image: projectImage('10-maintenance-search-tool.webp'),
      alt: '保守資料を全文検索し、該当箇所、前後文脈、関連情報、確認手順へ素早く到達する匿名化プレビュー',
    },
  ];

  const dialog = document.querySelector('#work-preview');
  const previewImage = document.querySelector('#preview-image');
  const previewTitle = document.querySelector('#preview-title');
  const previewExternal = document.querySelector('#preview-external');
  const previewFoot = document.querySelector('.preview-foot');

  if (!(dialog instanceof HTMLDialogElement) || !(previewImage instanceof HTMLImageElement) || !(previewTitle instanceof HTMLElement) || !(previewExternal instanceof HTMLAnchorElement) || !(previewFoot instanceof HTMLElement)) return;

  // Make project screenshots genuinely usable on a phone: the modal can pan a
  // 2048x1536 working copy, and the same copy can be opened by itself for the
  // browser's native pinch zoom. SVG previews remain vector-native.
  const imageStage = document.createElement('div');
  imageStage.className = 'preview-image-stage';
  previewImage.before(imageStage);
  imageStage.append(previewImage);

  const previewActions = document.createElement('div');
  previewActions.className = 'preview-actions';
  previewExternal.before(previewActions);
  previewActions.append(previewExternal);

  const fullSizeLink = document.createElement('a');
  fullSizeLink.className = 'button preview-fullsize';
  fullSizeLink.target = '_blank';
  fullSizeLink.rel = 'noopener noreferrer';
  fullSizeLink.textContent = '画像を拡大して見る';
  fullSizeLink.setAttribute('aria-label', 'プレビュー画像を原寸表示する');
  previewActions.prepend(fullSizeLink);

  const zoomHint = document.createElement('span');
  zoomHint.className = 'preview-zoom-hint';
  zoomHint.textContent = '画像をタップすると拡大できます';
  imageStage.append(zoomHint);

  const style = document.createElement('style');
  style.textContent = `
    .preview-image-stage{position:relative;overflow:auto;max-height:68vh;background:#0b0b0c;border:1px solid var(--color-line);overscroll-behavior:contain;touch-action:pan-x pan-y pinch-zoom;-webkit-overflow-scrolling:touch}
    .preview-image-stage .preview-image{width:100%;max-height:none;border:0;cursor:zoom-in;touch-action:pan-x pan-y pinch-zoom;transform-origin:top left}
    .preview-image-stage.is-zoomed .preview-image{width:2048px;max-width:none;cursor:zoom-out}
    .preview-zoom-hint{position:absolute;right:10px;bottom:10px;padding:7px 10px;background:rgba(11,11,12,.82);border:1px solid rgba(242,237,227,.2);color:#d7d0c6;font-size:.68rem;letter-spacing:.03em;pointer-events:none;backdrop-filter:blur(8px)}
    .preview-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:10px;margin-left:auto}
    .preview-fullsize{white-space:nowrap}
    @media(max-width:900px){.preview-actions{width:100%;margin-left:0;justify-content:flex-start}.preview-image-stage{max-height:66vh}}
    @media(max-width:640px){.preview-image-stage{max-height:62vh;margin-inline:-10px}.preview-image-stage.is-zoomed .preview-image{width:2048px}.preview-zoom-hint{font-size:.62rem}.preview-actions .button{width:100%}}
  `;
  document.head.append(style);

  let generatedZoomUrl = '';
  let renderToken = 0;

  const revokeGeneratedZoom = () => {
    if (!generatedZoomUrl) return;
    URL.revokeObjectURL(generatedZoomUrl);
    generatedZoomUrl = '';
  };

  const setZoomSource = (source) => {
    fullSizeLink.href = source || '#';
    imageStage.classList.remove('is-zoomed');
    imageStage.scrollTo({ left: 0, top: 0 });
  };

  const buildHighResolutionCopy = (source) => {
    const token = ++renderToken;
    revokeGeneratedZoom();
    setZoomSource(source);

    if (!source || /\.svg(?:$|[?#])/i.test(source)) return;

    const sourceImage = new Image();
    sourceImage.decoding = 'async';
    sourceImage.onload = () => {
      if (token !== renderToken) return;

      const targetWidth = 2048;
      const targetHeight = 1536;
      const scale = Math.min(targetWidth / sourceImage.naturalWidth, targetHeight / sourceImage.naturalHeight);
      const drawWidth = Math.max(1, Math.round(sourceImage.naturalWidth * scale));
      const drawHeight = Math.max(1, Math.round(sourceImage.naturalHeight * scale));
      const offsetX = Math.round((targetWidth - drawWidth) / 2);
      const offsetY = Math.round((targetHeight - drawHeight) / 2);

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) return;

      let background = '#0b0b0c';
      try {
        const sampler = document.createElement('canvas');
        sampler.width = 1;
        sampler.height = 1;
        const samplerContext = sampler.getContext('2d');
        if (samplerContext) {
          samplerContext.drawImage(sourceImage, 0, 0, 1, 1, 0, 0, 1, 1);
          const [r, g, b] = samplerContext.getImageData(0, 0, 1, 1).data;
          background = `rgb(${r}, ${g}, ${b})`;
        }
      } catch {
        // Same-origin project assets normally allow sampling; the fallback is intentional.
      }

      context.fillStyle = background;
      context.fillRect(0, 0, targetWidth, targetHeight);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(sourceImage, offsetX, offsetY, drawWidth, drawHeight);

      canvas.toBlob((blob) => {
        if (!blob || token !== renderToken) return;
        generatedZoomUrl = URL.createObjectURL(blob);
        fullSizeLink.href = generatedZoomUrl;
        previewImage.src = generatedZoomUrl;
        previewImage.dataset.zoomSource = generatedZoomUrl;
      }, 'image/png');
    };
    sourceImage.src = source;
  };

  const prepareZoom = (source) => {
    previewImage.dataset.originalSource = source;
    previewImage.dataset.zoomSource = source;
    buildHighResolutionCopy(source);
  };

  previewImage.addEventListener('click', () => {
    imageStage.classList.toggle('is-zoomed');
    if (!imageStage.classList.contains('is-zoomed')) imageStage.scrollTo({ left: 0, top: 0 });
  });

  existingTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const source = trigger.dataset.previewImage || '';
      // The inline modal handler runs first; this listener upgrades the zoom copy.
      requestAnimationFrame(() => prepareZoom(source));
    });
  });

  const openInjectedPreview = (trigger) => {
    const source = trigger.dataset.previewImage || '';
    previewImage.src = source;
    previewImage.alt = trigger.dataset.previewAlt || trigger.dataset.previewTitle || 'プロジェクトプレビュー';
    previewTitle.textContent = trigger.dataset.previewTitle || 'プロジェクトプレビュー';
    const url = trigger.dataset.previewUrl || '';
    if (url) {
      previewExternal.href = url;
      previewExternal.textContent = trigger.dataset.previewLabel || '外部ページを見る';
      previewExternal.hidden = false;
    } else {
      previewExternal.hidden = true;
      previewExternal.removeAttribute('href');
    }
    dialog.showModal();
    prepareZoom(source);
  };

  const privateArticles = Array.from(document.querySelectorAll('.private-grid article'));
  privateArticles.forEach((article, index) => {
    const config = privatePreviewConfig[index];
    if (!config) return;

    const button = document.createElement('button');
    button.className = 'work-link preview-trigger injected-preview-trigger';
    button.type = 'button';
    button.dataset.previewImage = config.image;
    button.dataset.previewTitle = config.title;
    button.dataset.previewAlt = config.alt;
    button.innerHTML = 'プレビューを見る<span aria-hidden="true">↗</span>';
    button.addEventListener('click', () => openInjectedPreview(button));
    article.append(button);
  });

  document.querySelector('.private-preview')?.remove();

  const previewNote = document.querySelector('.preview-foot p');
  if (previewNote) {
    previewNote.textContent = '画像はスマホで拡大表示できます。業務事例の固有名詞・数値はサンプルまたは匿名化情報です。';
  }

  const secondCard = document.querySelectorAll('.works-grid .work-card')[1];
  const secondStatus = secondCard?.querySelector('.work-meta span:last-child');
  if (secondStatus) {
    secondStatus.textContent = 'Available via note';
  }
  const secondFlow = secondCard?.querySelector('.flow');
  if (secondFlow) {
    secondFlow.innerHTML = '<span>Upload</span><i aria-hidden="true">→</i><span>Split / Keep</span><i aria-hidden="true">→</i><span>Remove BG</span><i aria-hidden="true">→</i><span>Select</span><i aria-hidden="true">→</i><span>ZIP</span>';
  }

  dialog.addEventListener('close', () => {
    renderToken += 1;
    revokeGeneratedZoom();
    imageStage.classList.remove('is-zoomed');
  });
})();
