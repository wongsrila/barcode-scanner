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

    <main>
      <div id="reader"></div>
      <div id="result">Result goes here</div>
      <button id="start">start scanner</button>
      <button id="stop">stop scanner</button>
    </main>

    <footer>
      <div class="container">
        <nav>
          <ul>
            <li>Home</li>
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
};

export default indexGet;
