import { loadingView, resultView, cantFindView } from '../views/results_view.js';

const resultsGet = (barcode) => {
  const app = document.querySelector('.app');

  // Loading screen
  app.innerHTML = loadingView();

  fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((res) => markupData(res))
    .catch((error) => {
      console.log(error);
    });

  const markupData = (res) => {
    if (res.status === 1) {
      // Result Screen
      app.innerHTML = resultView(res);

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
      // Can't find screen
      app.innerHTML = cantFindView();
    }

    const saveItem = (res, input) => {
      const items = JSON.parse(localStorage.getItem('items')) || [];

      // Helper funtion for added nutritions
      const TotalCalc = (response, inputValue) => {
        return (parseFloat(response / 100) * inputValue).toFixed(1);
      };
      // Helper funtion for added nutritions

      const addedEnergy = TotalCalc(res.product.nutriments['energy-kcal_100g'], input.value);
      const addedProtein = TotalCalc(res.product.nutriments.proteins_100g, input.value);
      const addedCarbs = TotalCalc(res.product.nutriments.carbohydrates_100g, input.value);
      const addedFats = TotalCalc(res.product.nutriments.fat_100g, input.value);
      const addedSalts = TotalCalc(res.product.nutriments.salt_100g, input.value);
      const addedSugars = TotalCalc(res.product.nutriments.sugars_100g, input.value);

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
