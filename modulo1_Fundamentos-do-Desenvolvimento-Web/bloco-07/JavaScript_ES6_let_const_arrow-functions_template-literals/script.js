// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//       console.log(`${ifScope} o que estou fazendo aqui ? :O`);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//   }
// }
// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   // oddsAndEvens.sort((a, b) => {
//   //   if (a > b) return 1;
//   //   if (a < b) return -1;
//   //   return 0;
//   // });

// oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// const factorial = (number) => {
//   let result = 1;
//   for (let n = 2; n <= number; n += 1) {
//     result *= n;
//   }
//   return result;
// }
// console.log(factorial(6));

// 2
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// 2
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}
console.log(buildSkillsPhrase("Lucas"));
