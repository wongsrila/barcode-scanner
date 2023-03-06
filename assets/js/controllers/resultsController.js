const app = document.querySelector('.app');

const resultsGet = async () => {
  let dataKeys = [];
  let lastElement;

  for (let key in Object.keys(localStorage)) {
    dataKeys.push(+key + 1);
    lastElement = dataKeys[dataKeys.length - 1];
  }

  const data = localStorage.getItem(lastElement);

  const markup = `
    <h1>loading</h1>
  `;

  app.innerHTML = markup;

  fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    .then((res) => res.json())
    .then((res) => markupData(res));

  const markupData = (res) => {
    const resultMarkup = `
    <main>
      <img src="${res.product.image_small_url}">
      <h1>${res.product.generic_name}</h1>
      <b>${res.product.brands}</b></br></br>
      <b>${res.product.quantity}</b></br></br>
      <p>${res.product.ingredients_text}</p></br></br>
      <p>${res.product.categories}</p></br></br>
      <table>
        <tbody>
          <tr>
            <th>Soort</th>
            <th>Per 100 Milliliter</th>
          </tr>
          <tr>
            <td>Energy</td>
            <td>${res.product.nutriments.energy_100g}kcal</td>
          </tr>
          <tr>
            <td>Vet</td>
            <td>${res.product.nutriments.fat_100g}kcal</td>
          </tr>
          <tr>
            <td>Koolhydraten</td>
            <td>${res.product.nutriments.carbohydrates_100g}kcal</td>
          </tr>
          <tr>
            <td>Eiwitten</td>
            <td>${res.product.nutriments.proteins_100g}kcal</td>
          </tr>
          <tr>
            <td>Zout</td>
            <td>${res.product.nutriments.salt_100g}kcal</td>
          </tr>
        </tbody>
      </table>
    </main>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
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

    app.innerHTML = resultMarkup;
  };
};

export default resultsGet;
