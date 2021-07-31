/* let numero= 5;

for (let index = 0; index <= 10; index = index + 1) {
  console.log( (numero) + " x " + (index) + " = " + (numero * index) );
}


let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Ferrari"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log("nome:" + nome);
} */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
*/
//exercicio 1
//////////////////////////////////////////////////////////////
/*
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
console.log(resultado);
*/
//exercicio 2
////////////////////////////////////////////////////////////////
/*
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;
console.log(average);
*/
//exercicio 3: usando o for como estrutura de repetição, da mesma forma que no exercicio 2, somamos todos os elementos do array numbers e depois usamos a soma contida na variavel sum e dividimos pelo cumprimento do array e temos a nedia aritmetica (278 soma de todos os elementos do array dividido por 10 que é numero de elementos no array, fica 27,8).

///////////////////////////////////////

/*
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;
console.log(average);

if (average > 20) {
  console.log("o valor é maior que 20");
} else {
  console.log("o valor é memor ou igual a 20");
}
*/
//exercicio 4: fazer a condição se, se o resultado do exercicio 3 fosse menor ou igual a 20 o console.log deveria imprimir isso, mas como o resultado é maio imprimiu 'valor maior que 20'.
/////////////////////////////////////////////////////////////////////////////
/*
let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if  (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
}

console.log(maiorValor);
*/
//exercico 5: com esse codigo, serao percorridos todos os elementos do array a partir do indice 0 e retornara qual é o maior dentre eles.
///////////////////////////////////////////////////////////////////////////////////
/*
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    resultado += 1;
  }
}
if (resultado === 0) {
  console.log("nenhum valor impar encontrado");
} else {
  console.log(resultado);
}
*/
//exercicio 6: este codigo encontra os impares, neste caso retorna o numero 6 que é o numero de elementos que são impares.
/////////////////////////////////////////////////////////////////

/*
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if  (numbers[index] < menorValor) {
    menorValor = numbers[index]
  }
}

console.log(menorValor);
*/
//exercicio 7: achar o menor valor dentre os elementos do array
//////////////////////////////////////////////////////////////////*

/*
let numeros = [];
for (let indice = 1; indice <= 25; indice += 1) {
  numeros.push(indice);
}

console.log(numeros);   // exercicio 8: esse codigo faz um ciclo com o limite até 25, e cada vez que o loop é feito acrescenta um número ao array vazio por meio do .push, assim começõu em 1 e foi até 25.

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
}   //exercicio 9: pegar os elementos criadoa para o array do exercicio 8 e dividi-los por 2 e imprimir o resultado.
*/
///////////////////////////////////////////////
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);  //Ordene o array numbers em ordem crescente e imprima seus valores
*/
////////////////////////////////////////////
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers); //Ordene o array numbers em ordem decrescente e imprima seus valore
*/
///////////////////////////////////////////////////////


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray); //Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .

