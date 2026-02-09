document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('ordinaBtn');
  const select = document.getElementById('ordinamento');
  const container = document.getElementById('contenitore-cards');

  if (!btn || !select || !container) {
    console.error("Elementi non trovati");
    return;
  }

  btn.addEventListener('click', () => {

    const valore = select.value;
    const cards = Array.from(container.querySelectorAll('[data-anno]'));

    console.log("Filtro:", valore);
    console.log("Cards trovate:", cards.length);

    if (valore === "asc" || valore === "desc") {

      cards.sort((a,b) => {
        const A = parseInt(a.dataset.anno) || 0;
        const B = parseInt(b.dataset.anno) || 0;
        return valore === "asc" ? A-B : B-A;
      });

      cards.forEach(c => {
        c.style.display = "";
        container.appendChild(c);
      });

    } else {

      cards.forEach(c => {
        c.style.display = (c.dataset.type === valore) ? "" : "none";
      });

    }

  });

});
