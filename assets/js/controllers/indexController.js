const app = document.querySelector('.app');

const indexGet = () => {
  const NutriItems = JSON.parse(localStorage.getItem('items')) || [];

  let totalNutri = NutriItems.reduce(function (previousValue, currentValue) {
    return {
      energy: previousValue.energy + currentValue.energy,
      koolhydraten: previousValue.koolhydraten + currentValue.koolhydraten,
      eiwitten: previousValue.eiwitten + currentValue.eiwitten,
    };
  });

  const markup = `
    <header>
      <div class="container">
        <div class="global-padding">
          <h1>Nutritional today</h1>
          <ul>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Total Calories</p>
                <p>${totalNutri.energy}kcal</p>
              </div>
              <div class="progress-line__wrapper">
                <div class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Total Protein</p>
                <p>${totalNutri.eiwitten}g</p>
              </div>
              <div class="progress-line__wrapper">
                <div class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Total Carbs</p>
                <p>${totalNutri.koolhydraten}g</p>
              </div>
              <div class="progress-line__wrapper">
                <div class="inner-line"></div>
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

  // add items to a table that are saved in the localstorage
  const table = document.querySelector('table');

  const items = JSON.parse(localStorage.getItem('items')) || [];

  let add = items.reduce(function (previousValue, currentValue) {
    return {
      energy: previousValue.energy + currentValue.energy,
      koolhydraten: previousValue.koolhydraten + currentValue.koolhydraten,
      eiwitten: previousValue.eiwitten + currentValue.eiwitten,
    };
  });

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
      routie(`results/${item.barcode}`);
    });
  });
};

export default indexGet;
