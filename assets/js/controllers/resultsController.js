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
            <li><a href="./">Home</a></li>
            <li>
              <a href="#scanner">
                <img src="assets/images/barcode_icon.png" alt="" />
              </a>
            </li>
            <li class="item-btn"><button class="save-btn">Save item</button></li>
          </ul>
        </nav>
      </div>
    </footer>
  `;
      app.innerHTML = resultMarkup;

      const saveBtn = document.querySelector('.save-btn');

      const storageItems = JSON.parse(localStorage.getItem('items')) || [];

      // Find if the array contains an object by comparing the property value
      if (storageItems.some((item) => item.barcode === `${barcode}`)) {
        saveBtn.setAttribute('disabled', '');
      } else {
        console.log('Object not found.');
        saveBtn.addEventListener('click', () => {
          saveItem(res);
          console.log('clickevent');
        });
      }
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

    const saveItem = (res) => {
      const items = JSON.parse(localStorage.getItem('items')) || [];

      items.push({
        barcode: res.code,
        imgUrl: res.product.image_small_url,
        name: res.product.generic_name,
        brands: res.product.brands,
        quantity: res.product.quantity,
        ingredients: res.product.ingredients_text,
        categories: res.product.categories,
      });

      localStorage.setItem('items', JSON.stringify(items));
      routie('');
    };
  };
};

export default resultsGet;
