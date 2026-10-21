
import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1>Eno & Mardalito Location</h1>
    <p>Lokasyon machin an Ayiti</p>
  </header>

  <main class="container">
    <section class="hero">
      <h2>Byenveni nan Eno & Mardalito Location</h2>
      <p>Nou ede w jwenn machin pou deplasman ou yo.</p>
      <a class="whatsapp" href="https://wa.me/509XXXXXXXX" target="_blank" rel="noopener">
        Kontakte nou sou WhatsApp
      </a>
    </section>

    <section>
      <h2>Machin nou yo</h2>
      <div class="cars">
        <article class="car">
          <div class="car-icon">🚗</div>
          <h3>Machin ekonomik</h3>
          <p>Bon pou deplasman chak jou.</p>
          <a class="reserve" href="https://wa.me/509XXXXXXXX" target="_blank" rel="noopener">Rezève kounye a</a>
        </article>

        <article class="car">
          <div class="car-icon">🚙</div>
          <h3>SUV</h3>
          <p>Konfò pou fanmi ak vwayaj.</p>
          <a class="reserve" href="https://wa.me/509XXXXXXXX" target="_blank" rel="noopener">Rezève kounye a</a>
        </article>

        <article class="car">
          <div class="car-icon">🚘</div>
          <h3>Machin liks</h3>
          <p>Yon opsyon pou okazyon espesyal.</p>
          <a class="reserve" href="https://wa.me/509XXXXXXXX" target="_blank" rel="noopener">Rezève kounye a</a>
        </article>
      </div>
    </section>

    <section class="payment">
      <h2>Metòd peman</h2>
      <p>MonCash · NatCash · PayPal</p>
      <p>Kontakte nou pou konfime pri a ak detay peman yo anvan ou peye.</p>
    </section>
  </main>

  <footer>
    <p>© ${new Date().getFullYear()} Eno & Mardalito Location</p>
  </footer>
`;
