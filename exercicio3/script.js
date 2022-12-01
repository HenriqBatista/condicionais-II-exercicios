//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

// console.log("teste 3")

// Reescreva os códigos do arquivo script.js utilizando o if ternário.

// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ``

// Onde :

// `condição` é uma expressão que é avaliada como `true` ou `false`.

// `expr1`, `expr2` são xpressões com valores de qualquer tipo.

let nomeImput = prompt("Me diga o seu nome");
let nome = "José";
let nomeConferido =
  nome === nomeImput ? console.log("OI,ze") : console.log(`Olá ${nomeImput}`);

let idade = +prompt("Me diga agora a sua idade");
idade >= 18
  ? console.log("Pode tirar carteira de motorista")
  : console.log("Ainda nao pode tirar a carteira");
