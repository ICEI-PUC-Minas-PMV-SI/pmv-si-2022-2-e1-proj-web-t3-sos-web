var usuario = JSON.parse(localStorage.getItem("usuario"))

function labelParaInput(key) {
  document.getElementById(`${key}-info`).remove();
  var input = document.createElement("input");
  input.setAttribute('class', 'input-base');
  document.getElementById(`${key}-container`).appendChild(input);
  document.getElementById(`edit-${key}`).remove();
  var botaoSalvar = document.createElement("button");
  botaoSalvar.innerText = 'Salvar';
  botaoSalvar.setAttribute('class', 'button-base');
  botaoSalvar.setAttribute('class', 'bg-main-color');
  botaoSalvar.setAttribute('style', 'padding: 0.3rem');
  document.getElementById(`${key}-container`).appendChild(botaoSalvar);
}

function escutarEventos() {
  editar();
}

function editar() {
  DOMUtils.escutarEventoPorId('edit-email', 'click', () => {
    labelParaInput('email');
  })
  
  DOMUtils.escutarEventoPorId('edit-telephone', 'click', () => {
    labelParaInput('telephone');
  })
  
  DOMUtils.escutarEventoPorId('edit-age', 'click', () => {
    labelParaInput('age');
  })
  
  DOMUtils.escutarEventoPorId('edit-data', 'click', () => {
    labelParaInput('data');
  })
  
  DOMUtils.escutarEventoPorId('edit-chat', 'click', () => {
    labelParaInput('chat');
  })
}

function main() {
  escutarEventos();
}

main();