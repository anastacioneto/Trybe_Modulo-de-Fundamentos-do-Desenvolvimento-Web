//let numeroLoteria = [12, 45, 56, 54, 32, 60]; //vetor ou array é uma estrutura de dados que armazena valores


/* for (let index = 0; index < numeroLoteria.length; index += 1) {
    console.log(`indice: ${index} numero: ${numeroLoteria[index]}`);
}    */              //melhor forma de concatenar!!!

/* for (let numero of numeroLoteria) {
    console.log("numero:", numero); //usar a virgula para cocatenar é melhor, junta e já dá um espaço
} */

/* let randomNumber = Math.random() * 60;
let roundedNumber = Math.ceil(randomNumber);
      console.log(randomNumber);
      console.log(roundedNumber);*/



let pri = Math.ceil(Math.random() * 60);
let seg = Math.ceil(Math.random() * 60);
let ter = Math.ceil(Math.random() * 60);
let quar = Math.ceil(Math.random() * 60);
let quin = Math.ceil(Math.random() * 60);
let sex = Math.ceil(Math.random() * 60);

let numeroLoto = [pri, seg, ter. quar, quin, sex];

let priGame = [23, 56, 34, 45, 12, 44];

console.log(numeroLoto);

for(let index = 0; index <= numeroLoto.length; index += 1) {
  for(let game = 0; game < priGame; game += 1){
    if(numeroLoto[index] === priGame[game]){
        numberofHits += 1;
    }
  };
};

console.log(`indice: ${index} numero: ${numeroLoto[index]}`);
