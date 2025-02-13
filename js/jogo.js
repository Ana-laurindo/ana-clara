// Gerar número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function verificar() {
  // Pegar o valor digitado pelo usuário
  let userInput = document.getElementById('userInput').value;
  let resultado = document.getElementById('resultado');
  let dica = document.getElementById('dica');

  // Verificar se o valor é válido
  if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
    resultado.textContent = "Por favor, digite um número entre 1 e 100!";
    return;
  }

  // Comparar o número digitado com o número aleatório
  if (userInput == numeroAleatorio) {
    resultado.textContent = "Parabéns! Você acertou!";
    dica.textContent = "";
  } else if (userInput > numeroAleatorio) {
    resultado.textContent = "Errado! O número é menor.";
    dica.textContent = "Tente um número menor.";
  } else {
    resultado.textContent = "Errado! O número é maior.";
    dica.textContent = "Tente um número maior.";
  }

  // Limpar o campo de entrada
  document.getElementById('userInput').value = "";
}
