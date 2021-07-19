
//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

/* let n = 10;
let simbolo = "*";
let numeroDeLinhas = "";

for (let indice = 0; indice < n; indice += 1) {
  numeroDeLinhas = numeroDeLinhas + simbolo;
};

for (let indice = 0; indice < n; indice += 1) {
  console.log(numeroDeLinhas);
}; */

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* let base = 5;
let simbolo = "*";
let numeroDeLinhas = "";

for (let indice = 0; indice <= base; indice += 1) {
  console.log(numeroDeLinhas);
  numeroDeLinhas = numeroDeLinhas + simbolo;
}; */

//3- Agora inverta o lado do triângulo

/* let base = 10;
let simbolo = '*';
let Linhas = '';
let posicao = base;

for (let indiceLinha = 0; indiceLinha <= base; indiceLinha += 1) {
  for (let indiceColuna = 0; indiceColuna <= base; indiceColuna += 1) {
    if (indiceColuna < posicao) {
    Linhas = Linhas + ' ';
  } else {
    Linhas = Linhas + simbolo;
  }
}
  console.log(Linhas);
  Linhas = '';
  posicao -= 1;
}; */

//4- Por fim, faça uma pirâmide com n asteriscos de base:

/* let n = 15;
let simbolo = '*';
let linhas = '';

let meioDaPiramide = (n + 1) / 2;
let controleEsquerdo = meioDaPiramide;
let controleDireito = meioDaPiramide;

for (let lineIndex = 0; lineIndex <= meioDaPiramide; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controleEsquerdo && columnIndex < controleDireito) {
      linhas = linhas + simbolo;
    } else {
      linhas = linhas + ' ';
    }
  }
  console.log(linhas);
  linhas = '';
  controleDireito += 1;
  controleEsquerdo -= 1
};*/

//5- Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

let n = 5;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

//6- Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

let divisors = 1;
let numberToCheck = 30;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
