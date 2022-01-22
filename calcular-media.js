/* Requisitos  
Pode receber um ou mais valores numéricos
Deve retornar um unico numero
Deve gerar um erro se receber um parametro não numero
Deve retornar zero caso não receba nenhum parametro

exemplo:
calculaMedia() // retorna zero
calculaMedia(7.5, 9, 8) // retorna 7.5
calculaMedia(7.5, 'a', 8) // retorna um error
calcularMedia("2", "3") // retorna um error
*/
(function () {
  function calcularMedia() {
    let soma = 0;
    let quantidade = arguments.length;
    if (quantidade === 0) {
      return 0;
    }
    for (let i = 0; i < quantidade; i++) {
      if (typeof arguments[i] !== "number") {
        throw new Error("Parametro invalido");
      }
      soma += arguments[i];
    }
    return soma / quantidade || 0;
  }
  let media1 = calcularMedia(2, 4, 6, 8, 10);
  console.log(media1);
})();
