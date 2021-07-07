const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'.
const selectDiv = document.querySelector('.container');

function handleChangeTech(event) {
  const techElement = event.target;
  for (let i = 0; i < selectDiv.childElementCount; i += 1) {
    selectDiv.children[i].className = 'nullClass';
  }
  techElement.className = 'tech';
}
selectDiv.addEventListener('click', handleChangeTech);

///////////////////////////
// function handleChangeTech(event) {
//   const techElement = document.querySelector('.tech');
//   techElement.classList.remove('tech');
//   event.target.classList.add('tech');
//   input.value = '';
// }

// firstDiv.addEventListener('click', handleChangeTech);
// secondDiv.addEventListener('click', handleChangeTech);
// thirdDiv.addEventListener('click', handleChangeTech);
//////////////

// function classTech(event) {
// for (let index = 0; index < bodyDiv.length; index += 1) {
// let bodyDiv = document.body.querySelector('div').children
// bodyDiv[index].classList.remove('tech');
// }
// event.target.classList.add('tech');
// }
// firstDiv.addEventListener('click', classTech)
// secondDiv.addEventListener('click', classTech)
// thirdDiv.addEventListener('click', classTech)

// Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// function changeTechText (event) {
// document.querySelector('.tech').innerText = event.target.value;
// }
// input.addEventListener('input', changeTechText);

// Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
function addLink() {
  return myWebpage.innerHTML = '<a href="https://www.w3schools.com/jsref/dom_obj_event.asp">Meu top 3 do Spotrybefy</a>';
}
addLink();

// myWebpage.addEventListener('dblclick', function() {
//   window.open('https://www.w3schools.com/jsref/dom_obj_event.asp');
// });

// Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
