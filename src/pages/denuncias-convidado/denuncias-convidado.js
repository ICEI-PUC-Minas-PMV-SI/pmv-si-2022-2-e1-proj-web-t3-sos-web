var search = new URLSearchParams(window.location.search);
var paginaAtual = parseInt(search.get("pagina") || "1");
var statusFiltrado =
  (search.get("status") && search.get("status").split(",")) || [];
var filtro = search.get("filtro");
var registrosPorPagina = 10;

function main() {
  localStorage.removeItem("usuario");
  usuarioLogado = null;

  preencherTabela();
  escutarEventos();

  document.querySelectorAll(".btn-filter").forEach((btn) => {
    if (statusFiltrado.includes(btn.value)) {
      btn.classList.toggle("bg-main-color");
    }
  });

  document.getElementById("input-search").value = filtro || "";

  DOMUtils.escutarEventoPorClasse("close-modal", "click", (_e) => {
    document.querySelector(".modal-overlay").style.display = "none";
  });
}

main();

function abrirModal(identificador) {
  const denuncia = denuncias.find(
    (denuncia) => denuncia.identificador === identificador
  );
  if (!denuncia) {
    alert("Denúncia não encontrada");
    return;
  }
  document.querySelector(".modal-header h1").innerText = denuncia.nome;
  document.querySelector(".content-warning").innerText = "Malicioso";
  document.querySelector(".content-link").innerText = denuncia.endereco;
  document.querySelector(".content-historia").innerText = denuncia.historia;
  document.querySelector(".modal-overlay").style.display = "flex";
}

function escutarEventos() {
  buscar();
}

function buscar() {
  DOMUtils.escutarEventoPorId("btn-search", "click", () => {
    const valorBusca = document.getElementById("input-search").value || "";

    var href = new URL(window.location.href);
    if (!valorBusca.length) {
      href.searchParams.delete("filtro");
      window.location.replace(href.toString());
      return;
    }
    href.searchParams.set("filtro", valorBusca);
    window.location.replace(href.toString());
  });
}

function preencherTabela() {
  const table = document.querySelector("#denunciations-table");
  const denunciasFiltradas = denuncias.filter((denuncia) => {
    const filtroPorStatus = denuncia.status === 'Aprovada';
    const filtroPorValor =
      !filtro ||
      ["nome", "endereco", "responsavel", "historia"].some((chave) =>
        denuncia[chave].toLowerCase().includes(filtro.toLowerCase())
      );
    return filtroPorStatus && filtroPorValor;
  });
  const denunciasPaginadas = denunciasFiltradas
    .slice((paginaAtual - 1) * registrosPorPagina)
    .slice(0, registrosPorPagina);
  if (!denunciasFiltradas.length) {
    adicionarMensagemTabelaVazia();
    return;
  }
  var href = new URL(window.location.href);
  const backPagination = document.querySelector(".back-pagination");
  const nextPagination = document.querySelector(".next-pagination");
  const totalDePaginas = Math.ceil(
    denunciasFiltradas.length / registrosPorPagina
  );
  document.querySelector(".total-entries").innerText =
    denunciasFiltradas.length;
  document.querySelector(".page-number").innerText = paginaAtual;
  document.querySelector(".total-pages").innerText = totalDePaginas;

  if (paginaAtual > 1) {
    href.searchParams.set("pagina", paginaAtual - 1);
    backPagination.href = href.toString();
    backPagination.style.display = "block";
  }
  if (paginaAtual < totalDePaginas) {
    href.searchParams.set("pagina", paginaAtual + 1);
    nextPagination.href = href.toString();
    nextPagination.style.display = "block";
  }
  denunciasPaginadas.map(
    ({ identificador, nome, endereco }) => {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr id="denuncia-${identificador}"><td>${endereco}</td><td>${nome}</td>
        <td class="btn-acao"><button onclick="abrirModal('${identificador}')" class="icon-button">  <img class="view-icon" src="../../assets/icon-eye.svg" alt="view" /></button></td></tr>`
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
  document.querySelector(".total-entries").innerText = 0;
  document.querySelector(".page-number").innerText = 1;
  document.querySelector(".total-pages").innerText = 1;
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
  window.location.reload();
}

