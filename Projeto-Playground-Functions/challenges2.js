// Desafio 10
function techList(array, name) {
  // seu código aqui
let resultado = null;
let result = [];
let listaTech = ["CSS", "HTML", "JavaScript", "Jest", "React"]

  if(array == 0){
    result = 'Vazio!';
  } else {
    for(let possicao of listaTech){
      resultado = {
        tech: possicao,
        name: name
      }
      result.push(resultado);
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
let resultado = null;
let cont = 0;

resultado = '('+array[0]+array[1]+')'+' '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];  
  if (array.length !== 11){
    resultado = "Array com tamanho incorreto.";
  }else { 
    for(let possicao of array){
      if (cont >= 3 || possicao < 0 || possicao > 9){
        resultado = "não é possível gerar um número de telefone com esses valores";
      }
      cont = 0;
      for(let possicao2 of array){
         if (possicao === possicao2){
           cont += 1;
         }
      }
    }
  }
 return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
let resultado = null;
let restoA = null;
let restoB = null;
let restoC = null;

  if((lineA - lineB) < 0){
    restoC = (lineA - lineB) * -1;
  }else {
    restoC = (lineA - lineB);
  }
  if((lineB - lineC) < 0){
    restoA = (lineB - lineC) * -1;
  }else {
    restoA = (lineB - lineC);
  }
  if((lineA - lineC) < 0){
    restoB = (lineA - lineC) * -1;
  }else {
    restoB = (lineA - lineC);
  }

  if (lineA < (lineB + lineC) && lineA > Math.abs(restoA)){
    resultado = true;
  }else {
    resultado = false;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(restoB)){
    resultado = true;
  }else {
    resultado = false;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(restoC)){
    resultado = true;
  }else {
    resultado = false;
  }
return resultado;
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let stringInteiros = frase.match(/\d+/g);
  let quantidadeBebidas = 0;
  let resultado = null;
  
  for(let possicao of stringInteiros){
    quantidadeBebidas += parseInt(possicao);
  }
  if(quantidadeBebidas == 1){
    resultado = quantidadeBebidas + ' copo de água';
  }else {
    resultado = quantidadeBebidas + ' copos de água';
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
