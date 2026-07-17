# SYSTEM / SOUND Design System

Status: **Phase 01 provisional — Formal Mark and first viewport approved for review**
Updated: 2026-07-17 JST

この文書は、サイトと名刺で共通利用するデザイントークンと、ロゴ運用の基準を定義する。Phase 01では正式ロゴ候補とファーストビューに必要な範囲を確定し、LP全体と印刷入稿に関する詳細は次フェーズで検証する。

## 1. Design principles

1. **Quiet strength** — 黒い余白と明度差で見せ、発光や派手な装飾に頼らない。
2. **Close distance** — 大ホールではなく、約20人の小規模ライブスペースの距離感を保つ。
3. **Human technology** — 技術名より、日常の困りごととBefore／Afterを先に伝える。
4. **One live signal** — 赤は「生きている一点」として、一画面の約1％以内に抑える。
5. **Structure and resonance** — SYSTEMの直線とSOUNDの曲線を、区切りではなく接続として扱う。

## 2. Canonical colors

既存資料には近似色が複数あった。2026-07-17の制作指示を優先し、Phase 01では次を正とする。

| Token | Value | Use |
|---|---|---|
| `--color-stage` | `#0B0B0C` | 主背景、名刺背景 |
| `--color-charcoal` | `#1A1918` | カード、補助背景 |
| `--color-ivory` | `#F2EDE3` | 見出し、本文、純白の代替 |
| `--color-maple` | `#C87532` | ロゴ、木肌、温度のある罫線 |
| `--color-wood` | `#7A4526` | 木の影、ホバー、補助背景 |
| `--color-red` | `#E33A2F` | ロゴの一点、Contact、現在位置 |
| `--color-muted` | `#AAA298` | 補足本文 |
| `--color-signal-muted` | `#7FA6A3` | 必要時のみ。技術図の弱い補助色 |

### 色の使用比率

- Stage Black / Charcoal: 70〜75%
- Soft Ivory: 14〜18%
- Maple / Deep Wood: 10〜14%
- Signal Red: 1%前後、最大2%未満
- Cyan系: 0〜2%。主色にしない

木の質感には階調を使用してよいが、ロゴ自体はグラデーションへ依存させない。

## 3. CSS variables

```css
:root {
  --color-stage: #0B0B0C;
  --color-charcoal: #1A1918;
  --color-ivory: #F2EDE3;
  --color-maple: #C87532;
  --color-wood: #7A4526;
  --color-red: #E33A2F;
  --color-muted: #AAA298;
  --color-signal-muted: #7FA6A3;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  --radius-control: 999px;
  --radius-small: 8px;
  --radius-medium: 14px;
  --radius-panel: 22px;

  --line-ui: 1px;
  --line-emphasis: 2px;
  --shadow-panel: 0 22px 70px rgba(0, 0, 0, .24);
  --shadow-focus: 0 0 0 3px rgba(242, 237, 227, .24);

  --motion-ui: 180ms;
  --motion-reveal: 600ms;
  --motion-logo-draw: 1400ms;
  --motion-signal-travel: 10.5s;
}
```

## 4. Typography

### Japanese

- Primary: `Noto Sans JP`
- Fallback: `Hiragino Kaku Gothic ProN`, `Yu Gothic`, `Meiryo`, `sans-serif`
- 本文は16px以上、行間1.75〜1.9を基本とする。

### Latin

- Primary: `Inter`
- Fallback: `Arial`, `sans-serif`
- 英字ラベルは11〜13px相当、字間0.08〜0.14em。

### Optional serif

- `Source Serif 4`を候補とする。
- SOUND側の短い英語見出しだけに限定し、日本語本文や業務説明には使わない。

## 5. Layout and responsive rules

- Mobile master: 360px以上
- Tablet / two-column transition: 768px
- Wide content: 1120〜1180px
- 本文行長: 日本語35〜42文字程度を上限の目安とする。
- CTAの最小タップ領域: 44px、推奨48〜52px。
- Hero mobile order: label → main copy → support copy → CTA → logo visual。
- 画像や木目の上へ長文を直接置かない。

## 6. Logo system

### Selected direction

**Candidate 06 — Formal Mark**

2026-07-17の候補比較ボードから、06を正式ロゴの基準へ変更した。02は比較参照、10はfavicon・SNS用の小型アイコン候補として保持する。06は上下の巻き込みと中央ノッチのバランスがよく、名刺・サイトヘッダー・ロゴタイプへ共通展開しやすい。

- 上端の巻き込みと下端の涙滴状終端
- 中央で左右へ鋭く突き出す二つのノッチ
- 中央が細く締まった縦長の黒い面
- 上下でわずかに異なる非対称カーブ
- 下側カーブの外周へ細い面として統合したSignal Red終端

F字孔全体を波形へ変形しない。FrequencyはFormal Mark本体へ描き込まず、Animated Hero Markでのみ2.4pxの補助軌道と、下端の赤が一度だけ移動する挙動として示す。

### Three applications

| Variant | Role | Components | Use |
|---|---|---|---|
| Formal Mark 06 | 正式ロゴ | 黒いF字孔面＋下側カーブへ統合した赤い終端 | 名刺、サイトヘッダー、ロゴタイプ、静止媒体 |
| Animated Hero Mark | 補助演出 | Formal Mark＋白い軌道＋一度だけ移動する赤い信号 | Webヒーロー、ブランド紹介の演出面 |
| Small Icon 10 | 小サイズ候補 | 角張った終端と大きなノッチ＋統合された赤い下端 | favicon、SNSアイコン、16〜31px |
| Candidate 02 | 比較参照 | 06より細いF字孔面 | 形状比較のみ。正式運用しない |

### Minimum size

| Use | Recommended minimum | Absolute minimum |
|---|---:|---:|
| Digital Formal Mark | 32px high | 24px high |
| Small Icon | 32px canvas | 16px canvas |
| Horizontal logo | 140px wide | 112px wide |
| Print symbol | 8mm high | 6mm after proof check |
| Business-card full logo | 28mm wide | 24mm wide |

### Clear space

下端の涙滴状終端の最大幅を `x` とし、ロゴ外周へ最低 `1x`、推奨 `1.5x` の余白を確保する。名刺の断裁セーフティマージンとは別に確保する。

### Color variants

- Standard: black cutout + Signal Red crescent integrated into the lower curl
- Wood background: Standardを使用
- Light background: Standardまたはblack monochrome
- Dark background: Soft Ivory reversed + integrated Signal Red lower terminal
- Monochrome: 終端を含む一つの黒い面。軌道や独立した点は追加しない
- Black-and-white print: 白地は黒面、黒地は白面。赤を意味の必須条件にしない

### Do not

- 中央の切り欠きを単純な横棒へ置換しない
- 面シルエットを一本のS字線へ戻さない
- F字孔全体をデジタル波形へ変形しない
- 円と曲線を機械的につないだ形へ置換しない
- 赤い終端を円形や丸い塊へ戻さない。下側カーブに沿う細い面として統合する
- Formal Markへ白い軌道線や周波数波形を描き込まない
- ネオン、グロー、虹色、金属光沢をロゴへ追加しない
- 縦横比を変更しない
- 16px未満で通常版を使わない。favicon専用版へ切り替える
- ロゴタイプの字間を詰めない

### Print note

横組み・縦組みSVGのロゴタイプはInter指定の編集可能テキストである。印刷入稿時はInterの利用条件を確認し、文字をアウトライン化した入稿版を別途作成する。

## 7. Motion

- Formal Mark: 原則として静止。ロゴ単体にアニメーションを必須としない
- Animated Hero Markの黒い面: 620msで静かに表示
- Animated Hero MarkのSignal track描画: 1.4秒、初回のみ
- Animated Hero MarkのSignal travel: 下端から上端へ10.5秒で一度だけ移動。ループしない
- 移動中の信号形状: 10px相当以下の細い涙滴形。円、通知バッジ、録画ボタンに見せない
- UI hover / focus: 180ms
- Section reveal: 600ms以内
- Spotlight: 8〜12秒のごく小さな明度変化を候補とする
- `prefers-reduced-motion: reduce`では軌道描画と信号移動を停止し、赤い下端を一体化した静止ロゴを表示する

## 8. Business-card application

- Finished size: 91mm × 55mm
- Bleed: 3mm on all sides
- Safety margin: 4mm以上
- QR: 18〜22mm角、4セル以上のquiet zone
- Front / SYSTEM: 直線、信号、肩書き、QRを優先
- Back / SOUND: 同じシンボルを使い、木の曲線とF字孔の比率を上げる
- 0.25pt未満の線は使わない。ロゴの中央切り欠きは校正刷りで確認する

## 9. Phase 01 open decisions

- Webフォントをセルフホストするか、システムフォールバックを正本とするか
- 顔写真、手元写真、楽器接写のどれをHero以降の主素材にするか
- 名刺に載せる正式氏名表記、メール、URL、QR遷移先
- 印刷会社、用紙、CMYKプロファイル
- ロゴタイプの最終アウトライン版
