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

  const openInjectedPreview = (trigger) => {
    if (!(dialog instanceof HTMLDialogElement) || !(previewImage instanceof HTMLImageElement) || !(previewTitle instanceof HTMLElement) || !(previewExternal instanceof HTMLAnchorElement)) return;

    previewImage.src = trigger.dataset.previewImage || '';
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
    previewNote.textContent = 'プレビューは実装・業務内容をもとに再構成しています。固有名詞や数値はサンプルまたは匿名化情報です。';
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
})();
