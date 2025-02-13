function calcular(operacao) {
    // Pega os valores dos campos de entrada
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    // Verifica se os valores inseridos são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerText = "Por favor, insira números válidos!";
        return;
    }

    // Realiza a operação escolhida
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                resultado = "Erro: Divisão por zero!";
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = "Operação inválida!";
    }

    // Exibe o resultado
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}
