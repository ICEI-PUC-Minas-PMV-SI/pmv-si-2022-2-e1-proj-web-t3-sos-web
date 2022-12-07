function main() {
  preencheUsuarioNoMenu();
  preencherTabela();
  escutarEventos();
}

main();

function preencherTabela(filtro = null) {
  if (denuncias.length) {
    adicionarValoresTabela(filtro);
    adicionarPaginas(filtro);
  } else {
    adicionarMensagemTabelaVazia();
    adicionarPaginaUnica();
  }
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
    filtrarPorNocividade(e);
  });
}

function filtrarPorNocividade(e) {
  console.log("Filtro não implementado!");
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

function adicionarValoresTabela(filtro) {
  const table = document.querySelector("table");

  for (let denuncia of filtro ?? denuncias) {
    const tr = document.createElement("tr");

    let tdArr = DOMUtils.criarElementos("td", 3);
    tdArr = DOMUtils.adicionarClasses(tdArr, "td-info");

    let aArr = DOMUtils.criarElementos("a", 3);
    const textos = DOMUtils.criarNosDeTexto([
      denuncia.endereco,
      denuncia.nome,
      "Alta",
    ]);

    aArr = DOMUtils.adicionarFilhosAosNos(aArr, textos);
    tdArr = DOMUtils.adicionarFilhosAosNos(tdArr, aArr);

    tr.append(tdArr[0], tdArr[1], tdArr[2]);
    table.append(tr);
  }
}

function adicionarPaginas(filtro) {
  const paginacao = document.querySelector(".pagination");
  let p = document.createElement("p");
  p.classList.add("pages");

  paginacao.appendChild(p);

  const totalDenuncias = (filtro ?? denuncias).length;

  const totalPaginas = Math.ceil(totalDenuncias / 10);
  DOMUtils.adicionarTexto(".pages", `Página 1 de ${totalPaginas}`);
}

function adicionarMensagemTabelaVazia() {
  const table = document.querySelector("table");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const emptyDataMessage = document.createTextNode(
    "Ainda não há nenhuma denúncia!"
  );
  td.appendChild(emptyDataMessage);
  tr.appendChild(td);
  table.appendChild(td);
}

function adicionarPaginaUnica() {
  const rodape = document.querySelector(".table-footer");
  const paginacao = document.querySelector(".pagination");

  removerIconeProximaPagina(paginacao);

  let pArr = DOMUtils.criarElementos("p", 2);
  pArr[0].classList.add("records");
  pArr[1].classList.add("pages");

  DOMUtils.adicionarTexto(pArr[0], "Total de registros: 0");
  DOMUtils.adicionarTexto(pArr[1], "Página 1 de 1");

  rodape.appendChild(pArr[0]);
  paginacao.appendChild(pArr[1]);
}

function removerIconeProximaPagina(paginacao) {
  const proximaPagina = document.querySelector(".next-pagination");
  paginacao.removeChild(proximaPagina);
}
