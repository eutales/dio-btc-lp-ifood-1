// Criando uma constante para realizar leitura de dados pelo teclado no console.
const teclado = require("prompt-sync")();

// Declaração de variáveis
let heroName;
let heroXp;

//Estrutura de repetição "while", representando os ciclos de execução do programa.
while (true) {

  // Apaga o valor de heroXp, para depois do primeiro ciclo (importante)
  heroXp = undefined 
  
  //Pergunta o nome do herói na tela e faz com que a variável heroName receba 
  //uma entrada de dados pelo teclado no console.
  console.log("Digite o nome do Herói ou 'sair' para encerrar o programa: ");
  heroName = teclado();

  // Verifica se o nome do herói é igual a sair
  // encerra a estrutura de repetição WHILE através do comando process.exit().
  if (heroName === "sair") {
    // Valor zero indica que o programa encerrou sem erros
    process.exit(0);
  }
    
  // O nome sendo diferente de sair, vamos fazer a leitura da experiência do herói.
  
  // Enquanto o usuário não informar um número inteiro
  while (!Number.isInteger(heroXp)) {
    console.log("Digite a experiência do Herói " + heroName + ":");
    // teclado() retorna um valor de texto, precisamos converter para um valor 
    // numérico para executar as validações da experiência e depois
    // atribuir o valor já convertido para a variável heroXp
    heroXp = parseInt(teclado());
  }

  //Agora vamos verificar a classificação do herói de acordo com o nível 
  //informado utilizando a estrutura condicional IF/IF ELSE.
  // Se a experiência do herói for menor do que 1000, então
  if (heroXp < 1000) {
    console.log(
      "O herói " +
      heroName +
      " possui " +
      heroXp +
      " pontos de experiência e está no nível: Ferro"
    );

    // Caso a experiência for maior ou igual a 1000, precisamos verficar se ela 
    // é menor ou igual a 2000 para o nível Bronze.
    // OBS: Não precisamos testar se ela é maior ou igual a 1000 novamente, 
    // pois o laço abaixo só será executado caso XP maior que 1000
    // Não precisamos do if (heroXp > 1000 && heroXp <= 2000)
    } else if (heroXp <= 2000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Bronze"
      );
      //Seguimos a mesma lógica para os demais intervalos.
    } else if (heroXp <= 5000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Prata"
      );
    } else if (heroXp <= 7000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Ouro"
      );
    } else if (heroXp <= 8000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Platina"
      );
    } else if (heroXp <= 9000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Ascendente"
      );
    } else if (heroXp <= 10000) {
      console.log(
        "O herói " +
        heroName +
        " possui " +
        heroXp +
        " pontos de experiência e está no nível: Imortal"
      );
    // Na última classificação, XP acima de 100001, nem precisamos testar pois é a única condição que não foi testada.
  } else {
    console.log(
      "O herói " +
      heroName +
      " possui " +
      heroXp +
      " pontos de experiência e está no nível: Radiante"
    );
  }

  console.log("\nAperte enter para continuar");
  teclado(); //Faz uma leitura falsa, apenas para o console esperando o usuário digitar enter.
  console.clear(); //limpa o console.  
}
