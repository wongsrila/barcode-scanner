import { footerTwoView } from './partials/footer_view.js';

const renderView = (user) => {
  return /*html*/ `
    <div class="container">
      <input
        value="${user.name}"
        class="input_value "
        type="text"
        id="user-name-input"
        placeholder="Your name"
      />
      <input
        value="${user.calories}"
        class="input_value is--text-green"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-calories-input"
        placeholder="calories goal"
      />
      <input
        value="${user.carbs}"
        class="input_value is--text-pink"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-carbs-input"
        placeholder="Carbs goal"
      />
      <input
        value="${user.protein}"
        class="input_value is--text-blue"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-protein-input"
        placeholder="Protein goal"
      />
      <input
        value="${user.fats}"
        class="input_value is--text-orange"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-fats-input"
        placeholder="Fat goal"
      />
      <button class="input_value is--green" id="update-account-btn">
        Update account
      </button>
      <button class="input_value is--pink" id="delete-account-btn">
        delete account
      </button>
      ${footerTwoView()}
    </div>
  `;
};

export default renderView;
