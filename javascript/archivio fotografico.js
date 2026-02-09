document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('ordinaBtn');

  btn.addEventListener('click', function () {
    const container = document.getElementById('contenitore-cards');
    const cards = Array.from(container.getElementsByClassName('card'));
    const valore = document.getElementById('ordinamento').value;

    // ORDINA PER DATA
    if (valore === 'asc' || valore === 'desc') {
      cards.sort((a, b) => {
        const annoA = parseInt(a.dataset.anno) || 0;
        const annoB = parseInt(b.dataset.anno) || 0;
        return valore === 'asc' ? annoA - annoB : annoB - annoA;
      });

      cards.forEach(c => {
        c.style.display = '';
        container.appendChild(c);
      });

    // FILTRO PER TIPO
    } else {
      cards.forEach(c => {
        c.style.display = (c.dataset.type === valore) ? '' : 'none';
      });
    }
  });
});
