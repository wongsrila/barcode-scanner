const app = document.querySelector('.app');

const resultsGet = () => {
  let dataKeys = [];
  let lastElement;

  for (let key in Object.keys(localStorage)) {
    dataKeys.push(+key + 1);
    lastElement = dataKeys[dataKeys.length - 1];
  }

  const data = localStorage.getItem(lastElement);

  const markup = `
    <h1>result goes here</h1>
  `;

  app.innerHTML = markup;

  fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    .then((res) => res.json())
    .then((res) => markupData(res));

  const markupData = (res) => {
    const resultMarkup = document.querySelector('h1');
    const markup = `<h1>${res.product.product_name}</h1>`;

    resultMarkup.innerHTML = markup;
  };
};

export default resultsGet;
