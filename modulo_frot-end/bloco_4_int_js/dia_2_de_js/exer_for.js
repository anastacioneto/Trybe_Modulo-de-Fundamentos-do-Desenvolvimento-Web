let numero= 5;

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
}
