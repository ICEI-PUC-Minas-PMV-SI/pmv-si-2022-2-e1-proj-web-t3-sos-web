var search = new URLSearchParams(window.location.search);
var paginaAtual = search.get("pagina") || 1;
var statusFiltrado = search.get("status");
var filtro = search.get("filtro");
var registrosPorPagina = 10;
function deslogaSeNaoAdmin() {
  if (!usuarioLogado || !usuarioLogado.administrador) {
    window.location.href = LOGIN_PAGINA;
  }
}

function main() {
  deslogaSeNaoLogado();
  deslogaSeNaoAdmin();
  preencheUsuarioNoMenu();
  preencherTabela();
  escutarEventos();
}

function escutarEventos() {
  buscar();
  filtrar();
}

function buscar() {
  DOMUtils.escutarEventoPorId("btn-search", "click", () => {
    DOMUtils.removerElementosPorClasse("td-info");
    DOMUtils.removerElementosPorClasse("pages");
    DOMUtils.removerElementosPorClasse("records");

    const input = document.getElementsByClassName("input-base");
    const valorBusca = input[0].value;

    const denunciasFiltradas = valorBusca
      ? filtrarPorValor(valorBusca)
      : denuncias;
    preencherTabela(denunciasFiltradas);
  });
}

function filtrar() {
  DOMUtils.escutarEventoPorClasse("btn-filter", "click", (e) => {
    filtrarPorNocividade(e.target.value);
  });
}

function filtrarPorNocividade(value) {
  console.log(value);
}

function filtrarPorValor(valor) {
  return denuncias.filter((o) =>
    Object.keys(o).some((k) => {
      return k !== "historia"
        ? o[k].toLowerCase().includes(valor.toLowerCase())
        : false;
    })
  );
}

function preencherTabela() {
  const table = document.querySelector("#denunciations-table");
  if (!denuncias.length) {
    adicionarMensagemTabelaVazia();
    return;
  }
  denunciasPaginadas;
  denuncias.map(
    ({ identificador, nome, endereco, responsavel, votacao, status }) => {
      const usuario = listaUsuarios.find(
        ({ usuario }) => usuario === responsavel
      );
      const nocividade = parseNocividade(votacao);
      table.insertAdjacentHTML(
        "beforeend",
        `<tr id="denuncia-${identificador}"><td>${endereco}</td><td>${nome}</td><td>${nocividade}</td><td>${
          (usuario && usuario.nome) || "-"
        }</td><td class="td-status">${status}</td><td class="btn-acao">${
          status !== statusDenuncia.PENDENTE
            ? "-"
            : `<button onclick="alteraStatus('${identificador}', '${statusDenuncia.APROVADA}')" class="icon-button">  <img src="../../assets/icon-check.svg" alt="approve" /></button><button onclick="alteraStatus('${identificador}', '${statusDenuncia.NEGADA}')" class="icon-button">  <img src="../../assets/icon-cancel.svg" alt="cancel" /></button>`
        }</td></tr>`
      );
    }
  );
}

function adicionarMensagemTabelaVazia() {
  const table = document.querySelector("#denunciations-table");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const emptyDataMessage = document.createTextNode(
    "Ainda não há nenhuma denúncia!"
  );
  td.appendChild(emptyDataMessage);
  tr.appendChild(td);
  table.appendChild(td);
}

function alteraStatus(identificador, status) {
  const indiceDenuncia = denuncias.findIndex(
    (denuncia) => denuncia.identificador === identificador
  );
  if (indiceDenuncia === -1) {
    alert("Denúncia não encontrada!");
    return;
  }
  document.querySelector(`#denuncia-${identificador} .td-status`).innerText =
    status;
  document.querySelector(`#denuncia-${identificador} .btn-acao`).innerText = "";
  denuncias[indiceDenuncia].status = status;
  localStorage.setItem("denuncias", JSON.stringify(denuncias));
}

main();
