document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtendo os valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    // Validando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    // Calculando o IMC
    const imc = peso / (altura * altura);
  
    // Definindo a classificação do IMC
    let classificacao = '';
    let classe = '';
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      classe = 'normal';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Normal';
      classe = 'normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
      classe = 'sobrepeso';
    } else {
      classificacao = 'Obesidade';
      classe = 'obesidade';
    }
  
    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
      <p>Seu IMC é: ${imc.toFixed(2)}</p>
      <p class="${classe}">${classificacao}</p>
    `;
  });
  