let divs = [];
let titulos = ['LANCHE', 'PORCAO', 'ACAI', 'SORVETE', 'BEBIDA', 'SOBREMESA'];
let textos = ['LANCHE 123', 'PORCAO 123', 'ACAI 123', 'SORVETE 123', 'BEBIDA 123', 'SOBREMESA 123'];
let imgs = ['mulher empresaria.jpg','mulher empresaria.jpg','mulher empresaria.jpg','mulher empresaria.jpg','mulher empresaria.jpg','mulher empresaria.jpg'];

var cards_projetos = document.getElementById('cards_projetos');

for (var i =0; i <titulos.length; i++){
   var img = document.createElement('imag');
   var h3 = document.createElement('h3');
   var p = document.createElement('p');

   img.src = '.../img' + imgs[i];
   img.style.width = '5vw';

   h3.textContent = titulos[i];

   p.textContent = textos[i];

   divs[i].appendChild(img);
   divs[i].appendChild(h3);
   divs[i].appendChild(p);

}















































// let frutas2 = ["maça", "banana", "pera", "abacaxi"];
// frutas.push("melancia");
// frutas.splice(2, 0 ,"cereja");
// frutas.splice(3, 1);
// console.log(frutas);

//let numerosPares = [];
//let numeros = [5,2,7, 8, 9, 1, 3, 4, 6];
//for(var i = 0; i < numeros.length ; i++){
   // if(numeros [i]%2 === 0){
   //     numerosPares.push(numeros[i]);
   // }
//}
 // console.log (numerosPares);

 // var frutas = ['maça', 'banana', 'pera', 'abacaxi'];
//  var i = 0;
 // var contador;
 // while(frutas[i] != 'pera'){
  // contador++
  // i++;
  //}
 // console.log('Antes de pera tem' +contador+ 'frutas');