const renderView = () => {
  return /*html*/ `
    <div class="container">
      <input
        class="input_value"
        type="text"
        id="user-name-input"
        placeholder="Your name"
      />
      <input
        class="input_value is--text-green"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-calories-input"
        placeholder="calories goal"
      />
      <input
        class="input_value is--text-pink"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-carbs-input"
        placeholder="Carbs goal"
      />
      <input
        class="input_value is--text-blue"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-protein-input"
        placeholder="Protein goal"
      />
      <input
        class="input_value is--text-orange"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
        id="user-fats-input"
        placeholder="Fat goal"
      />
      <button class="input_value is--green" id="create-account-btn">
        Create account
      </button>
    </div>
  `;
};

export default renderView;
