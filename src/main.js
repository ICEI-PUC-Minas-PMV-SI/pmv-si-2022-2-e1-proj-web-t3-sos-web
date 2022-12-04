const LOGIN_PAGINA = "../login/login.html";
const ADMIN_PAGINA = "../admin/admin.html";
const DENUNCIAS_PAGINA = "../denuncias/denuncias.html";
const COMENTARIOS_PAGINA = "../comentarios/comentarios.html";
const MINHAS_DENUNCIAS = "../minhas-denuncias/minhas-denuncias.html";

const statusDenuncia = {
  PENDENTE: "Pendente",
  APROVADA: "Aprovada",
  NEGADA: "Negada",
};

var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  {
    nome: "João Augusto",
    nascimento: "25/12/1998",
    cpf: "123.456.789-00",
    email: "aluno@email.com",
    telefone: "21 0800-8000",
    usuario: "aluno",
    senha: "123456",
    administrador: false,
  },
  {
    nome: "João Augusto",
    nascimento: "25/12/1998",
    cpf: "123.456.789-01",
    email: "administrador@email.com",
    telefone: "21 0800-8000",
    usuario: "admin",
    senha: "123456",
    administrador: true,
  },
];

localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

var usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

var denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];
localStorage.setItem("denuncias", JSON.stringify(denuncias));

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

function deslogaSeNaoAdmin() {
  if (!usuarioLogado || !usuarioLogado.administrador) {
    window.location.href = LOGIN_PAGINA;
  }
}

function deslogaSeAdmin() {
  if (!usuarioLogado || usuarioLogado.administrador) {
    window.location.href = LOGIN_PAGINA;
  }
}

function parseStatus(status = statusDenuncia.PENDENTE) {
  return statusDenuncia[status] || statusDenuncia.PENDENTE;
}

function parseNocividade(
  votacao = {
    positivo: 0,
    negativo: 0,
  }
) {
  const { positivo, negativo } = votacao;
  const media = positivo - negativo;
  if (media >= 3) return "Alta";
  if (media <= 0) return "Baixa";
  return "Média";
}

function slugify(string = "") {
  return string
    .toLocaleLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, "a") // Special Characters #1
    .replace(/[èÈéÉêÊëË]+/g, "e") // Special Characters #2
    .replace(/[ìÌíÍîÎïÏ]+/g, "i") // Special Characters #3
    .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") // Special Characters #4
    .replace(/[ùÙúÚûÛüÜ]+/g, "u") // Special Characters #5
    .replace(/[ýÝÿŸ]+/g, "y") // Special Characters #6
    .replace(/[ñÑ]+/g, "n") // Special Characters #7
    .replace(/[çÇ]+/g, "c") // Special Characters #8
    .replace(/[ß]+/g, "ss") // Special Characters #9
    .replace(/[Ææ]+/g, "ae") // Special Characters #10
    .replace(/[Øøœ]+/g, "oe") // Special Characters #11
    .replace(/[%]+/g, "pct") // Special Characters #12
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

function redirecionaLogado() {
  if (!usuarioLogado) return;
  alert("Seja bem vindo " + usuarioLogado.nome);
  window.location.href = usuarioLogado.administrador
    ? ADMIN_PAGINA
    : DENUNCIAS_PAGINA;
}

function paginate(array, pageSize, pageNumber) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function preencheUsuarioNoMenu() {
  if (usuarioLogado) {
    const menuDenuncia = usuarioLogado.administrador
      ? {
          acao: "Gerenciar Denúncias",
          href: ADMIN_PAGINA,
        }
      : {
          acao: "Minhas Denúncias",
          href: MINHAS_DENUNCIAS,
        };
    DOMUtils.adicionarTexto("#top-user-name", usuarioLogado.nome);
    DOMUtils.adicionarTexto("#acao-user-denunciations-nav", menuDenuncia.acao);
    document.querySelector(".user-denunciations-nav a").href =
      menuDenuncia.href;
  }
}
