// Função para validar o formulário
function validarFormulario() {
    // Aqui você pode adicionar validações personalizadas se necessário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (nome && email && mensagem) {
      // Impede o envio do formulário e redireciona para a página de confirmação
      setTimeout(function() {
        window.location.href = "confirmacao.html"; // Redireciona para a página de confirmação
      }, 500); // 500ms de atraso para simular o envio da mensagem
  
      return false; // Impede o envio real do formulário
    } else {
      // Caso não tenha preenchido todos os campos, exibe um alerta
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  }
  