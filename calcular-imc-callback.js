/*
Requisitos
IMC = peso / altura²
Deve receber peso, altura e uma função de callback
opcional
Se não receber callback deve retornar o imc
Se receber callback, deve retornar o retorno do callback

exemplos
calculaImc() // 0
calcularIMC(60, 1.65) // 22.03856749
calcularIMC(60, 1.65, classificaIMC) // "Abaixo do peso"
*/
function calcularIMC(peso, altura, callback) {
  if (peso === undefined || altura === undefined) {
    throw new Error("Parametros invalidos");
  }
  let imc = peso / (altura * altura);
  if (typeof callback === "function") {
    return callback(imc);
  }
  return imc;
}

function classificaIMC(imc) {
  if (imc === undefined) {
    throw new Error("Parametros invalidos");
  }
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 35) {
    return "Obesidade grau I";
  } else if (imc < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
}

let imc = calcularIMC(78, 1.58);
let imc2 = calcularIMC(60, 1.65, classificaIMC);
console.log(imc);
console.log(imc2);
