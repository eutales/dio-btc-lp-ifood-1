//Desafio de projeto - Classificador de Nível do Herói
// Antes, execute os comandos no console do VSCODE:
// npm init -y                 Para iniciar um projeto node.js com as configurações default.
// npm i prompt-sync           Para instalar a biblioteca para leitura de dados no console.

// Criando uma constante para realizar leitura de dados pelo teclado no console.

const teclado = require("prompt-sync")();

// Declaração de variáveis

let heroName;
let heroXp;

//Estrutura de repetição "while", enquanto o nome do herói for diferente de sair o código será executado.
while (heroName !== "sair") {

  //Pergunta o nome do herói na tela e faz com que a variável heroName receba uma entrada de dados pelo teclado no console.
  console.log("Digite o nome do Herói ou sair para encerrar o programa: ");
  heroName = teclado();

  // Verifica se o nome do herói é igual a sair, caso verdadeiro, encerra a estrutura de repetição WHILE através do comando break.
  if (heroName === "sair") {
    break;
  } else {
    
    // O nome sendo diferente de sair, vamos fazer a leitura da experiência do herói.
    console.log("Digite a experiência do Herói " + heroName + ":");

    // teclado() retorna um valor de texto, precisamos converter para um valor numérico para executar as validações da experiência e depois
    // atribuir o valor já convertido para a variável heroXp
    heroXp = parseInt(teclado());

    //Agora vamos verificar a classificação do herói de acordo com o nível informado utilizando a estrutura condicional IF/IF ELSE.
    // Se a experiência do herói for menor do que 1000, então
    if (heroXp < 1000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Ferro"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.

      // Caso a experiência for maior ou igual a 1000, precisamos verficar se ela é menor ou igual a 2000 para o nível Bronze.
      // OBS: Não precisamos testar se ela é maior ou igual a 1000 novamente, pois o laço abaixo só será executado caso XP maior que 1000
      // Não precisamos do if (heroXp > 1000 && heroXp <= 2000)
    } else if (heroXp <= 2000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Bronze"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.

      //Seguimos a mesma lógica para os demais intervalos.
    } else if (heroXp <= 5000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Prata"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.
    } else if (heroXp <= 7000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Ouro"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.
    } else if (heroXp <= 8000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Platina"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.
    } else if (heroXp <= 9000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Ascendente"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.
    } else if (heroXp <= 10000) {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Imortal"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.

      // Na última classificação, XP acima de 100001, nem precisamos testar pois é a única condição que não foi testada.
    } else {
      console.log(
        "O herói " +
          heroName +
          " possui " +
          heroXp +
          " pontos de experiência e está no nível: Radiante"
      );
      console.log("");
      console.log("Aperte enter para continuar");
      teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
      console.clear(); //limpa o console.
    }
  }
}
