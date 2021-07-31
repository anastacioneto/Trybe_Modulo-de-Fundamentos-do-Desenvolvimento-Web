/*
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.' );

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
*/
/*
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

let saudacao = 'Olá ';

for (let key in names) {
  console.log(saudacao +' '+ names[key] + '!');
}
*/
/*
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key, car[key])
};
*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda', info.personagem);

info.recorrente = 'Sim';

//console.log(info);

/* for (let key in info) {
  console.log(info[key])
}
*/
/*
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let mesclar in info) {
  if (
    info[mesclar] === info.recorrente &&
    info[mesclar] === 'Sim' &&
    info2[mesclar] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[mesclar], 'e', info2[mesclar]);
  }
};
*/

// Parte 2: FUNÇÕES
//exercicio 1: Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalidrome(palavra) {
  let arrayDeLetras = palavra.divide('');
  let sePalidrome = true;
  for (let indice in arrayDeLetras) {
    if (arrayDeLetras[indice] != palavra[(palavra.length - 1) - indice]) {
      sePalidrome = false;
    }
  }
  return sePalidrome;
}

function verificaPalidrome(string) {
  let reverse = string.divide('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalidrome('ovo'));

//exercicio 2: Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//exercicio 3: Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//exercicio 4: Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//exercicio 5: Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//exercicio 6: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

//exercicio 7: Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
