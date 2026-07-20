# テンプレートが唯一の難所を隠していた（is_invalid の導出）

424（Longest Repeating Character Replacement）で、テンプレートを見ても解けなかった。
書けたコードは骨格が正しく、詰まりは1点に集中している。

```python
while counter[char] in seen and counter[char] > k:   # ← 窓が invalid である条件が出せていない
```

**Evidence:** `for right, char in enumerate(s)` / `while ... left += 1` / `right - left + 1` の骨格は完全に正しい。
`defaultdict(int)` という状態の選択も正しい。**構造は全て書けていて、条件式だけが書けなかった。**

**教える側のミス（本質）:**
- `reference/sliding-window-template.html` の可変長テンプレートは `while is_invalid(state):` と書いてある。
  **この問題における唯一の難所を、関数名で抽象化して隠していた。**
- 3（Longest Substring）では `is_invalid` が問題文にほぼ直書きされている（「重複がある」＝ `char in seen`）ので、
  隠していることが露呈しなかった。424 で初めて露呈した。
- つまり LR-0002 と同じ構図の再発。**「テンプレートがそのまま動く問題」でだけ検証していた。**
  424 は骨格は同じだが、`is_invalid` を<strong>導出</strong>する必要がある点で階段が一段高い。
- 修正方針：テンプレートに「`is_invalid` の導き方」の節を追加し、抽象化した箇所を展開する。

**本人が持っていなかった技能:**
- valid の定義を、問題文の日本語から**窓の中の量の式**に翻訳する手順。
  424 の valid ＝「k 回以下の置き換えで窓を全部同じ文字にできる」
  → 置き換えが必要な個数 ＝ `窓の長さ - 窓内で最頻の文字の出現数`
  → valid ⟺ `(right - left + 1) - max_freq <= k`
  この「日本語 → 量 → 不等号」の3段が未獲得。**これが可変長窓の本体**であり、以後の全問題で使う。

**併発した既知の型のミス:**
- `counter[left] -= 1` — **添字と文字の取り違え**。正しくは `counter[s[left]] -= 1`。
  [[0001-hashable-keys]] 以来の「Python 側で詰まる」系列だが、今回は境界ではなく**添字 vs 値**。新しい種類。
- `counter[char] in seen` — 前問（3）の `seen` が残留。問題間のコピー由来。
- 加算 `counter[char] += 1` が while の**後**にある。テンプレートは「入れる → 縮める → 更新」の順。
  順序が反転すると、現在の文字を含まない状態で invalid 判定してしまう。

**関連:** [[0002-left-monotonicity]] [[0006-amortized-gap]]
