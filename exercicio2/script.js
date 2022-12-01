// let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

// console.log("teste 2")

// Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. No arquivo `script.js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

// -> Relembrando o enunciado.

// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.

// let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase()

// function pais(nacionalidade){
// const origem = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
//     if(nacionalidade === origem[0]){
//         console.log("Pelo oque você me disse, voce é Brasileiro")
//     }else if (nacionalidade === origem[1]){
//         console.log("Olha só, temos um Hermano aqui! Pelé é maior que Maradona")
//     }else if(nacionalidade === origem[2]){
//         console.log("Hmm, temos um uruguaio por aqui, País de otimos vinhos")
//     }else if(nacionalidade === origem[3]){
//         console.log("Chi, Chi, Chi, Le, Le, Le, Viva Chile!!")
//     }else if(nacionalidade === origem[4]){
//         console.log("Uau, um colombiano! Vindo das belas terras entre os Andes e a nossa belissima Floresta Amazônica")
//     }else {
//         console.log("Nacionalidade não encontrada")
//     }
// }
// pais(nacionalidade)

let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase();

function pais(nacionalidade) {
  const origem = [
    "brasileira",
    "argentina",
    "uruguaia",
    "chilena",
    "colombiana",
  ];
  switch (nacionalidade) {
    case origem[0]:
      console.log("Pelo oque você me disse, voce é Brasileiro");
      break;
    case origem[1]:
      console.log("Olha só, temos um Hermano aqui! Pelé é maior que Maradona");
      break;
    case origem[2]:
      console.log("Hmm, temos um uruguaio por aqui, País de otimos vinhos");
      break;
    case origem[3]:
      console.log("Chi, Chi, Chi, Le, Le, Le, Viva Chile!!");
      break;
    case origem[4]:
      console.log(
        "Uau, um colombiano! Vindo das belas terras entre os Andes e a nossa belissima Floresta Amazônica"
      );
      break;
    default:
      console.log("Nacionalidade não encontrada");
    break
  }
}
pais(nacionalidade);
