var usuario = JSON.parse(localStorage.getItem("usuario"));
var denuncias = JSON.parse(localStorage.getItem("denuncias"));
var fileInput = document.getElementById('file-input');

function main() {
  deslogaSeNaoLogado();
  preencheUsuarioNoMenu();
  preencherFoto();
  preencherDadosUsuario();
  escutarEventos();
}

main();

function preencherDadosUsuario() {
  DOMUtils.adicionarTexto('#name-info', usuario['nome']);
  DOMUtils.adicionarTexto('#email-info', usuario['email']);
  DOMUtils.adicionarTexto('#telephone-info', usuario['telefone']);

  preencherIdade(usuario['nascimento']);
  preencherDenuncias();
  preencherComentarios();
}

function preencherDenuncias() {
  const denunciasDoUsuario = denuncias.filter(
    (denuncia) => denuncia.responsavel === usuarioLogado.usuario
  );

  const qtdDenuncias = denunciasDoUsuario.length;
  DOMUtils.adicionarTexto('#data-info', `${qtdDenuncias} denúncias`);
}

function preencherComentarios() {
  let totalComentarios = 0;
  for(let denuncia of denuncias) {
    const qtdComentarios = denuncia.comentarios.filter(
      (denuncia) => denuncia.usuario === usuarioLogado.usuario
    ).length;
    totalComentarios += qtdComentarios;
  }

  DOMUtils.adicionarTexto('#chat-info', `${totalComentarios} comentários`);
}

function preencherIdade(date) {
  const age = transformarDataParaIdade(date);

  DOMUtils.adicionarTexto('#age-info', `${age} anos`);
}

function transformarDataParaIdade(date) {
  const birthday = date;
  const birthdayDate = converterParaData(birthday);
  const today = new Date();
  const ageInMs = Math.abs(today - birthdayDate);
  const age = Math.floor(ageInMs/31536000000);
  return age;
}

function converterParaData(dateString) {
  let dateArray = dateString.split("/");
  let date = new Date(dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]);
  return date;     
}

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

  preencherFotoNoMenu(usuario);
}

function escutarEventos() {
  editar();
}

function editar() {
  DOMUtils.escutarEventoPorId('edit-email', 'click', () => {
    mostrarInput('email');
  });
  
  DOMUtils.escutarEventoPorId('edit-telephone', 'click', () => {
    mostrarInput('telephone');
  });
  
  DOMUtils.escutarEventoPorId('edit-age', 'click', () => {
    mostrarInput('age');
  });

  DOMUtils.escutarEventoPorId('edit-name', 'click', () => {
    mostrarInput('name');
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

function mostrarInput(key) {
  const info = document.getElementById(`${key}-info`);
  const infoText = info.innerText;
  const editBtn = document.getElementById(`edit-${key}`);
  info.setAttribute('style', 'display: none;');
  editBtn.setAttribute('style', 'display: none;');
  
  const input = criarInput(key, infoText);
  const button = criarBotaoSalvar(key);

  ['click', 'keyup'].forEach(evt => {
    input.addEventListener(evt, (e) => {
      validarInformacao(key, e.target.value, button);
    })
  })

  button.addEventListener('click', () => {
    let inputText = input.value;
    const ehValido = validarInformacao(key, input.value, button);
    if(ehValido) {
      if(key === 'age') {
        const date = formatDateStringToInput(inputText);
        inputText = `${transformarDataParaIdade(date)} anos`;
      }
      const dadoFoiSalvo =  salvarDados(key, inputText);
      if (dadoFoiSalvo) {
        info.innerText = inputText;
        input.remove();
        button.remove();


        document.getElementById('top-user-name').innerText = '';
        DOMUtils.adicionarTexto("#top-user-name", usuario.nome);
    
        info.setAttribute('style', 'display: inherit;');
        editBtn.setAttribute('style', 'display: inherit;');
      } else {
        alert("Esse email já foi cadastrado!");
      }
    }
  });
}

function salvarDados(key, value) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));

  const usuarioAtualizado = usuario;
  if(key === 'email') {
    usuarioAtualizado.email = value;
  } else if (key === 'telephone') {
    usuarioAtualizado.telefone = value;
  } else if (key === 'age') {
    usuarioAtualizado.nascimento = value;
  } else if (key === 'name') {
    usuarioAtualizado.nome = value;
  }

  const index = usuarios.findIndex(user => {
    return user.cpf === usuario.cpf;
  });

  let tempUsers = [];

  usuarios.forEach(user => {
    if(user.email === usuario.email) {
      tempUsers.push(user);
    };
  })

  if (tempUsers.length > 1 || (tempUsers.length === 1 && tempUsers[0].cpf !== usuario.cpf)) {
    console.error('Esse email já foi cadastrado!');
    return false;
  }

  usuarios[index] = usuarioAtualizado;

  usuario = usuarioAtualizado;
  localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  return true;
}

function validarInformacao(key, info, button) {
  const input = document.getElementById(`${key}-input`);
  let ehValido = true;

  if(key === 'email') {
    ehValido = TestaEmail(info);
  } else if (key === 'telephone') {
    const digitosTelefone = info.replace(/\D/g, "");
    if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
      ehValido = false;
    } else {
      ehValido = true;
    }
  }

  if (info.length <= 4) { ehValido = false }

  if (ehValido) {
    input.setAttribute("style", "outline-color: green; margin: 0 0.5rem 0 0.5rem;");
    button.classList.remove('disabled');
    button.classList.add('success');
    return true;
  } else {
    input.setAttribute("style", "outline-color: red; margin: 0 0.5rem 0 0.5rem;");
    button.classList.add('disabled');
    button.classList.remove('success');
  }
}

function criarInput(key, value) {
  const input = document.createElement("input");
  input.setAttribute('class', 'input-base');
  input.setAttribute('style', 'margin: 0 0.5rem 0 0.5rem');
  input.setAttribute('id', `${key}-input`);

  if (key === 'age') {
    input.setAttribute("type", "date");
    input.setAttribute("min", "1900-01-01");
    input.setAttribute("max", "2003-12-31");
    const dataNascimento = usuario['nascimento'];
    input.setAttribute('value', formatDateStringToInput(dataNascimento));
  } else {
    input.setAttribute('value', value);
  }
  document.getElementById(`${key}-container`).appendChild(input);

  return input;
}

function formatDateStringToInput(date) {
  const dateArr = date.split('/');
  const inputDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  return inputDate; 
}

function formatInputToDateString(date) {
  const dateArr = date.split('-');
  const inputDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
  return inputDate; 
}

function criarBotaoSalvar(key) {
  const botaoSalvar = document.createElement("button");
  botaoSalvar.innerText = 'Salvar';
  botaoSalvar.setAttribute('class', 'button-base');
  botaoSalvar.setAttribute('class', 'bg-main-color');
  botaoSalvar.setAttribute('id', `${key}-save`);
  botaoSalvar.setAttribute('style', 'padding: 0.4rem; border-radius: 10px; cursor: pointer;');
  botaoSalvar.classList.add('success');
  document.getElementById(`${key}-input`).setAttribute("style", "outline-color: green; margin: 0 0.5rem 0 0.5rem;");
  document.getElementById(`${key}-container`).appendChild(botaoSalvar);

  return botaoSalvar
}