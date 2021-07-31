// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const newEmployees = () => {
//   const employees = {
//     id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// o toLowerCase() irá passar os caracteres todos para letra minuscula;
// o split() irá separar o nome do sobre nome, irá separar todas as palavras ['pedro', 'guerra'] dessa forma;
// depois que o split separou os nomes é necessário junta-los novamente mas que estejam separados por um underline, para isso a função join() é necessária.

// const employeeGenerator = (fullname) => {
//   const email = fullname.toLowerCase().split(' ').join('_');
//   return {fullname, email: `${email}@trybe.com`};
// }
// console.table(newEmployees(employeeGenerator));
///////////////////////////////////////////////////////////////////

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// Se você por acaso não comprendeu a sintaxe com ? e : não se preocupe. Este tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if , else onde ? é equivalente ao if e : ao else . Desta forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ? se sim retorne 'Lucky day, you won!' , se não : , retorne 'Try Again!' .

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const repeat = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} corretas`;
// };

// console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
//   if (rAnswer === uAnswer) {
//     return 1;
//   } if (uAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }));

// BÔNUS
// pATE 1
// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// const dragonAttack = (dragon) => {
//   const minDmg = 15;
//   const { strength } = dragon;
//   const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
//   return dragonDmg;
// };

// 2 - Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// const warriorAttack = (warrior) => {
//   const { weaponDmg } = warrior;
//   const minDmg = warrior.strength;
//   const maxDmg = minDmg * weaponDmg;
//   const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
//   return warriorDamage;
// };

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const minDmg = mage.intelligence;
//   const maxDmg = minDmg * 2;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };

//   if (mageMana > 15) {
//     const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
//     turnStats.manaSpent = 15;
//     turnStats.damageDealt = mageDamage;
//     return turnStats;
//   }
//   return turnStats;
// };

// Parte 2
// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack();
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack();
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack();
//     const mageDamage = mageTurnStats.damageDealt;
//     const { manaSpent } = mageTurnStats;
//     mage.damage = mageDamage;
//     mage.mana -= manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack();
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack();
//     const mageDamage = mageTurnStats.damageDealt;
//     const { manaSpent } = mageTurnStats;
//     mage.damage = mageDamage;
//     mage.mana -= manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
//   monsterTurn: (monsterAttack) => {
//     const dragonDamage = monsterAttack();
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.monsterTurn(dragonAttack);

// 4 - Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack();
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack();
//     const mageDamage = mageTurnStats.damageDealt;
//     const { manaSpent } = mageTurnStats;
//     mage.damage = mageDamage;
//     mage.mana -= manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
//   monsterTurn: (monsterAttack) => {
//     const dragonDamage = monsterAttack();
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
//   turnResults: () => battleMembers,
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.monsterTurn(dragonAttack);
// console.log(gameActions.turnResults());
