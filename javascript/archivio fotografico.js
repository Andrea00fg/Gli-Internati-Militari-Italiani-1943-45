
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('ordinaBtn');

    btn.addEventListener('click', function () {
      const container = document.getElementById('contenitore-cards');
      const cards = Array.from(container.getElementsByClassName('card'));
      const valore = document.getElementById('ordinamento').value;

      if (valore === 'asc' || valore === 'desc') {
        cards.sort((a, b) => {
          const annoA = parseInt(a.getAttribute('data-anno')) || 0;
          const annoB = parseInt(b.getAttribute('data-anno')) || 0;
          return valore === 'asc' ? annoA - annoB : annoB - annoA;
        });
        cards.forEach(c => { 
          c.style.display = 'block';
          container.appendChild(c); 
        });
      } else {
        cards.forEach(c => {
          if (c.dataset.type === valore) {
            c.style.display = 'block';
          } else {
            c.style.display = 'none';
          }
        });
      }
    });
  });
