import renderView from '../views/createAccount_view.js';

const createAccountGet = () => {
  const app = document.querySelector('.app');

  app.innerHTML = renderView();

  const nameInput = document.querySelector('#user-name-input');
  const caloriesInput = document.querySelector('#user-calories-input');
  const carbsInput = document.querySelector('#user-carbs-input');
  const proteinInput = document.querySelector('#user-protein-input');
  const fatsInput = document.querySelector('#user-fats-input');
  const createBtn = document.querySelector('#create-account-btn');

  createBtn.addEventListener('click', () => {
    createAccount();
  });

  const createAccount = () => {
    const user = {
      name: nameInput.value,
      calories: caloriesInput.value,
      carbs: carbsInput.value,
      protein: proteinInput.value,
      fats: fatsInput.value,
    };

    localStorage.setItem('user', JSON.stringify(user));
    routie('');
  };
};

export default createAccountGet;
