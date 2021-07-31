const takeButton = document.querySelector('#form-button');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

takeButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const takeCheckbox = document.querySelector('#agreement');
const takeSubmitButton = document.querySelector('#submit-btn');

function statusButton() {
  if (takeCheckbox.checked === true) {
    takeSubmitButton.disabled = false;
  } else {
    takeSubmitButton.disabled = true;
  }
}
takeCheckbox.addEventListener('click', statusButton);
window.onload = statusButton;

const takeCounter = document.querySelector('#counter');
const takeTextarea = document.getElementById('textarea');

function caractereCounter() {
  const maxValue = 500;
  const actualValue = takeTextarea.value.length;
  const result = maxValue - actualValue;
  takeCounter.innerHTML = result;
}

takeTextarea.addEventListener('keyup', caractereCounter);

const form = document.querySelector('#evaluation-form');
const family = document.getElementsByName('family');
const contents = document.querySelectorAll('.subject');
const evaluate = document.getElementsByName('rate');

const inputName = document.querySelector('#input-name');
const inputLastname = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');

function getForm(element) {
  for (let i = 0; i < element.length; i += 1) {
    if (element[i].checked) {
      return element[i].value;
    }
  }
}

function contentsForm() {
  let contentsSelected = '';
  for (let i = 0; i < contents.length; i += 1) {
    if (contents[i].checked) {
      contentsSelected += `${contents[i].value}, `;
    }
  }
  return contentsSelected;
}

// function infoForm() {
//   const familySelected = getForm(family);
//   const contentsSelected = contentsForm();
//   const evaluateSelected = getForm(evaluate);
//   form.innerHTML = '';
//   form.innerHTML += `Nome: ${inputName.value} ${inputLastname.value} <br>`;
//   form.innerHTML += `Email: ${inputEmail.value} <br>`;
//   form.innerHTML += `Casa: ${house.value} <br>`;
//   form.innerHTML += `Família: ${familySelected} <br>`;
//   form.innerHTML += `Matérias: ${contentsSelected} <br>`;
//   form.innerHTML += `Avaliação: ${evaluateSelected} <br>`;
//   form.innerHTML += `Observações: ${takeTextarea.value} <br>`;
// }
// takeSubmitButton.addEventListener('click', infoForm);

function infoForm() {
  const familySelected = getForm(family);
  const contentsSelected = contentsForm();
  const evaluateSelected = getForm(evaluate);
  form.innerText = '';
  form.innerText += `Nome: ${inputName.value} ${inputLastname.value}

  Email: ${inputEmail.value}

  Casa: ${house.value}

  Família: ${familySelected}

  Matérias: ${contentsSelected}

  Avaliação: ${evaluateSelected}

  Observações: ${takeTextarea.value}`;
}
takeSubmitButton.addEventListener('click', infoForm);
