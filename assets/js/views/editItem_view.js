import { footerTwoView } from './partials/footer_view.js';

const renderView = (foundItem) => {
  return /*html*/ `
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

      ${footerTwoView()}
      <!-- HOME PAGINA -->
    </div>
  `;
};

export default renderView;
