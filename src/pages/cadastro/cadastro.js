let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");



let cpf = document.querySelector("#cpf");
let labelCpf = document.querySelector("#labelCpf");
let validCpf = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let telefone = document.querySelector("#telefone");
let labelTel = document.querySelector("#labelTel");
let validTelefone = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length < 3) {
    limpaCampo(labelNome, nome);
    return;
  }

  if (nome.value.length < 4) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Digite um nome válido";
    nome.setAttribute("style", "outline-color: red");

  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome válido";
    nome.setAttribute("style", "outline-color: green");

  }
});

email.addEventListener("keyup", () => {
  if (email.value.length <= 4) {
    limpaCampo(labelEmail, email, validEmail);
    return;
  }

  if (!TestaEmail(email.value)) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "Digite um email válido";
    email.setAttribute("style", "outline-color: red");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "Email válido";
    email.setAttribute("style", "outline-color: green");
    validEmail = true;
  }
});

cpf.addEventListener("keyup", () => {
  if (!cpf.value.length) {
    limpaCampo(labelCpf, cpf, validCpf);
    return;
  }

  if (cpf.value.length != 11) {
    labelCpf.setAttribute("style", "color: red");
    labelCpf.innerHTML = "Cpf *Insira os 11 números";
    usuario.setAttribute("style", "outline-color: red");
    validCpf = false;
  } else if (!TestaCPF(cpf.value)) {
    labelCpf.setAttribute("style", "color: red");
    labelCpf.innerHTML = "Cpf inválido";
    usuario.setAttribute("style", "outline-color: red");
    validCpf = false;
  } else {
    labelCpf.setAttribute("style", "color: green");
    labelCpf.innerHTML = "Cpf válido";
    cpf.setAttribute("style", "outline-color: green");
    validCpf = true;
  }
});

telefone.addEventListener("keyup", () => {
  if (!telefone.value.length) {
    limpaCampo(labelTel, telefone, validTelefone);
    return;
  }
  const digitosTelefone = telefone.value.replace(/\D/g, "");

  if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
    labelTel.setAttribute("style", "color: red");
    labelTel.innerHTML = "*Insira um número correto com DDD";
    telefone.setAttribute("style", "outline-color: red");
    validTelefone = false;
  } else {
    labelTel.setAttribute("style", "color: green");
    labelTel.innerHTML = "Número válido";
    telefone.setAttribute("style", "outline-color: green");
    validTelefone = true;
  }
});

document.getElementById("form_cadastro").addEventListener("submit", (e) => {
  e.preventDefault();

  const formularioValido = validEmail && validCpf && validTelefone;

  const form = new FormData(e.target);

  const { nome, cpf, email, telefone, nascimento, usuario, senha } =
    Object.fromEntries(form);

  if (!formularioValido) {
    alert("Preencha os campos corretamente");
    return;
  }

  const usuarioJaExiste = listaUsuarios.some(
    (usuarioLista) =>
      usuarioLista.usuario === usuario ||
      usuarioLista.email === email ||
      usuarioLista.cpf === cpf
  );

  if (usuarioJaExiste) {
    alert("Usuário já cadastrado!");
    return;
  }

  const [ano, mes, dia] = nascimento.split("-");

  const novoUsuario = {
    nome,
    cpf: `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(
      9,
      11
    )}`,
    email,
    telefone: `${telefone.slice(0, 2)} ${telefone.slice(
      2,
      telefone.length - 4
    )}-${telefone.slice(-4)}`,
    nascimento: `${dia}/${mes}/${ano}`,
    usuario,
    senha,
    administrador: false,
  };
  listaUsuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  alert("Usuário cadastrado com sucesso");
  window.location.href = LOGIN_PAGINA;
});

function limpaCampo(label, campo, valid) {
  label.innerHTML = "";
  campo.setAttribute("style", "outline-color: #f94949");
  valid = true;
}

function TestaEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
