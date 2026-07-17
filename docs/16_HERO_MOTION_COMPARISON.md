# Animated Hero Mark Motion Comparison

Date: 2026-07-17 JST  
Status: **Phase 04 / owner-only preview / Subtle Sweep first choice**

## 1. Revised premise

Phase 03のA/B/Cは静止終端色の比較だったが、ワインレッドを常設するとFormal Markの単色性が失われ、別パーツとして見える可能性が残った。Phase 04では次を正とする。

- Formal Markは黒または生成り一色で完成させる。
- ワインレッドを下端の常設色にしない。
- ワインレッドはHeroアニメーション中の反射としてだけ現れる。
- ヘッダー、名刺、favicon、SNSアイコンは完全静止・単色とする。

## 2. Shared motion rules

- 経路：F字孔の下端から、内側のカーブに沿って上端へ一方向。
- 周期：10秒。許容範囲8〜12秒。
- 可視時間：約1.8秒。残り約8.2秒は完全静止。
- 色：基準 `#7A1F2B`、短い明部 `#A64050`。
- 形：独立した丸や点ではなく、短い線状の反射。
- 質感：ぼかし・グローなし。ニス面や金属面に一瞬光が走る程度。
- 終端：上端で不透明度0となり、次周期まで非表示を維持する。
- `prefers-reduced-motion: reduce`：反射レイヤーを完全に非表示。

## 3. Three live options

### 01 — Subtle Sweep / first choice

細いWine反射と、その内側の短いPeak反射だけが一度走る。最も情報量が少なく、Formal Markの輪郭を邪魔しない。

### 02 — Soft Pulse

下端の形状が低い不透明度で短く明るくなり、その反射が上へ抜ける。起点は分かりやすいが、下端に視線が少し留まりやすい。

### 03 — Varnish Glint

WineとPeakに加え、生成りの極細反射を短く重ねる。ニス面の艶を最も感じるが、演出性も最も高い。

## 4. Recommendation

第一候補は **Subtle Sweep** とする。ロゴ本体が約82%の時間を完全静止で保ち、反射もWineとPeakの2本だけなので、ネオン・通知・信号点に見えにくい。地元の相談相手としての落ち着きと、SOUND側の木・ニスの質感を両立しやすい。

## 5. Files

- `design/logo/system-sound-formal-mark.svg`
- `design/logo/system-sound-animated-hero-mark.svg`（Subtle Sweep）
- `design/logo/system-sound-animated-soft-pulse.svg`
- `design/logo/system-sound-animated-varnish-glint.svg`
- `wireframes/brand-phase-04.html`

## 6. Verification

- 3案を同じ06シルエット、同じ10秒周期で比較する。
- 反射が上端で消えた後、ループ境界が知覚できないことを確認する。
- 低輝度ディスプレイでもWine反射が線として認識できることを確認する。
- Reduced Motion時にワインレッドが1フレームも表示されないことを確認する。
