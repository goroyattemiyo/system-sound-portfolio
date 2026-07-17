# Phase 01 — Logo and Hero Decision Record

Date: 2026-07-17 JST  
Scope: ロゴ3案、推奨案選定、ファーストビュー、スマートフォン優先確認  
Out of scope: LP全ページの再設計、事例素材制作、名刺入稿データの完成

## 1. Reviewed sources

- `README.md`
- `docs/01_PROJECT_CONTEXT.md`
- `docs/02_BRAND_GUIDELINES.md`
- `docs/03_PORTFOLIO_LP_SPEC.md`
- `docs/04_BUSINESS_CARD_SPEC.md`
- `docs/05_CONTENT_INVENTORY.md`
- `docs/07_FEATURED_CASES_PLAN.md`
- `docs/08_LOGO_CONCEPTS.md`
- `docs/09_LP_WIREFRAME.md`
- `design/logo/logo-concepts.svg`
- `wireframes/lp-wireframe.html`

## 2. Contradictions and gaps

### 2.1 Color values

| Role | Earlier values | Phase 01 canonical | Reason |
|---|---|---|---|
| Ivory | `#F2EBDD`, `#F2EDE3` | `#F2EDE3` | 最新制作指示を優先。わずかに中立でUI本文にも使いやすい |
| Maple | `#C77732`, `#C87532` | `#C87532` | 既存ロゴコンセプトと最新制作指示を一致させる |
| Deep Wood | `#6B351C`, `#7A4526` | `#7A4526` | 木の影として黒背景から埋没しにくい |
| Red | `#D51624`, `#E33A2F` | `#E33A2F` | 最新制作指示とロゴコンセプトを優先 |

### 2.2 Logo anatomy

既存Signal Fは「下端から信号線を伸ばす」意味は明快だったが、中央の横線がF字孔固有の切り欠きに見えにくく、S字または汎用テックマークへ近づくリスクがあった。

変更：

- 上下の丸い目を維持
- 中央を左右へ向かう二つの尖りへ変更
- 外付け信号線を正式シンボルから削除
- 赤い点を上端の目へ固定
- Webのみ赤い点をF字孔の曲線へ沿わせる

これはSignal Fの思想を捨てる変更ではなく、**F-holeを主、Frequencyを挙動として従**に整理する変更である。

### 2.3 Case order

`docs/07_FEATURED_CASES_PLAN.md`は匿名デモ完成前のPhase Aで公開デモを優先する。一方、今回の制作指示はRack DiagramとInternal Knowledge Searchを優先事例の1・2位としている。

Phase 01ではHeroまでのため変更しない。LP全体へ進む時点で、次の表示ルールを採用する予定：

- 匿名デモ未完成：上位に配置しても `PRIVATE CASE / CONCEPT PREVIEW` を明示
- 匿名デモ完成：正式に1・2位へ昇格
- 完成状態を誤認させる実画面は作らない

### 2.4 Missing production inputs

- 正式な問い合わせ方法
- 名刺へ載せる氏名・メール・QR遷移先
- 写真素材の採用方針
- 印刷会社とカラープロファイル
- Webフォント配信方式

## 3. Logo concepts

### A. Resonant Signal — selected

F字孔の伝統的な骨格を保ち、赤い点を上端の目へ内包する。外付け線をやめ、Frequencyは曲線とWeb motionで示す。

### B. Classic Flow

F字孔としての自然さを最大化し、赤い点を下端へ配置する。音楽性と印刷適性は高いが、ITとの接続は言葉による補助が必要。

### C. Frequency Tail

下端を短い信号トレースへ接続する。Frequencyは最も伝わるが、小サイズで線が増え、既存の「外付け信号線」問題が残る。

## 4. Comparison

5点満点。小サイズは16px faviconと名刺8mmを想定。

| Criterion | A | B | C |
|---|---:|---:|---:|
| F字孔らしさ | 5 | 5 | 4 |
| Frequencyとの接続 | 4 | 3 | 5 |
| 小サイズ視認性 | 5 | 4 | 3 |
| 白黒印刷 | 5 | 5 | 4 |
| Webアニメーション | 5 | 4 | 5 |
| 名刺適性 | 5 | 5 | 4 |
| **Total / 30** | **29** | **26** | **25** |

## 5. Decision

**Concept A — Resonant Signalを推奨案とする。**

理由：

1. ロゴ単体でF字孔として読める
2. 赤い一点をブランド内部の意味ある要素にできる
3. 単色化しても形が崩れない
4. 名刺8mmとfaviconの両方へ縮小しやすい
5. Webでは外付け装飾なしにFrequencyを動きで表現できる

## 6. First-view decisions

- Mobileではコピーをロゴより先に表示
- Heroは黒、生成り、木、赤のみ。シアンは使用しない
- 木の質感は右側／下側の曲面だけに限定
- ロゴはサービス説明を圧迫しないサイズに抑える
- Primary CTAは生成り、Secondary CTAは透明＋生成り線
- 赤はロゴの一点とラベルの小点だけに限定
- F字孔描画1.4秒、赤点移動18秒
- `prefers-reduced-motion`では静止

## 7. Mobile-first check

Reference frame: 390 × 844px

- 本文: 16px
- CTA: 48px以上
- 見出し: 3〜5行を許容
- 表示順: label → main copy → support → CTA → symbol
- 横スクロール: なし
- ロゴはファーストコピーより後
- 固定CTAはContact付近で非表示にする既存仕様を継続

360px実機相当と主要Android/iPhone幅は、次フェーズでブラウザ実機検証を追加する。

## 8. Files added or revised

### Logo

- `design/logo/system-sound-symbol.svg`
- `design/logo/system-sound-horizontal.svg`
- `design/logo/system-sound-vertical.svg`
- `design/logo/system-sound-monochrome.svg`
- `design/logo/system-sound-reversed.svg`
- `design/logo/favicon.svg`
- `design/logo/system-sound-concept-a-resonant-signal.svg`
- `design/logo/system-sound-concept-b-classic-flow.svg`
- `design/logo/system-sound-concept-c-frequency-tail.svg`

### Documents

- `docs/10_DESIGN_SYSTEM.md`
- `docs/11_PHASE_01_LOGO_HERO_DECISION.md`

### Preview implementation

- Formal Signal F replaces the rough Hero symbol
- `/brand-phase-01` provides the comparison, recommendation, Hero and 390px mobile reference

## 9. Next required assets

1. 権利が明確なコントラバス木部・F字孔の接写
2. 作業机、配線、PC、楽器が同居する本人撮影素材
3. Rack Diagram匿名再現版
4. Internal Knowledge Search架空データ版
5. 各代表事例の画面キャプチャまたは短い無音動画
6. 名刺の正式連絡先とQR遷移先

## 10. Pre-publication checks

- ロゴが16px、24px、名刺8mmで潰れないか校正
- 横組み・縦組みの文字をアウトライン化
- CMYK変換後のMapleとRedを校正刷りで確認
- QRコード実寸とquiet zoneを確認
- フォントの利用条件と配信方式を確定
- 写真、音声、画面素材の権利を確認
- 勤務先、顧客、設備、認証情報を含めない
- 開発中／MVP／Private Caseの状態表示を再確認

