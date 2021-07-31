// função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread
// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['laranja', 'goiaba', 'uva'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['manga', 'limão', 'banana'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]);
// const [saudacao, funcao] = saudacoes;
// console.log(saudacao);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // console.log(comida, animal, bebida);

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
// console.log(comida, animal, bebida);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// [,,,...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
// const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// const { nationality = 'Brazilian' } = person;

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude});

// console.log(getPosition(-19.8157, -43.9542));

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
// const multiply = (number, value = 1) => {
//   return number * value;
// };

// console.log(multiply(8, 2));
