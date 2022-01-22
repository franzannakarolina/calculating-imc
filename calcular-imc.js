/*
Requisitos
IMC = peso / altura²
Deve retornar um unico numero
Deve gerar um erro se receber um parametro não numero
Deve retornar zero caso não receba nenhum parametro

Criar uma função para classificar IMC
Requisitos
Deve receber um numero o IMC
Deve retornar uma string
Deve gerar um erro se receber um parametro não numero
Deve retornar erro caso não receba nenhum parametro
*/
function calcularIMC(peso, altura) {
  if (peso === undefined || altura === undefined) {
    throw new Error("Parametros invalidos");
  }
  return peso / (altura * altura);
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
console.log(imc);
console.log(classificaIMC(imc));
