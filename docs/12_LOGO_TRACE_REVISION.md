# Logo Trace Revision — Photo-based F-hole

Date: 2026-07-17 JST  
Status: **Concept B selected for the formal logo / Concept C selected for favicon**

## 1. Revision request

初回案はF字孔を線として滑らかにしすぎ、S字記号や波線に見える問題が残った。ユーザー提供のコントラバス実物写真 `1784279505580.jpg` を形状資料とし、黒い開口部そのものを基準に再設計する。

写真は輪郭参照にのみ使用し、リポジトリやサイトへ掲載しない。

## 2. Trace observations

写真から次を形状の必須条件として抽出した。

- 上端は右へ巻き込み、先端が丸い涙滴状になる
- 下端は左側へ大きく膨らみ、尖った接続部を経て縦の幹へ戻る
- 中央の幹は細く、上下で曲率と幅が異なる
- 左右のノッチは同じ高さではなく、向かい合う鋭い突起として現れる
- 全体は線ではなく、楽器表板からくり抜かれた一つの黒い面である

## 3. Three-stage silhouettes

### A — Reference Trace

写真の黒い開口部をしきい値で抽出し、輪郭の細かな揺れ、上下の非対称、二つのノッチを残した忠実トレース。比較と将来の再調整に使う。正式利用には細部が多い。

### B — Instrument Signal / formal logo

Aから写真固有の細かな凹凸だけを整理し、上下の終端、中央の締まり、左右のノッチ、非対称カーブを保持した。Web、名刺、横組み、縦組み、単色版の共通基準とする。

### C — Small Cut / favicon

Bの特徴を16pxでも残せるよう、中央の幅、上端と下端の面積、ノッチの深さを調整した。Signal trackは省略し、赤い点だけを残す。favicon以外では使用しない。

## 4. Signal layer

FrequencyをF字孔へ変形として押し付けず、Bの黒い面の内側に独立した2.4pxの軌道を置く。

- 静止版：赤い点を上端付近へ固定
- Web版：18秒で上端から下端へ移動
- `prefers-reduced-motion: reduce`：移動を停止し、上端へ固定
- 単色版：軌道を紙白の抜き、点を黒＋白縁で表現

## 5. Superseded decisions

- 一本のMaple線でF字孔を表現する案は廃止
- Concept Aを正式ロゴとする初回判断は廃止
- 外付けのFrequency tailは使用しない
- 正式ロゴはB、faviconはCとする

## 6. Files

- `design/logo/system-sound-concept-a-reference-trace.svg`
- `design/logo/system-sound-concept-b-instrument-signal.svg`
- `design/logo/system-sound-concept-c-small-cut.svg`
- `design/logo/system-sound-symbol.svg`
- `design/logo/system-sound-horizontal.svg`
- `design/logo/system-sound-vertical.svg`
- `design/logo/system-sound-monochrome.svg`
- `design/logo/system-sound-reversed.svg`
- `design/logo/favicon.svg`

## 7. Review points

- Aが添付写真の上端・下端・二つのノッチを十分に拾っているか
- BがS字、音符、括弧に見えないか
- BのSignal trackがF字孔より強く見えないか
- Cが16pxで中央ノッチを維持するか
- 名刺8mm、白黒印刷、黒背景反転版で形が潰れないか
