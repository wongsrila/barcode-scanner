import {
  render_MainView,
  render_emptyStateView,
  render_itemsView,
} from '../views/index_view.js';

const indexGet = () => {
  const app = document.querySelector('.app');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const user = JSON.parse(localStorage.getItem('user')) || [];
  let totalNutri = {};

  // console.log(user.length);
  if (user.length <= 0) {
    routie('create-account');
  }

  if (items.length <= 0) {
    // Als er geen gegevens zijn, zet het dan op 0.
    totalNutri = {
      energy: 0,
      eiwitten: 0,
      koolhydraten: 0,
      fat: 0,
    };
  } else {
    // Als er wel gegevens zijn, laat die dan zien
    totalNutri = items.reduce(function (previousValue, currentValue) {
      return {
        energy: +previousValue.energy + +currentValue.energy,
        koolhydraten: +previousValue.koolhydraten + +currentValue.koolhydraten,
        eiwitten: +previousValue.eiwitten + +currentValue.eiwitten,
        fat: +previousValue.fat + +currentValue.fat,
      };
    });
  }

  app.innerHTML = render_MainView(user, totalNutri);

  // Bereken de progress bar
  const energyResult =
    (100 / user.calories) * parseFloat(totalNutri.energy).toFixed(1);
  const eiwittenResult =
    (100 / user.protein) * parseFloat(totalNutri.eiwitten).toFixed(1);
  const koolhydratenResult =
    (100 / user.carbs) * parseFloat(totalNutri.koolhydraten).toFixed(1);
  const fatResult = (100 / user.fats) * parseFloat(totalNutri.fat).toFixed(1);

  document.querySelector('.progress-bar').style.width = `${energyResult}%`;
  document.querySelector('#nutri-carbs').style.width = `${koolhydratenResult}%`;
  document.querySelector('#nutri-protein').style.width = `${eiwittenResult}%`;
  document.querySelector('#nutri-fat').style.width = `${fatResult}%`;

  // add items to a table that are saved in the localstorage
  const ul = document.querySelector('ul');

  if (items.length <= 0) {
    ul.innerHTML = render_emptyStateView();
  }

  items.forEach((item) => {
    let li = document.createElement('li');
    li.innerHTML += render_itemsView(item);

    li.addEventListener('click', () => {
      routie(`edit/${item.id}`);
    });

    ul.appendChild(li);
  });
};

export default indexGet;
