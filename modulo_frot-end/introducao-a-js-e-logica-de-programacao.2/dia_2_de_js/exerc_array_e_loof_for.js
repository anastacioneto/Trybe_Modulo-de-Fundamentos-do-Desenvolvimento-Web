let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'tomar banho', 'dormir', 'acordar'];

console.log(tasksList.length);
// 3

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao array, é posta ao final do array por causa do '.push()' mas se usar o '.unshift?() adiciona ao início
console.log(tasksList);

let searchForFirstTask = tasksList[1];
console.log(searchForFirstTask);
// Tomar café

tasksList.pop();  // remove o últomo item da lista
console.log(tasksList);

tasksList.shift();  // remove o primeiro item da lista
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');    // indexOf() , usado para procurar o índice de um item no Array
console.log(indexOfTask);

let searchForLastTask = tasksList[tasksList.length -2];
console.log(searchForLastTask);
// Brincar com o cachorro


for (let index = 0; index < tasksList.length; index ++) {    //laço de repetição
  console.log(tasksList[index]);
}

for (let index = 0; index < tasksList.length; index = index + 1) {
  let mensagem = "Cronograma " + tasksList[index] + " hiurru";
  console.log(mensagem);
}
