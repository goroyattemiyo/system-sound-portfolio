# Candidate 06 Terminal Color Decision

Date: 2026-07-17 JST  
Status: **Superseded by Phase 04 / historical comparison only**

> Phase 04で静止終端色の採用を取り消した。A/B/Cは色検証の履歴として保持するが、現行Formal Markへワインレッドを常設しない。現行仕様は `docs/16_HERO_MOTION_COMPARISON.md` を参照する。

## 1. Scope

06 Formal Markのシルエットは変更せず、下側カーブに統合した終端の色と面積だけを再検証した。終端面積は前案より縮小し、黒本体との境界を直線で切らず、F字孔の曲率に沿う曲線とした。

## 2. Comparison

| Option | Color | 静かな高級感 | 黒背景 | 小サイズ | 判断 |
|---|---|---|---|---|---|
| A / Deep Wine | `#7A1F2B` | 深く落ち着く | 沈みすぎない | 終端として残る | **推奨** |
| B / Burgundy | `#742C34` | 最も静か | やや沈む | 識別が弱い | 比較保持 |
| C / Mature Red | `#9A2E3A` | やや積極的 | 最も明瞭 | 最も見える | 差し色感が強い |

## 3. Decision

正式色は **A / Deep Wine `#7A1F2B`** とする。

Bの静けさを保ちながらStage Blackで沈みすぎず、Cほど赤だけが前へ出ない。木の影や漆の深みを思わせ、別パーツではなくF字孔の素材の一部が色づいたように見えるため、ブランドの静かな高級感と最も整合する。

## 4. Static and motion separation

- Formal Mark、ヘッダー、名刺、小型アイコンは常に静止し、発光させない。
- Animated Hero Markだけ、終端付近から内側に沿う弱いハイライトを上方向へ一度流す。
- 1サイクル10秒、可視時間約1.4秒、最大不透明度22%、ループなし。
- ハイライトは短い線状とし、点、LED、通知バッジ、ネオンに見せない。
- `prefers-reduced-motion: reduce`ではハイライトを非表示にする。

## 5. Files

- `design/logo/system-sound-terminal-a.svg`
- `design/logo/system-sound-terminal-b.svg`
- `design/logo/system-sound-terminal-c.svg`
- `design/logo/system-sound-formal-mark.svg`
- `design/logo/system-sound-animated-hero-mark.svg`
- `wireframes/brand-phase-03.html`

## 6. Remaining checks

- 実印刷のCMYK変換でAが黒へ沈まないか校正する。
- 6〜8mm高の名刺印刷で終端が黒本体と分離して見えないか確認する。
- ヒーロー演出のタイミングは実機で確認し、視線を奪う場合は最大不透明度をさらに下げる。
