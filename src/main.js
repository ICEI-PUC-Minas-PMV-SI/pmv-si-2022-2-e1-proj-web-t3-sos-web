const LOGIN_PAGINA = "../login/login.html";
const ADMIN_PAGINA = "../admin/admin.html";
const DENUNCIAS_PAGINA = "../denuncias/denuncias.html";
var listaUsuarios = [
  {
    nome: "João Augusto",
    dataNascimento: "25/12/1998",
    cpf: "123.456.789-00",
    email: "aluno@email.com",
    telefone: "21 0800-8000",
    usuario: "aluno",
    senha: "123456",
    administrador: false,
  },
  {
    nome: "João Augusto",
    dataNascimento: "25/12/1998",
    cpf: "123.456.789-01",
    email: "administrador@email.com",
    telefone: "21 0800-8000",
    usuario: "admin",
    senha: "123456",
    administrador: true,
  },
];

var usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

function desloga() {
  localStorage.removeItem("usuario");
  usuarioLogado = null;
  window.location.href = LOGIN_PAGINA;
}

function deslogaSeNaoLogado() {
  if (!usuarioLogado) {
    window.location.href = LOGIN_PAGINA;
  }
}

function redirecionaLogado() {
  if (!usuarioLogado) return;
  alert("Seja bem vindo " + usuarioLogado.nome);
  window.location.href = usuarioLogado.administrador
    ? ADMIN_PAGINA
    : DENUNCIAS_PAGINA;
}
