let frutas = ["maça", "banana", "pera", "abacaxi"];
frutas.push("melancia");
frutas.splice(2, 0 ,"cereja");
frutas.splice(3, 1);
console.log(frutas);

let numerosPares = [];
let numeros = [5,2,7, 8, 9, 1, 3, 4, 6];
for(var i = 0; i < numeros.length ; i++){
    if(numeros [i]%2 === 0){
        numerosPares.push(numeros[i]);
    }
}
  console.log (numerosPares);