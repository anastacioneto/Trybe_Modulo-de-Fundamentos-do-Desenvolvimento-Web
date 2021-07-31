// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }
//   return a + b;
// }
// const expected = sum(4, "5");
// const expected = sum(4, 5);
// const expected = sum(0, 0);
// assert.strictEqual(expected, 9);
// assert.strictEqual(expected, 9);
/////////////////////////////////////////////////////////

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// assert.strictEqual(typeof myRemove, 'function');

// const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4]);

// const expected = myRemove([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

// const myList = [5, 6, 7, 8];
// myRemove(myList, 5);
// const expected = myList;
// assert.deepStrictEqual(expected, [5, 6, 7, 8]);

// const expected = myRemove([1, 2, 3, 4], 5);
// assert.deepStrictEqual(expected, [1, 2, 3, 4]);
/////////////////////////////////////////////////////////////////

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);


