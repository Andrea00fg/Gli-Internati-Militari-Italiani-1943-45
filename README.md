<!DOCTYPE html>
<html lang="it">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="DC.title" content="Gli internati militari italiani (1943-45)">
  <meta name="DC.creator" content="[Andrea Perrucci]">
  <meta name="DC.subject" content="Internati militari italiani, Seconda guerra mondiale, Lager, prigionia">
  <meta name="DC.description" content="Una raccolta digitale di testimonianze e documenti sugli internati militari italiani nei lager tedeschi, 1943-1945.">
  <meta name="DC.language" content="it">
  <meta name="DC.date" content="2025-05-15">
  <meta name="DC.rights" content="CC BY-SA 4.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/stile.css">

  <!-- Slider CSS -->
  <style>
  body {
  background-color: #f5f2e7;
  color: #212529;
  font-family: 'Segoe UI', sans-serif;
}

h1, h2, h3, h4 {
  color: #2c3e50;
}

a {
  color: #8b0000;
  text-decoration: underline;
}

a:hover {
  color: #5a0000;
}
a:visited,
a:active {
  color: #000000;
}

.navbar, footer {
  background-color: #e0e0e0;
}
    

.btn-outline-secondary {
  border-color: #8b0000;
  color: #8b0000;
}

.btn-outline-secondary:hover {
  background-color: #8b0000;
  color: white;
}
    </style>

  <style>
    #hero-slider {
      position: relative;
      height: 70vh;
      overflow: hidden;
    }

    #hero-slider .slide {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    #hero-slider .slide.active {
      opacity: 1;
      z-index: 1;
    }
  </style>
</head>
<body>
 <header class="text-white py-4" style="background-color: #8C7B5B;">
    <div class="container">
      <h1 class="mb-0">Gli internati militari italiani (1943-45)</h1>
      <p class="lead">Una raccolta digitale di fonti e testimonianze</p>
    </div>
  </header>

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="storia.html">Storia</a></li>
        <li class="nav-item"><a class="nav-link" href="#" onclick="mostraEsplora()">Archivio fotografico</a></li>
        <li class="nav-item"><a class="nav-link" href="Luoghi.html">I luoghi</a></li>
       <li class="nav-item"><a class="nav-link" href="#" onclick="mostraEsplora()">Esplora</a></li>
      </ul>
    </div>
  </div>
</nav>

  <!-- Slider tipo "sito-da-riprodurre" -->
  <div id="hero-slider">
    <div class="slide active" style="background-image: url('https://www.ns-zwangsarbeit.de/fileadmin/dateien/imi/Transport/10_Sept_43_Ital_Internierte_treffen_im_Lager_ein.jpg');"></div>
    <div class="slide" style="background-image: url('https://www.ns-zwangsarbeit.de/fileadmin/_processed_/7/7/csm_Zwangsarbeit_der_Soldaten_fuer_den_Krieg_9a0c4af102.jpg');"></div>
  </div>

  <main class="container my-5">
    <section>
      <h2>Il progetto</h2>
      <p>Questa raccolta digitale nasce per documentare e valorizzare le esperienze degli internati militari italiani (IMI) nei lager tedeschi dopo l'armistizio dell'8 settembre 1943. Attraverso documenti, fotografie, lettere, diari e testimonianze orali, il progetto vuole restituire una voce a chi visse questa tragica pagina della storia italiana.</p>
    </section>

    <section class="mt-4">
      <h2>Obiettivi</h2>
      <ul class="list-unstyled">
        <li>– Raccogliere fonti primarie e secondarie sugli IMI</li>
        <li>– Offrire un'esperienza di consultazione accessibile e navigabile</li>
        <li>– Integrare strumenti digitali per l'analisi e la visualizzazione</li>
        <li>– Promuovere la memoria e la consapevolezza storica</li>
      </ul>
    </section>

    <section class="mt-5">
  <h2>In primo piano</h2>
  <div class="row text-center">
    <div class="col-md-4 mb-4">
      <a href="Archivio_fotografico.html">
        <img src="https://www.analisiqualitativa.com/magma/1601/img/ciccarello04.jpg" class="img-fluid rounded shadow" alt="Lettera da un campo">
      </a>
      <p class="mt-2"><strong>Lettera da un campo</strong><br>Una testimonianza scritta da un internato nel 1944.</p>
    </div>
    <div class="col-md-4 mb-4">
      <a href="Archivio_fotografico.html">
        <img src="https://www.analisiqualitativa.com/magma/1601/img/ciccarello02.jpg" class="img-fluid rounded shadow" alt="Cartolina dal Comando tedesco">
      </a>
      <p class="mt-2"><strong>Cartolina dal Comando tedesco</strong><br>La cartolina spiega ai parenti degli IMI di scrivere sui moduli allegati.</p>
    </div>
    <div class="col-md-4 mb-4">
      <a href="Archivio_fotografico.html">
        <img src="https://www.ns-zwangsarbeit.de/fileadmin/_processed_/0/3/csm_IMI_4_2_3_33_de78c88da6.jpg" class="img-fluid rounded shadow" alt="Imi a lavoro">
      </a>
      <p class="mt-2"><strong>Imi a lavoro</strong><br>Internati militari recuperano le salme dopo il grande bombardamento di Kassel.</p>
    </div>
  </div>
</section>

<section id="esplora" class="mt-5" style="display: none;">
  <h2>Esplora</h2>
  <p>Scopri immagini, lettere e documenti degli internati militari italiani conservati nel nostro archivio fotografico.</p>
  <a href="Archivio_fotografico.html" class="btn btn-outline-secondary">Vai all'archivio completo</a>
</section>

    <section class="mt-4">
      <h2>Contatti e crediti</h2>
      <p>Progetto sviluppato per la prova finale del corso di Digital Humanities e Patrimonio culturale. A cura di Andrea Perrucci, 2025.</p>
    </section>
  </main>

  <footer class="bg-light text-center py-3">
    <p class="mb-0">&copy; 2025 - Gli internati militari italiani (1943-45) - Licenza</p>
  </footer>

  <!-- Slider script -->
  <script>
    const slides = document.querySelectorAll('#hero-slider .slide');
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  </script>

  <script>
  function mostraEsplora() {
    const sezione = document.getElementById('esplora');
    if (sezione && sezione.style.display === "none") {
      sezione.style.display = "block";
      sezione.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
