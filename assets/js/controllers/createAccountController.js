const createAccountGet = () => {
  const app = document.querySelector('.app');

  app.innerHTML = `
    <div class="container">
      <input class="input_value" type="text" id="user-name-input" placeholder="Your name"/>
      <input class="input_value" inputmode="numeric" pattern="[0-9]*" type="text" id="user-calories-input" placeholder="calories goal"/>
      <input class="input_value" inputmode="numeric" pattern="[0-9]*" type="text" id="user-carbs-input" placeholder="Carbs goal"/>
      <input class="input_value" inputmode="numeric" pattern="[0-9]*" type="text" id="user-protein-input" placeholder="Protein goal"/>
      <input class="input_value" inputmode="numeric" pattern="[0-9]*" type="text" id="user-fats-input" placeholder="Fat goal"/>
      <button  class="input_value" id="create-account-btn">Create account</button>
    </div>
  `;

  const nameInput = document.querySelector('#user-name-input');
  const caloriesInput = document.querySelector('#user-calories-input');
  const carbsInput = document.querySelector('#user-carbs-input');
  const proteinInput = document.querySelector('#user-protein-input');
  const fatsInput = document.querySelector('#user-fats-input');
  const createBtn = document.querySelector('#create-account-btn');

  createBtn.addEventListener('click', () => {
    // console.log(nameInput.value);
    // console.log(caloriesInput.value);
    // console.log(carbsInput.value);
    // console.log(proteinInput.value);
    // console.log(fatsInput.value);
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
