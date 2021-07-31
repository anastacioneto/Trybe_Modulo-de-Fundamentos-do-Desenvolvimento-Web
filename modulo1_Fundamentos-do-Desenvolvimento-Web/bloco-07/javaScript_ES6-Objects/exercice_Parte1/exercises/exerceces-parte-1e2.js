// JavaScript ES6 - Objetos:

// Parte 1
// Cria função que recebe três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função é o objeto já com a nova chave adicionada nele:

// const params = (obj, chave, valor) => {
//   let newKay = chave;
//   obj[newKay] = valor;
//   // console.table(Object.keys(obj));
//   // console.table(Object.values(obj));
//   // console.table(Object.entries(obj));
//   console.table(obj);
// }
// params(customer, 'lastName', 'Alves');

// // Object.assign(objeto, objeto que quero fazer merge com o primeiro);
// // let objTudo = Object.assign(obj1, obj2, obj3);

// Parte 2
// Cria função que exibe as habilidades do objeto student . Cada habilidade é exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade":

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`Habilidade: ${arrayOfSkills[index]}/ Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// Parte 3;
// Obtendo os valores de um objeto com o uso do Object.values através do exemplo abaixo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores.

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// Parte 4:
// O método Object.entries retorna um array com os pares chave / valor do objeto:

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// // Para ver os valores separadamente, adicione o for abaixo ao código:
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
