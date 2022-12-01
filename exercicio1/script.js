console.log("teste 1")


// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
// Faça isso:
    
// 1. Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```
// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```
let numero = Number(prompt("Insira um numero"));
if (numero % 2 === 0) {
   if (numero % 3 === 0) {
    console.log("Esse numero é divisivel por 2 ou por 3");
      }
}


// if (numero %2 ===0 || numero %3 ===0 ){
//     console.log("Esse numero é divisivel por 2 ou por 3")
// }

//grupo 7