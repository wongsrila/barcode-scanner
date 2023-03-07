const app = document.querySelector('.app');
let foundItem;

const editGet = (barcode) => {
  const storageItems = JSON.parse(localStorage.getItem('items')) || [];

  if (storageItems.some((item) => item.barcode === `${barcode}`)) {
    foundItem = storageItems.find((item) => item.barcode === `${barcode}`);
  } else {
    console.log('kan het product niet vinden');
  }

  const resultMarkup = `
    <main>
      <img src="${foundItem.imgUrl}">
      <h1>${foundItem.name}</h1>
      <b>${foundItem.brands}</b></br></br>
      <b>${foundItem.quantity}</b></br></br>
      <p>${foundItem.ingredients}</p></br></br>
      <p>${foundItem.categories}</p></br></br>
      <table>
        <tbody>
          <tr>
            <th>Soort</th>
            <th>Per 100 Milliliter</th>
          </tr>
          <tr>
            <td>Energy</td>
            <td>${foundItem.energy}kcal</td>
          </tr>
          <tr>
            <td>Vet</td>
            <td>kcal</td>
          </tr>
          <tr>
            <td>Koolhydraten</td>
            <td>${foundItem.koolhydraten}kcal</td>
          </tr>
          <tr>
            <td>Eiwitten</td>
            <td>${foundItem.eiwitten}kcal</td>
          </tr>
          <tr>
            <td>Zout</td>
            <td>kcal</td>
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
            <li class="item-btn"><button class="remove-btn">remove item</button></li>
          </ul>
        </nav>
      </div>
    </footer>
  `;

  app.innerHTML = resultMarkup;

  const removeBtn = document.querySelector('.remove-btn');

  removeBtn.addEventListener('click', () => {
    let index = storageItems.findIndex((obj) => obj.barcode == barcode);
    const foundItems = JSON.parse(localStorage.getItem('items')) || [];
    foundItems.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(foundItems));
    routie('');
  });
};

export default editGet;
