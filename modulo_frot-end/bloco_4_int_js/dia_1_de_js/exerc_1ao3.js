// 1º exercício:
let a = 15;
let b = 36;
let c = 28;

console.log("soma:" + (a+b));
console.log("subtracao:" + (a - b));
console.log("multiplicacao:" + (a - b));
console.log("divisao:" + (a - b));
console.log("modulo:" + (a - b));

// 2º exercicio

if (a>b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'")
}

// 3º exercicio
if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};
