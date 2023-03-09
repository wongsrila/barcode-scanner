import renderView from '../views/editItem_view.js';

const editGet = (id) => {
  const app = document.querySelector('.app');
  let foundItem;

  // Haalt alle items uit de localStorage
  const storageItems = JSON.parse(localStorage.getItem('items')) || [];

  // Zoekt naar de barcode in de localStorage
  if (storageItems.some((item) => item.id == id)) {
    foundItem = storageItems.find((item) => item.id == id);
  } else {
    console.log('kan het item niet vinden...');
  }

  const resultMarkup = renderView(foundItem);

  app.innerHTML = resultMarkup;

  // Functie om een item te verwijderen
  const removeBtn = document.querySelector('.remove-btn');

  removeBtn.addEventListener('click', () => {
    let index = storageItems.findIndex((obj) => obj.id == id);
    const foundItems = JSON.parse(localStorage.getItem('items')) || [];
    foundItems.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(foundItems));
    routie('');
  });
};

export default editGet;
