const app = document.querySelector('.app');
let foundItem;

const editGet = (barcode) => {
  const storageItems = JSON.parse(localStorage.getItem('items')) || [];

  if (storageItems.some((item) => item.barcode === `${barcode}`)) {
    foundItem = storageItems.find((item) => item.barcode === `${barcode}`);
  } else {
    console.log('kan het product niet vinden');
  }

  console.log(foundItem);

  const resultMarkup = `
    <div class="container">
      <div class="result__header">
        <img src="${foundItem.imgUrl}" alt="" />
        <h1>${foundItem.name} - ${foundItem.quantity}</h1>
        <label>${foundItem.brands}</label>
        <div class="result__core-nutri__wrapper">
          <div class="result__core-nutri">
            <p class="is--text-green">${foundItem.energy}</p>
            <p>Calories</p>
          </div>
          <div class="result__core-nutri">
            <p class="is--text-pink">${foundItem.koolhydraten}</p>
            <p>Carbs (g)</p>
          </div>
          <div class="result__core-nutri">
            <p class="is--text-blue">${foundItem.eiwitten}</p>
            <p>Protein (g)</p>
          </div>
          <div class="result__core-nutri">
            <p class="is--text-orange">${foundItem.fat}</p>
            <p>Fat (g)</p>
          </div>
        </div>
        <input
          class="input_value"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
          placeholder="Add amount (gram / ml)"
          value="${foundItem.input} gram / ml"
          disabled
        />
        <p class="ingredients">${foundItem.ingredients}</p>
      </div>

      <a class="save-item remove-btn" href="">Remove from diary</a>

      <footer>
        <a href="#">
          <svg
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H17M1 7V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H13.8031C14.921 19 15.48 19 15.9074 18.7822C16.2837 18.5905 16.5905 18.2842 16.7822 17.9079C17 17.4805 17 16.9215 17 15.8036V7M1 7V6.2002C1 5.08009 1 4.51962 1.21799 4.0918C1.40973 3.71547 1.71547 3.40973 2.0918 3.21799C2.51962 3 3.08009 3 4.2002 3H5M17 7V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H13M5 3H13M5 3V1M13 3V1M12 11L8 15L6 13"
              stroke="#75B06D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Diary</p>
        </a>
        <a href="#">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19C15 16.2386 12.7614 14 10 14C7.23858 14 5 16.2386 5 19M15 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2837 18.7822 17.9074C19 17.48 19 16.921 19 15.8031V4.19691C19 3.07899 19 2.5192 18.7822 2.0918C18.5905 1.71547 18.2837 1.40973 17.9074 1.21799C17.4796 1 16.9203 1 15.8002 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.8002C1 16.9203 1 17.4796 1.21799 17.9074C1.40973 18.2837 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H5M15 19H5M10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11Z"
              stroke="#7b7b7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Me</p>
        </a>
      </footer>
      <!-- HOME PAGINA -->
    </div>
  `;

  // const resultMarkup = `
  //   <main>
  //     <img src="${foundItem.imgUrl}">
  //     <h1>${foundItem.name}</h1>
  //     <b>${foundItem.brands}</b></br></br>
  //     <b>${foundItem.quantity}</b></br></br>
  //     <p>${foundItem.ingredients}</p></br></br>
  //     <p>${foundItem.categories}</p></br></br>
  //     <input id="input" type="number" value="${foundItem.input}" />
  //     <table>
  //       <tbody>
  //         <tr>
  //           <th>Soort</th>
  //           <th>Per 100 Milliliter</th>
  //         </tr>
  //         <tr>
  //           <td>Energy</td>
  //           <td>${foundItem.energy}kcal</td>
  //         </tr>
  //         <tr>
  //           <td>Vet</td>
  //           <td>${foundItem.fat}g</td>
  //         </tr>
  //         <tr>
  //           <td>Koolhydraten</td>
  //           <td>${foundItem.koolhydraten}g</td>
  //         </tr>
  //         <tr>
  //           <td>Eiwitten</td>
  //           <td>${foundItem.eiwitten}g</td>
  //         </tr>
  //         <tr>
  //           <td>Zout</td>
  //           <td>${foundItem.salt}g</td>
  //         </tr>
  //         <tr>
  //           <td>Suiker</td>
  //           <td>${foundItem.sugar}g</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </main>
  //   <footer>
  //     <div class="container">
  //       <nav>
  //         <ul>
  //           <li><a href="./">Home</a></li>
  //           <li class="item-btn"><button class="remove-btn">remove item</button></li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </footer>
  // `;

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
