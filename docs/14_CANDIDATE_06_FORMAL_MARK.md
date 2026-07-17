# Candidate 06 Formal Mark Refinement

Date: 2026-07-17 JST
Status: **Candidate 06 selected / owner-only preview**

## 1. Decision

12案から絞り込んだ比較ボードを再評価し、正式ロゴのベースを02から06へ変更した。

- 06：正式ロゴの基準
- 02：比較参照として保持
- 10：favicon・SNS向け小型アイコン候補として保持
- 03：細身の高級感を検討する場合の参考。正式データには採用しない

## 2. Why 06

06は02より下側のカーブと終端に面積があり、上側の巻き込みと視覚的につり合う。中央部は細いが、左右ノッチが同時に認識できる幅を残す。名刺やサイトヘッダーへ縮小したときに、02より重心が安定し、10よりF字孔らしさを保てる。

## 3. Formal refinements

### Central notches

- 左右を完全な同一高さにせず、楽器らしい非対称を維持
- 24px高でも二つの尖りが幹と分離して見える深さへ調整
- 単純な横棒や星形に見えないよう、上下カーブへ滑らかにつなぐ

### Upper and lower terminals

- 上端：小さめの丸い巻き込みで、重さを抑える
- 下端：太いカーブと丸い内側終端で、全体の重心を支える
- 上下を同じ形へそろえず、F字孔らしい方向差を残す

### Integrated red terminal

初回調整では下側終端全体を赤へ置換したため、接続していても録画ランプや通知バッジのように見えた。最終調整では赤の面積を下側カーブ外周の一部へ縮め、黒い終端を包む細い続きとして統合した。

- 独立した円を置かない
- 黒い終端の輪郭から外へはみ出さない
- 赤だけを取り出すと円形にならない
- 単色版では赤領域を黒へ統合する

## 4. Size test

| Size | Candidate 06 | Candidate 10 |
|---|---|---|
| 64px | 上下終端、ノッチ、赤いカーブが明瞭 | 角張りが強く、F字孔らしさは06が優位 |
| 32px | 正式ロゴとして成立 | favicon用途では輪郭が安定 |
| 16px | ノッチは残るが赤はごく小さい | 大きなノッチと角張った終端が最も安定 |

結論：正式ロゴ・名刺・ヘッダーは06、favicon候補は10とする。

## 5. Color variants

- 白背景：Stage Black `#0B0B0C`に近い黒面＋Signal Red `#E33A2F`
- 黒背景：Soft Ivory `#F2EDE3`面＋Signal Red `#E33A2F`
- 単色：終端を含む一つの黒面または白面
- ロゴ本体にグラデーション、グロー、白い軌道線を含めない

## 6. Logotype lockup

- Symbol 06を左、`SYSTEM / SOUND`を右に置く横組みを主形式とする
- `SYSTEM`と`SOUND`はInter Bold相当、`/`のみMaple
- サブラインは `STRUCTURE / FLOW / RESONANCE`
- 白背景版と黒背景反転版を用意
- 印刷入稿前にロゴタイプをアウトライン化する

## 7. Application mocks

### Business card front

- 91mm × 55mm、塗り足し3mmは入稿版で追加
- Stage Black背景
- 06 Formal Mark＋SYSTEM / SOUND
- `AI SOLUTION ENGINEER`
- `業務改善・AI導入・自動化支援`
- 氏名・連絡先・QRは正式データ確定までプレースホルダー

### Site header

- モバイルを基準に、06 Formal Markを24px高以上で使用
- ロゴタイプを隣接し、赤の追加バッジを置かない
- 主要サービス説明よりロゴを大きくしすぎない

## 8. Files

- `design/logo/system-sound-formal-mark.svg`
- `design/logo/system-sound-candidate-02-reference.svg`
- `design/logo/system-sound-small-icon.svg`
- `design/logo/system-sound-symbol.svg`
- `design/logo/system-sound-horizontal.svg`
- `design/logo/system-sound-horizontal-reversed.svg`
- `design/logo/system-sound-vertical.svg`
- `design/logo/system-sound-monochrome.svg`
- `design/logo/system-sound-reversed.svg`
- `design/logo/favicon.svg`
- `wireframes/brand-phase-02.html`

## 9. Open decisions

- 10を正式faviconとするか、06の小型補正版を追加比較するか
- ロゴタイプの最終ウェイトと文字アウトライン
- 名刺の正式氏名、連絡先、URL、QR遷移先
- 印刷会社、用紙、CMYKプロファイル

## 10. Pre-publication checks

- 所有者限定プレビューで白背景・黒背景・名刺・ヘッダーを確認
- 06を24px、32px、64px、8mm印刷で確認
- 10を16pxの実ブラウザfaviconで確認
- 赤い部分が円形バッジ、LED、録画ランプに見えないことを確認
- 連絡先とQRがプレースホルダーのまま公開されないことを確認
