from pathlib import Path
import re

path = Path('public/project-previews.js')
text = path.read_text(encoding='utf-8')

private_config = r'''  const privatePreviewConfig = [
    {
      number: '07',
      status: 'Built / Anonymized',
      category: 'Document Automation / Business Tool',
      title: '工事情報から、仕様書・体制表・工程表までを一つの生成フローへ。',
      copy: '工事情報の入力から、関係者情報、資材、工程表、A4仕様書・PDF出力までを一つの業務フローとして設計。固有名詞・実データを除いた匿名化事例として掲載しています。',
      flow: ['Input', 'Structure', 'Schedule', 'Document', 'PDF'],
      image: projectImage('07-construction-spec-platform.webp'),
      alt: '工事情報入力と工程ガントチャートから仕様書作成につなげる業務Webツールの匿名化プレビュー',
      url: '',
      label: '',
      related: [],
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
      url: '',
      label: '',
      related: [],
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
      url: '',
      label: '',
      related: [],
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
      url: '',
      label: '',
      related: [],
    },
  ];'''

text, count = re.subn(
    r"  const privatePreviewConfig = \[.*?\n  \];(?=\n\n  const newFeaturedWorks = \[)",
    private_config,
    text,
    flags=re.S,
)
if count != 1:
    raise SystemExit(f'privatePreviewConfig replacement count={count}')

text = text.replace("      number: '07',\n      status: 'Public app available',", "      number: '11',\n      status: 'Public app available',", 1)
text = text.replace("      number: '08',\n      status: 'Ongoing R&D',", "      number: '12',\n      status: 'Ongoing R&D',", 1)

unified_block = r'''  const createWorkCard = (config) => {
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

    const title = document.createElement('h3');
    title.textContent = config.title;

    const copy = document.createElement('p');
    copy.textContent = config.copy;

    const flow = document.createElement('div');
    flow.className = 'flow';
    flow.setAttribute('aria-label', '処理の流れ');
    config.flow.forEach((item, index) => {
      const step = document.createElement('span');
      step.textContent = item;
      flow.append(step);
      if (index < config.flow.length - 1) {
        const arrow = document.createElement('i');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        flow.append(arrow);
      }
    });

    const button = document.createElement('button');
    button.className = 'work-link preview-trigger injected-preview-trigger';
    button.type = 'button';
    button.dataset.previewImage = config.image;
    button.dataset.previewTitle = config.title;
    button.dataset.previewAlt = config.alt;
    button.dataset.previewUrl = config.url || '';
    button.dataset.previewLabel = config.label || '';
    button.innerHTML = 'プレビューを見る<span aria-hidden="true">↗</span>';
    button.addEventListener('click', () => openInjectedPreview(button, config.related || []));

    article.append(meta, category, title, copy, flow, button);
    return article;
  };

  const worksGrid = document.querySelector('.works-grid');
  if (worksGrid instanceof HTMLElement) {
    privatePreviewConfig.forEach((config) => {
      worksGrid.append(createWorkCard(config));
    });
    newFeaturedWorks.forEach((config) => {
      worksGrid.append(createWorkCard(config));
    });
  }

  document.querySelector('.private-cases')?.remove();

  const cardStyle = document.createElement('style');
  cardStyle.textContent = `
    .works-grid{align-items:stretch}
    .works-grid .work-card{height:100%;min-height:390px}
    .works-grid .work-card>p:not(.work-category){margin-bottom:0}
    @media(max-width:640px){.works-grid .work-card{min-height:350px}}
  `;
  document.head.append(cardStyle);'''

text, count = re.subn(
    r"  const worksGrid = document\.querySelector\('\.works-grid'\);.*?  document\.querySelector\('\.private-preview'\)\?\.remove\(\);",
    unified_block,
    text,
    flags=re.S,
)
if count != 1:
    raise SystemExit(f'works/private block replacement count={count}')

path.write_text(text, encoding='utf-8')
