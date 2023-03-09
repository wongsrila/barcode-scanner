import { footerOneView, footerTwoView } from './partials/footer_view.js';

const render_MainView = (user, totalNutri) => {
  return /*html*/ `
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
      <header>
        <h1>Hello ${user.name}</h1>
        <div class="progress-stats__wrapper">
          <p>You can still eat <span>${
            user.calories - parseFloat(totalNutri.energy).toFixed(0)
          }</span> calories</p>
          <div class="progress-bar__wrapper">
            <div class="progress-bar"></div>
          </div>
          <div class="progress-info__wrapper">
            <p class="is--text-green">${parseFloat(totalNutri.energy).toFixed(
              0,
            )} calories eaten</p>
            <p>Goal: <span>${user.calories}</span></p>
          </div>
        </div>
        <div class="core-nutri__wrapper">
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-pink">Carbs</p>
              <p class="is--text-pink">${
                user.carbs - parseFloat(totalNutri.koolhydraten).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-carbs" class="progress-bar is--pink"></div>
            </div>
          </div>
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-blue">Protein</p>
              <p class="is--text-blue">${
                user.protein - parseFloat(totalNutri.eiwitten).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-protein" class="progress-bar is--blue"></div>
            </div>
          </div>
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-orange">fat</p>
              <p class="is--text-orange">${
                user.fats - parseFloat(totalNutri.fat).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-fat" class="progress-bar is--orange"></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <ul>
        </ul>
      </main>

      ${footerOneView()}
    </div>
  `;
};

const render_emptyStateView = () => {
  return /*html*/ `
      <li class="is--empty">
        <div class="close-btn">
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 22L16 16M16 16L10 10M16 16L22 10M16 16L10 22" stroke="#7b7b7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="16" cy="16" r="15" stroke="#7b7b7b" stroke-width="2"/>
          </svg>
        </div>
        <h2>Tip of the day</h2>
        <h3>Voeg een product toe</h3>
        <p>Zo te zien heb je nog niks toegevoegd. Voeg een product toe om meer informatie te zien!</p>
      </li>
    `;
};

const render_itemsView = (item) => {
  return /*html*/ `
      <div class="item-img__wrapper"><img src="${item.imgUrl}" /></div>
      <div class="item-info__wrapper">
        <p>${item.name} - ${item.quantity}</p>
        <p class="is--text-grey"><span class="is--text-green">${item.energy} kcal</span> - ${item.ingredients}</p>
      </div>
      <div class="item-edit_wrapper">
        <a class="more-info">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.14648 7.07361C7.31728 6.54732 7.63015 6.07896 8.05078 5.71948C8.47141 5.36001 8.9838 5.12378 9.53027 5.03708C10.0768 4.95038 10.6362 5.0164 11.1475 5.22803C11.6587 5.43966 12.1014 5.78875 12.4268 6.23633C12.7521 6.68391 12.9469 7.21256 12.9904 7.76416C13.0339 8.31576 12.9238 8.86879 12.6727 9.36182C12.4215 9.85484 12.0394 10.2685 11.5676 10.5576C11.0958 10.8467 10.5533 10.9998 10 10.9998V12.0002M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 15V15.1L9.9502 15.1002V15H10.0498Z"
              stroke="#7b7b7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    `;
};

export { render_MainView, render_emptyStateView, render_itemsView };
