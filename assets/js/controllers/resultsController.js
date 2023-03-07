const app = document.querySelector('.app');

const resultsGet = async (barcode) => {
  const markup = `
    <h1>loading</h1>
  `;

  app.innerHTML = markup;

  fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((res) => markupData(res))
    .catch((error) => {
      console.log(error);
    });

  const markupData = (res) => {
    if (res.status === 1) {
      // prettier-ignore
      const resultMarkup = `
    <main>
      <img src="${res.product.image_small_url}">
      <h1>${res.product.product_name}</h1>
      <b>${res.product.brands}</b></br></br>
      <b>${res.product.quantity}</b></br></br>
      <p>${res.product.ingredients_text}</p></br></br>
      <p>${res.product.categories}</p></br></br>
      <input id="input" type="number" />
      </br></br>
      <table>
        <tbody>
          <tr>
            <th>Soort</th>
            <th>Per 100 Milliliter</th>
          </tr>
          <tr>
            <td>Energy</td>
            <td>${parseFloat(res.product.nutriments.energy_100g / 4.18).toFixed(
              1,
            )}kcal</td>
          </tr>
          <tr>
            <td>Vet</td>
            <td>${res.product.nutriments.fat_100g}g</td>
          </tr>
          <tr>
            <td>Koolhydraten</td>
            <td>${res.product.nutriments.carbohydrates_100g}g</td>
          </tr>
          <tr>
            <td>Eiwitten</td>
            <td>${res.product.nutriments.proteins_100g}g</td>
          </tr>
          <tr>
            <td>Zout</td>
            <td>${res.product.nutriments.salt_100g}g</td>
          </tr>
        </tbody>
      </table>
    </main>
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
            <li><button class="opslaan">Save item</button></li>
          </ul>
        </nav>
      </div>
    </footer>
  `;
      app.innerHTML = resultMarkup;

      // hoeveelheid selector
      const input = document.getElementById('input');
      const submitBtn = document.querySelector('.opslaan');

      submitBtn.addEventListener('click', () => {
        saveItem(res, input);
      });
    } else {
      const errormMarkup = `
    <main>
      <h1>Het product staat nog niet in ons systeem...</h1>
      <p>Scan een ander product!</p>
    </main>
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
          </ul>
        </nav>
      </div>
    </footer>
      `;

      app.innerHTML = errormMarkup;
    }

    const saveItem = (res, input) => {
      const items = JSON.parse(localStorage.getItem('items')) || [];

      const addedEnergy = (
        parseFloat(res.product.nutriments.energy_100g / 4.18 / 100) *
        input.value
      ).toFixed(1);

      const addedProtein = (
        parseFloat(res.product.nutriments.proteins_100g / 100) * input.value
      ).toFixed(1);

      const addedCarbs = (
        parseFloat(res.product.nutriments.carbohydrates_100g / 100) *
        input.value
      ).toFixed(1);

      const addedFats = (
        parseFloat(res.product.nutriments.fat_100g / 100) * input.value
      ).toFixed(1);

      const addedSalts = (
        parseFloat(res.product.nutriments.salt_100g / 100) * input.value
      ).toFixed(1);

      // prettier-ignore
      items.push({
        barcode: res.code,
        imgUrl: res.product.image_small_url,
        name: res.product.product_name,
        brands: res.product.brands,
        quantity: res.product.quantity,
        ingredients: res.product.ingredients_text,
        categories: res.product.categorie,
        energy: addedEnergy,
        koolhydraten: addedCarbs,
        eiwitten: addedProtein,
        fat: addedFats,
        salt: addedSalts,
      });

      localStorage.setItem('items', JSON.stringify(items));
      routie('');
    };
  };
};

export default resultsGet;
