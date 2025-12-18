
<script>
  const map = L.map('map').setView([51.5, 10.5], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  const luoghi = [
    { nome: "•Fichtenhain", coords: [51.345, 6.521] },
    { nome: "▸Kassel", coords: [51.3127, 9.4797] },
    { nome: "•■Deblin", coords: [51.5562, 21.8547] },
    { nome: "•Poznan", coords: [52.4064, 16.9252] },
    { nome: "•Hohenstein", coords: [53.7761, 20.9825] },
    { nome: "🔺Dora - Nordhausen", coords: [51.5025, 10.7764] }
  ];

  luoghi.forEach(l => {
    L.marker(l.coords).addTo(map)
      .bindPopup(`<strong>${l.nome}</strong>`);
  });

  const legenda = L.control({ position: 'bottomright' });
  legenda.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML += "<strong>Legenda</strong><br>";
    div.innerHTML += "• Campi di prigionia per sottoufficiali e militari<br>";
    div.innerHTML += "■ Campi di prigionia per ufficiali<br>";
    div.innerHTML += "🔺Campi di concentramento<br>";
    div.innerHTML += "▸ Sede dei comandanti dei prigionieri di guerra<br>";
    return div;
  };
  legenda.addTo(map);
</script>
