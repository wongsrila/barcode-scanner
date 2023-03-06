const app = document.querySelector('.app');

const indexGet = () => {
  const markup = `
    <header>
      <div class="container">
        <div class="global-padding">
          <h1>Nutritional today</h1>
          <ul>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Calories</p>
                <p>1250 of 2000cal</p>
              </div>
              <div class="progress-line__wrapper">
                <div class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>Protein</p>
                <p>50 of 140g</p>
              </div>
              <div class="progress-line__wrapper">
                <div class="inner-line"></div>
              </div>
            </li>
            <li>
              <div class="nutrition-info__wrapper">
                <p>carbs</p>
                <p>40 of 200g</p>
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
