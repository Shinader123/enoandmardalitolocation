import '../style.css';

const WHATSAPP_NUMBER = '509XXXXXXXX';
const app = document.querySelector('#app');

if (!app) {
  throw new Error('Eleman #app pa jwenn nan index.html.');
}

const year = new Date().getFullYear();

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
            <p class="muted">Plis espas pou fanmi ak vwayaj pi long.</p>
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
            <p class="muted">Pou okazyon espesyal ak vwayaj konfòtab.</p>
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
            <p class="muted">Kontakte nou pou machin ki adapte ak gwoup ou.</p>
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

      <p class="muted tiny">
        Kategori sa yo se egzanp. Kontakte nou pou verifye machin reyèl,
        disponiblite, pri ak kondisyon lokasyon yo.
      </p>
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
            <p>Chwazi kategori machin ki adapte ak bezwen ou.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Voye demann ou</h3>
            <p>Ranpli fòm lan pou voye detay vwayaj ou.</p>
          </article>
          <article>
            <b>03</b>
            <h3>Konfime rezèvasyon an</h3>
            <p>Nou dwe konfime disponiblite ak pri a avèk ou.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section wrap" id="rezèvasyon">
      <div class="bookinggrid">
        <div class="bookingintro">
          <span class="eyebrow">NOU LA POU EDE W</span>
          <h2>Ann prepare pwochen vwayaj ou.</h2>
          <p>Voye enfòmasyon ou yo atravè WhatsApp.</p>
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
                  <option value="Machin ekonomik">Machin ekonomik</option>
                  <option value="SUV">SUV</option>
                  <option value="Machin liks">Machin liks</option>
                  <option value="Machin pou gwoup">Machin pou gwoup</option>
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
              Demann sa a pa yon rezèvasyon konfime.
              Nou dwe verifye disponiblite ak pri a anvan.
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
            <p class="muted">Konfime detay peman yo ak biznis la anvan ou voye lajan.</p>
          </div>
        </div>
        <div class="steps">
          <article>
            <b>M</b>
            <h3>MonCash</h3>
            <p>Mande nimewo ofisyèl peman an.</p>
          </article>
          <article>
            <b>N</b>
            <h3>NatCash</h3>
            <p>Konfime kont lan ak montan an anvan ou peye.</p>
          </article>
          <article>
            <b>P</b>
            <h3>PayPal</h3>
            <p>Konfime si peman PayPal disponib.</p>
          </article>
        </div>
        <p class="notice">
          Metòd sa yo se enfòmasyon sèlman.
          Peman sou entènèt poko konekte nan paj sa a.
        </p>
      </div>
    </section>
  </main>

  <footer class="topline">
    <div class="wrap topinner">
      <span>© ${year} Eno & Mardalito Location</span>
      <a href="#home">Retounen anlè ↑</a>
    </div>
  </footer>
`;

const carSelect = document.querySelector('#carSelect');
const bookingForm = document.querySelector('#bookingForm');
const bookingMessage = document.querySelector('#bookingMessage');
const dateInput = document.querySelector('input[name="date"]');

if (dateInput) {
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0')
  ].join('-');

  dateInput.min = localToday;
}

document.querySelectorAll('[data-car]').forEach((link) => {
  link.addEventListener('click', () => {
    if (carSelect) {
      carSelect.value = link.dataset.car;
    }
  });
});

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (WHATSAPP_NUMBER === '509XXXXXXXX') {
      bookingMessage.textContent =
        'Nimewo WhatsApp biznis la poko mete nan kòd la. Tanpri kontakte administratè sit la.';
      return;
    }

    const formData = new FormData(bookingForm);
    const values = Object.fromEntries(formData.entries());

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

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const whatsappWindow = window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );

    if (!whatsappWindow) {
      bookingMessage.textContent =
        'Si WhatsApp pa louvri, verifye si navigatè a bloke nouvo fenèt.';
    } else {
      bookingMessage.textContent =
        'Demann ou pare pou voye sou WhatsApp. Tanpri voye mesaj la pou konfime demann ou.';
    }
  });
}
