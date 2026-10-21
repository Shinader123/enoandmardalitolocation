
import './style.css';

const WHATSAPP_NUMBER = '509XXXXXXXX';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="topline">
    <div class="wrap topinner">
      <span>Eno & Mardalito Location</span>
      <span>Lokasyon machin an Ayiti</span>
    </div>
  </div>

  <header class="wrap">
    <div class="nav">
      <a class="brand" href="#home">
        <span class="brandmark">EM</span>
        <span>Eno & Mardalito Location</span>
      </a>
      <nav>
        <a href="#machin">Machin yo</a>
        <a href="#kijan">Kijan sa mache</a>
        <a href="#rezèvasyon">Rezèvasyon</a>
        <a class="btn btn-small" href="#rezèvasyon">Rezève kounye a</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="wrap" id="home">
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">VWAYAJE AK KONFYANS</span>
          <h1>Bon machin.<br>Bon sèvis.<br><em>Bon vwayaj.</em></h1>
          <p>
            Byenveni nan Eno & Mardalito Location.
            Jwenn yon machin ki adapte ak bezwen ou,
            pou deplasman ou ann Ayiti.
          </p>
          <div class="actions">
            <a class="btn" href="#machin">Dekouvri machin yo</a>
            <a class="btn btn-ghost" href="#rezèvasyon">Fè yon rezèvasyon</a>
          </div>
          <div class="trust">
            <span>✓ Sèvis kliyan</span>
            <span>✓ Rezèvasyon fasil</span>
            <span>✓ Plizyè opsyon machin</span>
          </div>
        </div>
        <div class="hero-art">
          <div class="sun"></div>
          <div class="hero-car">🚘</div>
          <div class="hero-note">
            <strong>Eno & Mardalito</strong>
            <span>Ann pran wout la!</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section wrap" id="machin">
      <div class="sectionhead">
        <div>
          <span class="eyebrow dark-eyebrow">FLOTT NOU AN</span>
          <h2>Chwazi machin ou</h2>
          <p class="muted">Chwazi kategori ki pi byen adapte ak vwayaj ou.</p>
        </div>
      </div>

      <div class="fleet">
        <article class="carcard">
          <div class="carvisual">
            <span class="tag">EKONOMIK</span>
            <div class="carplaceholder">🚗</div>
          </div>
          <div class="carcontent">
            <h3>Machin ekonomik</h3>
            <p class="muted">Yon opsyon pratik pou deplasman chak jou.</p>
            <div class="carprice">
              <span class="price-label">Pri lokasyon</span>
              <strong class="price">Mande pri</strong>
            </div>
            <div class="cardbottom">
              <a class="btn" href="#rezèvasyon" data-car="Machin ekonomik">Rezève machin sa a</a>
            </div>
          </div>
        </article>

        <article class="carcard">
          <div class="carvisual">
            <span class="tag">FANMI AK VWAYAJ</span>
            <div class="carplaceholder">🚙</div>
          </div>
          <div class="carcontent">
            <h3>SUV</h3>
            <p class="muted">Plis espas pou fanmi ak deplasman pi long.</p>
            <div class="carprice">
              <span class="price-label">Pri lokasyon</span>
              <strong class="price">Mande pri</strong>
            </div>
            <div class="cardbottom">
              <a class="btn" href="#rezèvasyon" data-car="SUV">Rezève machin sa a</a>
            </div>
          </div>
        </article>

        <article class="carcard">
          <div class="carvisual">
            <span class="tag">KONFÒ</span>
            <div class="carplaceholder">🚘</div>
          </div>
          <div class="carcontent">
            <h3>Machin liks</h3>
            <p class="muted">Yon opsyon pou okazyon espesyal ak vwayaj konfòtab.</p>
            <div class="carprice">
              <span class="price-label">Pri lokasyon</span>
              <strong class="price">Mande pri</strong>
            </div>
            <div class="cardbottom">
              <a class="btn" href="#rezèvasyon" data-car="Machin liks">Rezève machin sa a</a>
            </div>
          </div>
        </article>

        <article class="carcard">
          <div class="carvisual">
            <span class="tag">DEPLASMAN</span>
            <div class="carplaceholder">🚐</div>
          </div>
          <div class="carcontent">
            <h3>Machin pou gwoup</h3>
            <p class="muted">Kontakte nou pou konnen ki machin ki disponib pou gwoup ou.</p>
            <div class="carprice">
              <span class="price-label">Pri lokasyon</span>
              <strong class="price">Mande pri</strong>
            </div>
            <div class="cardbottom">
              <a class="btn" href="#rezèvasyon" data-car="Machin pou gwoup">Mande enfòmasyon</a>
            </div>
          </div>
        </article>
      </div>
      <p class="muted tiny">Kategori sa yo se egzanp. Kontakte nou pou verifye machin reyèl ki disponib, pri ak kondisyon lokasyon yo.</p>
    </section>

    <section class="section how" id="kijan">
      <div class="wrap">
        <div class="sectionhead">
          <div>
            <span class="eyebrow dark-eyebrow">SENP EPI FASIL</span>
            <h2>Kijan pou rezève</h2>
          </div>
        </div>
        <div class="steps">
          <article>
            <b>01</b>
            <h3>Chwazi machin ou</h3>
            <p>Chwazi kategori machin ki pi byen adapte ak bezwen ou.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Voye demann ou</h3>
            <p>Ranpli fòm lan pou voye detay vwayaj ou bay ekip nou an.</p>
          </article>
          <article>
            <b>03</b>
            <h3>Konfime rezèvasyon an</h3>
            <p>Nou bezwen konfime disponiblite, pri ak kondisyon yo avèk ou.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section wrap" id="rezèvasyon">
      <div class="bookinggrid">
        <div class="bookingintro">
          <span class="eyebrow">NOU LA POU EDE W</span>
          <h2>Ann prepare pwochen vwayaj ou.</h2>
          <p>Voye enfòmasyon ou yo. N ap prepare yon mesaj WhatsApp pou ou ka kontakte biznis la.</p>
          <div class="contactfixed">
            <strong>Eno & Mardalito Location</strong>
            <span>Lokasyon machin an Ayiti</span>
            <a href="#peman">Gade metòd peman yo ↓</a>
          </div>
        </div>

        <div class="formbox">
          <h3>Fòm demann rezèvasyon</h3>
          <p class="muted tiny">Ranpli chan obligatwa yo.</p>
          <form id="bookingForm">
            <div class="fields">
              <label class="field">
                Non konplè
                <input name="name" required placeholder="Ekri non ou">
              </label>
              <label class="field">
                Nimewo telefòn
                <input name="phone" required type="tel" placeholder="Nimewo pou kontakte w">
              </label>
              <label class="field">
                Kategori machin
                <select name="car" id="carSelect" required>
                  <option value="">Chwazi yon kategori</option>
                  <option>Machin ekonomik</option>
                  <option>SUV</option>
                  <option>Machin liks</option>
                  <option>Machin pou gwoup</option>
                </select>
              </label>
              <label class="field">
                Dat ou bezwen machin nan
                <input name="date" type="date" required>
              </label>
              <label class="field full">
                Kote ou vle pran machin nan
                <input name="location" required placeholder="Vil oswa zòn">
              </label>
              <label class="field full">
                Lòt detay (si genyen)
                <textarea name="details" placeholder="Dire lokasyon, lè oswa lòt bezwen..."></textarea>
              </label>
            </div>
            <div class="notice">
              Demann sa a pa yon rezèvasyon konfime. N ap bezwen verifye disponiblite ak pri a anvan.
            </div>
            <button class="btn fullbtn" type="submit">Kontinye sou WhatsApp</button>
            <p id="bookingMessage" class="muted tiny" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>

    <section class="section how" id="peman">
      <div class="wrap">
        <div class="sectionhead">
          <div>
            <span class="eyebrow dark-eyebrow">PEMAN</span>
            <h2>Metòd peman</h2>
            <p class="muted">Konfime detay peman yo dirèkteman ak biznis la anvan ou voye lajan.</p>
          </div>
        </div>
        <div class="steps">
          <article>
            <b>M</b>
            <h3>MonCash</h3>
            <p>Mande nimewo ofisyèl peman an nan men ekip nou an.</p>
          </article>
          <article>
            <b>N</b>
            <h3>NatCash</h3>
            <p>Konfime detay kont lan ak montan an anvan ou peye.</p>
          </article>
          <article>
            <b>P</b>
            <h3>PayPal</h3>
            <p>Disponibilite peman PayPal la dwe konfime ak biznis la.</p>
          </article>
        </div>
        <p class="notice">Metòd sa yo se enfòmasyon sèlman. Peman sou entènèt poko konekte nan paj sa a.</p>
      </div>
    </section>
  </main>

  <footer class="topline">
    <div class="wrap topinner">
      <span>© ${new Date().getFullYear()} Eno & Mardalito Location</span>
      <a href="#home">Retounen anlè ↑</a>
    </div>
  </footer>
`;

const carSelect = document.querySelector('#carSelect');

document.querySelectorAll('[data-car]').forEach((link) => {
  link.addEventListener('click', () => {
    carSelect.value = link.dataset.car;
  });
});

const dateInput = document.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split('T')[0];

document.querySelector('#bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const values = Object.fromEntries(form.entries());

  if (WHATSAPP_NUMBER === '509XXXXXXXX') {
    document.querySelector('#bookingMessage').textContent =
      'Fòm lan pare, men nou bezwen mete vrè nimewo WhatsApp biznis la nan main.js anvan li ka voye mesaj.';
    return;
  }

  const message = [
    'Bonjou Eno & Mardalito Location, mwen ta renmen mande yon rezèvasyon.',
    '',
    `Non: ${values.name}`,
    `Telefòn: ${values.phone}`,
    `Machin: ${values.car}`,
    `Dat: ${values.date}`,
    `Kote: ${values.location}`,
    `Detay: ${values.details || 'Pa gen lòt detay'}`,
    '',
    'Tanpri konfime disponiblite ak pri a. Mèsi.'
  ].join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
