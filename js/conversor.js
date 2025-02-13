function converter() {
    let valor = parseFloat(document.getElementById('valor').value);
    let unidade = document.getElementById('unidade').value;
    let resultado;

    // Verifica se o valor é um número válido
    if (Number.isNaN(valor)) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor válido!";
        return;
    }

    // Realiza a conversão com base na opção escolhida
    switch (unidade) {
        case 'celsius-fahrenheit':
            resultado = (valor * 9/5) + 32; // Conversão de Celsius para Fahrenheit
            document.getElementById('resultado').innerText = `${valor}°C é igual a ${resultado}°F`;
            break;
        case 'metros-centimetros':
            resultado = valor * 100; // Conversão de metros para centímetros
            document.getElementById('resultado').innerText = `${valor} metros é igual a ${resultado} centímetros`;
            break;
        case 'quilos-libras':
            resultado = valor * 2.20462; // Conversão de quilos para libras
            document.getElementById('resultado').innerText = `${valor} kg é igual a ${resultado} libras`;
            break;
        default:
            document.getElementById('resultado').innerText = "Operação inválida!";
    }
}
