# Brand Mark Reduction — From Trace to Symbol

Date: 2026-07-17 JST  
Status: **Formal Mark selected / owner-only preview**

## 1. Purpose

写真に近いF字孔トレースから、正式ロゴとして使えるブランド記号へ縮約する。実物らしさを失わずに、説明図に見える要素、写真固有の細かな歪み、小サイズで潰れる情報を減らした。

## 2. Decision

正式ロゴの主役はF字孔の黒い面そのものとする。上下の丸い終端、中央左右のノッチ、中央が細く締まった縦長の流れ、上下で異なるカーブを残す。赤は独立した円ではなく、下側の終端の輪郭を保ったまま一部を赤へ置換する。

白い軌道線と信号移動は正式ロゴから外し、Webヒーローの補助レイヤーへ分離する。これにより、静止ロゴは説明なしでもF字孔として成立し、白黒印刷では一つの面として再現できる。

## 3. Three applications

### 1 — Formal Mark / selected

- 黒いF字孔シルエット＋統合された赤い下端
- 白い軌道線、独立した赤丸、周波数波形は含めない
- 正式ロゴ、名刺、サイトヘッダー、横組み・縦組みの基準
- 白黒版では赤い下端を黒い面へ統合し、一色で成立させる

### 2 — Animated Hero Mark

- Formal Markの形状を変更せず、その上へ白い補助軌道を追加
- 初回のみ、下端の赤が小さな涙滴状信号として軌道を10.5秒で一度移動
- 移動後は赤い下端へ戻り、ループしない
- `prefers-reduced-motion: reduce`では信号を動かさず、赤い下端を表示
- Webヒーローとブランド説明用の演出に限定し、正式ロゴデータとして配布しない

### 3 — Small Icon

- Formal Markより幹、ノッチ、上下終端を太く整理
- 16pxでも中央の切り欠きと上下の方向性が残る構成
- favicon・SNSアイコン専用
- 白い軌道線は含めない

## 4. Evaluation

5点満点。Formal Markは静止ロゴの選定対象、他2案は用途別の派生形として評価した。

| Priority | Formal Mark | Animated Hero Mark | Small Icon |
|---|---:|---:|---:|
| 正式ロゴとしての強さ | 5 | 3 | 4 |
| 白黒印刷の成立 | 5 | 2 | 5 |
| 名刺・サイトヘッダーでの視認性 | 5 | 2 | 5 |
| F字孔らしさ | 5 | 5 | 4 |
| 補助演出との拡張性 | 4 | 5 | 3 |

Animated Hero Markの白黒印刷・ヘッダー評価が低いのは欠点ではなく、使用範囲をWeb演出へ限定した結果である。

## 5. Why this shape

- 上端と下端の丸みを残すことで、S字・括弧・波線への誤読を避ける
- 中央ノッチを左右に残すことで、楽器のF字孔としての識別点を守る
- 写真由来の微細な凹凸を減らし、8mm印刷や24pxヘッダーでも輪郭を安定させる
- 赤い下端をシルエットへ統合し、通知バッジ、録画ボタン、LEDの連想を避ける
- Frequencyの意味を別レイヤーへ移し、正式ロゴを説明から解放する

## 6. Files

- `design/logo/system-sound-formal-mark.svg`
- `design/logo/system-sound-animated-hero-mark.svg`
- `design/logo/system-sound-small-icon.svg`
- `design/logo/system-sound-symbol.svg`
- `design/logo/system-sound-horizontal.svg`
- `design/logo/system-sound-vertical.svg`
- `design/logo/system-sound-monochrome.svg`
- `design/logo/system-sound-reversed.svg`
- `design/logo/favicon.svg`

旧A/B/Cトレース案は判断履歴として残すが、正式運用には使用しない。

## 7. Changes from the previous phase

- Formal Mark、横組み、縦組み、反転版、単色版から白い軌道線を削除
- 赤い下端を正式ロゴの唯一の色アクセントとして維持
- Animated Hero Markを独立したWeb演出用アセットとして追加
- Small Iconをfavicon・SNS用途の正式名称へ変更
- 比較軸を「忠実なトレース」から「正式ロゴとしての強さ」へ更新

## 8. Open decisions

- 最終アウトライン化したロゴタイプの字間とウェイト
- 名刺の実寸校正で6〜8mmの中央ノッチが潰れないか
- SNSごとの背景色・余白規定
- Animated Hero MarkをHero再訪時に再生するか、セッション中一度だけにするか

## 9. Required next materials

- 名刺の正式氏名、連絡先、URL、QR遷移先
- 印刷会社、用紙、CMYKプロファイル
- Hero以降に使用する本人・手元・楽器写真の方針
- 匿名化した代表事例の実画面または正式な仮素材

## 10. Pre-publication checks

- 所有者限定プレビューのまま内容・連絡先・匿名化を確認する
- Formal Markの24px、32px、8mm、白黒反転を実機・校正紙で確認する
- Animated Hero Markの一度だけの移動とReduced Motionを確認する
- 旧トレース案が公開用アセットとして参照されていないことを確認する
- 公開前に問い合わせ導線、権利、商用利用条件、顧客情報を再確認する
