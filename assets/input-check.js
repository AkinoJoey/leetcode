/* 記述式チェッカー。選択式では検出できない「実際に書けるか」を取るための部品。
 *
 * 使い方（HTML側）:
 *   <div class="check" data-answer="3" data-alt="three">
 *     <p class="check-q">設問文</p>
 *     <input class="check-in" type="text" placeholder="答えを入力">
 *     <button class="check-btn">確認</button>
 *     <p class="check-fb">解答後に表示される解説。</p>
 *   </div>
 *
 * data-answer : 正解（必須）
 * data-alt    : 別解を `|` 区切りで（任意）
 *
 * 判定は空白除去・小文字化・全角→半角の正規化後に行う。
 * 誤答でもロックしない（何度でも試せる）。3回外すと解説を開示する。
 */
(function () {
  function normalize(s) {
    return String(s)
      .replace(/[Ａ-Ｚａ-ｚ０-９＋－＝［］（）]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) - 0xfee0)
      )
      .replace(/\s+/g, "")
      .toLowerCase();
  }

  document.querySelectorAll(".check").forEach((box) => {
    const input = box.querySelector(".check-in");
    const btn = box.querySelector(".check-btn");
    const fb = box.querySelector(".check-fb");
    const answers = [box.dataset.answer]
      .concat((box.dataset.alt || "").split("|"))
      .filter(Boolean)
      .map(normalize);

    // 設問文を入力欄のラベルとして結びつける（スクリーンリーダー対応）
    const q = box.querySelector(".check-q");
    if (q && !input.hasAttribute("aria-label")) {
      input.setAttribute("aria-label", q.textContent.trim());
    }

    let misses = 0;

    function judge() {
      const ok = answers.includes(normalize(input.value));
      box.classList.toggle("is-ok", ok);
      box.classList.toggle("is-ng", !ok);

      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        if (fb) fb.classList.add("show");
        return;
      }

      misses++;
      if (misses >= 3 && fb) {
        fb.classList.add("show");
        btn.textContent = "解説を表示済み";
      }
    }

    btn.addEventListener("click", judge);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") judge();
    });
  });
})();
