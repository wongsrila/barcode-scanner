const resultsGet = async (barcode) => {
  const app = document.querySelector('.app');

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
        <div class="container">
          <a href="./#scanner" class="barcode__btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.4852V9.99995M10 9.99995V1.51465M10 9.99995H18.4853M10 9.99995H1.51471"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <div class="result__header">
            <img src="${res.product.image_small_url}" alt="" />
            <h1>${res.product.product_name} - ${res.product.quantity}</h1>
            <label>${res.product.brands}</label>
            <div class="result__core-nutri__wrapper">
              <div class="result__core-nutri">
                <p class="is--text-green">${parseFloat(
                  res.product.nutriments.energy_100g / 4.18,
                ).toFixed(1)}</p>
                <p>Calories</p>
              </div>
              <div class="result__core-nutri">
                <p class="is--text-pink">${
                  res.product.nutriments.carbohydrates_100g
                }</p>
                <p>Carbs (g)</p>
              </div>
              <div class="result__core-nutri">
                <p class="is--text-blue">${
                  res.product.nutriments.proteins_100g
                }</p>
                <p>Protein (g)</p>
              </div>
              <div class="result__core-nutri">
                <p class="is--text-orange">${
                  res.product.nutriments.fat_100g
                }</p>
                <p>Fat (g)</p>
              </div>
            </div>
            <input
              class="input_value"
              inputmode="numeric"
              pattern="[0-9]*"
              type="number"
              placeholder="Add amount (gram / ml)"
            />
            <p class="ingredients">${res.product.ingredients_text}</p>
          </div>

          <a class="save-item">Add to diary</a>

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

      app.innerHTML = resultMarkup;

      // hoeveelheid selector
      const input = document.querySelector('.input_value');
      const submitBtn = document.querySelector('.save-item');

      submitBtn.addEventListener('click', () => {
        if (!input.value <= 0) {
          saveItem(res, input);
        } else {
          input.style.border = '1px solid red';
          return alert('voer hoeveelheid in');
        }
      });
    } else {
      const errormMarkup = `
        <a href="./#scanner" class="barcode__btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.4852V9.99995M10 9.99995V1.51465M10 9.99995H18.4853M10 9.99995H1.51471"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <main>
          <h1>Het product staat nog niet in ons systeem...</h1>
          <p>Scan een ander product!</p>
        </main>
        <footer>
          <a href="./">
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
          <a href="#account">
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

      const addedSugars = (
        parseFloat(res.product.nutriments.sugars_100g / 100) * input.value
      ).toFixed(1);

      // prettier-ignore
      items.push({
        id: new Date().valueOf(),
        barcode: res.code,
        imgUrl: res.product.image_small_url,
        name: res.product.product_name,
        brands: res.product.brands,
        quantity: res.product.quantity,
        ingredients: res.product.ingredients_text,
        categories: res.product.categories,
        energy: addedEnergy,
        koolhydraten: addedCarbs,
        eiwitten: addedProtein,
        fat: addedFats,
        salt: addedSalts,
        sugar: addedSugars,
        input: input.value,
      });

      localStorage.setItem('items', JSON.stringify(items));
      routie('');
    };
  };
};

export default resultsGet;
