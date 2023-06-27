document.getElementById("agendamentoForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var nomeInput = document.getElementById("nome");
    var emailInput = document.getElementById("email");
    var telefoneInput = document.getElementById("telefone");
    var dataInput = document.getElementById("data");
    var horarioInput = document.getElementById("horario");
  
    var nome = nomeInput.value.trim();
    var email = emailInput.value.trim();
    var telefone = telefoneInput.value.trim();
    var data = dataInput.value;
    var horario = horarioInput.value;
  
    if (!validarCampos(nome, email, telefone, data, horario)) {
      return;
    }
  
    var agendamento = {
      nome: nome,
      email: email,
      telefone: telefone,
      data: data,
      horario: horario
    };
  
    enviarAgendamento(agendamento);
    exibirMensagem("Agendamento concluído com sucesso!");
    limparFormulario();
  });
  
  function validarCampos(nome, email, telefone, data, horario) {
    if (nome === "" || email === "" || telefone === "" || data === "" || horario === "") {
      alert("Por favor, preencha todos os campos do formulário.");
      return false;
    }
  
    // Outras validações necessárias, se houver
  
    return true;
  }
  
  function enviarAgendamento(agendamento) {
    // Lógica para enviar o agendamento para algum destino específico
  }
  
  function exibirMensagem(mensagem) {
    var mensagemAgendamento = document.getElementById("mensagemAgendamento");
    mensagemAgendamento.textContent = mensagem;
    mensagemAgendamento.style.display = "block";
  
    setTimeout(function() {
      mensagemAgendamento.style.display = "none";
    }, 2000);
  }
  
  function limparFormulario() {
    document.getElementById("agendamentoForm").reset();
  }

  let olhoContainer = document.getElementById('txtimg-container')
  let olhoSvg = document.getElementById('txtimg')
  const isOn = false
  

  function changeEye() {
    if (isOn) {
      olhoSvg.setAttribute('src', './img/eye-on.svg')
      isOn = false
    } else {
      olhoSvg.setAttribute('src', './img/eye-off.svg')
      isOn = true
    }

  }

  olho.addEventListener('click', changeEye())

