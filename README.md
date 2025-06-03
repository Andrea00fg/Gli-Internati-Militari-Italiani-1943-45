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
  <header class="bg-dark text-white py-4">
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
          <li class="nav-item"><a class="nav-link" href="Archivio_fotografico.html">Archivio fotografico</a></li>
          <li class="nav-item"><a class="nav-link" href="Luoghi.html">I luoghi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Slider tipo "sito-da-riprodurre" -->
  <div id="hero-slider">
    <div class="slide active" style="background-image: url('https://www.ns-zwangsarbeit.de/fileadmin/dateien/imi/Transport/10_Sept_43_Ital_Internierte_treffen_im_Lager_ein.jpg');"></div>
    <div class="slide" style="background-image: url('https://www.ns-zwangsarbeit.de/fileadmin/_processed_/7/7/csm_Zwangsarbeit_der_Soldaten_fuer_den_Krieg_9a0c4af102.jpg');"></div>

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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
