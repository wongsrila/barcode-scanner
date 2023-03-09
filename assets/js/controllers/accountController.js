import renderView from '../views/acccount_view.js';

const accountGet = () => {
  const app = document.querySelector('.app');
  const user = JSON.parse(localStorage.getItem('user')) || [];

  app.innerHTML = renderView(user);

  const nameInput = document.querySelector('#user-name-input');
  const caloriesInput = document.querySelector('#user-calories-input');
  const carbsInput = document.querySelector('#user-carbs-input');
  const proteinInput = document.querySelector('#user-protein-input');
  const fatsInput = document.querySelector('#user-fats-input');
  const updateBtn = document.querySelector('#update-account-btn');
  const deleteBtn = document.querySelector('#delete-account-btn');

  deleteBtn.addEventListener('click', () => {
    deleteAccount();
  });

  updateBtn.addEventListener('click', () => {
    updateAccount();
  });

  const deleteAccount = () => {
    localStorage.removeItem('user');
    routie('');
  };

  const updateAccount = () => {
    const updatedUser = {
      name: nameInput.value,
      calories: caloriesInput.value,
      carbs: carbsInput.value,
      protein: proteinInput.value,
      fats: fatsInput.value,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Account updated');
    routie('#account');
  };
};

export default accountGet;
