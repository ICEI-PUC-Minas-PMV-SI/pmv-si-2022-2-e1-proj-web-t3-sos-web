let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTel = document.querySelector('#labelTel')
let validTelefone = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 3) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 4 caracteres'
    nome.setAttribute('style', 'outline-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome válido'
    nome.setAttribute('style', 'outline-color: green')
    validNome = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'outline-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha válida'
    senha.setAttribute('style', 'outline-color: green')
    validSenha = true
  }
})


usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'outline-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário válido'
    usuario.setAttribute('style', 'outline-color: green')
    validUsuario = true
  }
})


cpf.addEventListener('keyup', () => {
  if (cpf.value.length <= 10) {
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'Cpf *Insira no minimo 11 números'
    usuario.setAttribute('style', 'outline-color: red')
    validCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'Cpf válido'
    cpf.setAttribute('style', 'outline-color: green')
    validCpf = true
  }
})

email.addEventListener('keyup', () => {
  if (!email.checkValidity()) {
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Digite um email válido'
    email.setAttribute('style', 'outline-color: red')
    validEmail = false
  } else {
    (email.value.length > 4)
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email válido'
    email.setAttribute('style', 'outline-color: green')
    validEmail = true
  }
})


telefone.addEventListener('keyup', () => {
  if (telefone.value.length <= 10) {
    labelTel.setAttribute('style', 'color: red')
    labelTel.innerHTML = '*Insira um número correto com DDD'
    senha.setAttribute('style', 'outline-color: red')
    validTelefone = false
  } else {
    labelTel.setAttribute('style', 'color: green')
    labelTel.innerHTML = 'Número válido'
    senha.setAttribute('style', 'outline-color: green')
    validTelefone = true
  }
})

function cadastrar() {
  if (validNome && validUsuario && validSenha && validEmail && validCpf && validTelefone) {


    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
        cpfCad: cpf.value,
        emailCad: email.value,
        telefoneCad: telefone.value
      }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    alert('Cadastro com sucesso');


    window.location.href = "../login/login.html"


    //msgSuccess.setAttribute('style', 'display: block')
    //msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'



  }


  else {
    alert('Favor preencher os dados corretamente');

    // msgError.setAttribute('style', 'display: block');
    //msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';

  }



}



