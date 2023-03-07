const app = document.querySelector('.app');

const indexGet = () => {
  const NutriItems = JSON.parse(localStorage.getItem('items')) || [];

  let totalNutri = {};

  if (NutriItems.length <= 0) {
    totalNutri = {
      energy: 0,
      eiwitten: 0,
      koolhydraten: 0,
    };
  } else {
    totalNutri = NutriItems.reduce(function (previousValue, currentValue) {
      return {
        energy: +previousValue.energy + +currentValue.energy,
        koolhydraten: +previousValue.koolhydraten + +currentValue.koolhydraten,
        eiwitten: +previousValue.eiwitten + +currentValue.eiwitten,
      };
    });
    console.log(typeof totalNutri.energy);
  }

  const markup = `
    <header>
      <div class="container">
        <div class="global-padding">
          <h1>Nutritional today</h1>
          <ul>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Calories</p>
                <p>${parseFloat(totalNutri.energy).toFixed(0)}/2000kcal</p>
              </div>
              <div class="progress-line__wrapper">
                <div id="progress_1" class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Protein</p>
                <p>${parseFloat(totalNutri.eiwitten).toFixed(0)}/160g</p>
              </div>
              <div class="progress-line__wrapper">
                <div id="progress_2" class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Carbs</p>
                <p>${parseFloat(totalNutri.koolhydraten).toFixed(0)}/200g</p>
              </div>
              <div class="progress-line__wrapper">
                <div id="progress_3" class="inner-line"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <table>
    </table>

    <footer>
      <div class="container">
        <nav>
          <ul>
            <li><a href="./">Home</a></li>
            <li>
              <a href="#scanner">
                <img src="assets/images/barcode_icon.png" alt="" />
              </a>
            </li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </footer>
  `;

  app.innerHTML = markup;

  // Bereken de progress bar
  const energyResult = (100 / 2000) * parseFloat(totalNutri.energy).toFixed(0);
  const eiwittenResult =
    (100 / 160) * parseFloat(totalNutri.eiwitten).toFixed(0);
  const koolhydratenResult =
    (100 / 200) * parseFloat(totalNutri.koolhydraten).toFixed(0);

  document.querySelector('#progress_1').style.width = `${energyResult}%`;
  document.querySelector('#progress_2').style.width = `${eiwittenResult}%`;
  document.querySelector('#progress_3').style.width = `${koolhydratenResult}%`;

  // add items to a table that are saved in the localstorage
  const table = document.querySelector('table');

  const items = JSON.parse(localStorage.getItem('items')) || [];

  items.forEach((item) => {
    let row = table.insertRow(0);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    col1.innerHTML = item.brands;
    col2.innerHTML = item.name;
    col3.innerHTML = `<button class="more-info">info</button>`;

    const infoBtn = document.querySelector('.more-info');

    infoBtn.addEventListener('click', () => {
      routie(`edit/${item.barcode}`);
    });
  });
};

export default indexGet;
