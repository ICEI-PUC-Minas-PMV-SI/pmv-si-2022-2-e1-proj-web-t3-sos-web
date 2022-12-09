var usuario = JSON.parse(localStorage.getItem("usuario"));
var fileInput = document.getElementById('file-input');

function main() {
  preencheUsuarioNoMenu();
  preencherFoto();
  escutarEventos();
}

main();

function preencherFoto() {
  if(usuario?.foto) {
    carregarImagemEmTela(usuario.foto);
    salvarImagem(usuario.foto);
  }
}

function callback(base64Image) {
  carregarImagemEmTela(base64Image);
  salvarImagem(base64Image);
}

function carregarImagemEmTela(base64Image) {
  const profilePicture = document.getElementById('profile-picture');
  profilePicture.setAttribute('src', base64Image);
}

function salvarImagem(base64Image) {
  usuario.foto = base64Image;

  const usuarios = JSON.parse(localStorage.getItem('usuarios'));

  const index = usuarios.findIndex(user => {
    return user.email === usuario.email
  });

  if(index === -1) {
    console.error('Erro: não foi encontrado o usuario no localStorage');
  }

  usuarios[index].foto = base64Image;

  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function escutarEventos() {
  editar();
}

function editar() {
  DOMUtils.escutarEventoPorId('edit-email', 'click', () => {
    labelParaInput('email');
  });
  
  DOMUtils.escutarEventoPorId('edit-telephone', 'click', () => {
    labelParaInput('telephone');
  });
  
  DOMUtils.escutarEventoPorId('edit-age', 'click', () => {
    labelParaInput('age');
  });
  
  DOMUtils.escutarEventoPorId('edit-data', 'click', () => {
    labelParaInput('data');
  });
  
  DOMUtils.escutarEventoPorId('edit-chat', 'click', () => {
    labelParaInput('chat');
  });

  DOMUtils.escutarEventoPorId('file-input','change', () => {
    const reader = new FileReader();
    const selectedFile = fileInput.files[0];

    reader.onload = () => {
      callback(reader.result);
    }

    reader.readAsDataURL(selectedFile);
  })
}

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
