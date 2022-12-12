var search = new URLSearchParams(window.location.search);
var paginaAtual = parseInt(search.get("pagina") || "1");
var statusFiltrado =
  (search.get("status") && search.get("status").split(",")) || [];
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

function abrirModal(identificador) {
  const denuncia = denuncias.find(
    (denuncia) => denuncia.identificador === identificador
  );
  if (!denuncia) {
    alert("Denúncia não encontrada");
    return;
  }
  
  denuncia.status === 'Negada'
  denuncia.status === 'Pendente'
  denuncia.status === 'Aprovada'
  
  const textoAviso = formatarTextoAviso(denuncia.status);
  const corAviso = adicionarCorAviso(textoAviso);

  document.querySelector(".modal-header h1").innerText = denuncia.nome;
  document.querySelector(
    ".modal-header a"
  ).href = `${COMENTARIOS_PAGINA}?identificador=${denuncia.identificador}`;
  const contentWarning = document.querySelector(".content-warning");
  contentWarning.innerText = textoAviso;
  contentWarning.setAttribute('style', corAviso);
  document.querySelector(".content-link").innerText = denuncia.endereco;
  document.querySelector(".content-historia").innerText = denuncia.historia;
  document.querySelector(".modal-overlay").style.display = "flex";
}

function formatarTextoAviso(status) {
  switch (status) {
    case 'Negada':
      return 'Confiável';
    case 'Aprovada':
      return 'Malicioso'
    default:
      return 'Pendente';
  }
}

function adicionarCorAviso(textoAviso) {
  switch (textoAviso) {
    case 'Confiável':
      return 'color: green;';
    case 'Malicioso':
      return 'color: red;';
    default:
      return 'color: orange;';
  }
}

function escutarEventos() {
  buscar();
  filtrar();
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

function filtrar() {
  DOMUtils.escutarEventoPorClasse("btn-filter", "click", (e) => {
    filtrarPorNocividade(e);
  });
}

function filtrarPorNocividade(e) {
  var status = statusFiltrado.includes(e.target.value)
    ? statusFiltrado.filter((status) => status !== e.target.value)
    : [...statusFiltrado, e.target.value];
  e.target.classList.toggle("bg-main-color");
  var href = new URL(window.location.href);
  href.searchParams.set("pagina", 1);
  if (!status.length) {
    href.searchParams.delete("status");
    window.location.replace(href.toString());
    return;
  }
  href.searchParams.set("status", status.join(","));
  window.location.replace(href.toString());
}

function preencherTabela() {
  const table = document.querySelector("#denunciations-table");
  const denunciasFiltradas = denuncias.filter((denuncia) => {
    const filtroPorStatus =
      !statusFiltrado.length ||
      statusFiltrado.some(
        (status) => denuncia.status === statusDenuncia[status]
      );
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
    ({ identificador, nome, endereco, responsavel, status }) => {
      const usuario = listaUsuarios.find(
        ({ usuario }) => usuario === responsavel
      );
      table.insertAdjacentHTML(
        "beforeend",
        `<tr id="denuncia-${identificador}"><td>${endereco}</td><td>${nome}</td><td>${
          (usuario && usuario.nome) || "-"
        }</td><td class="td-status">${status}</td><td class="btn-acao"><button onclick="abrirModal('${identificador}')" class="icon-button">  <img class="view-icon" src="../../assets/icon-eye.svg" alt="view" /></button>${
          status !== statusDenuncia.PENDENTE
            ? ""
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

  if(status === 'Aprovada' || status === 'Negada') {
    enviarEmail(denuncias[indiceDenuncia].responsavel, identificador, status)
  } 
  
}

function enviarEmail(responsavel, nomeDenuncia, status) {
  var indiceUsuario = listaUsuarios.findIndex(
    (usuarioLista) => usuarioLista.usuario === responsavel
  );
    
  if(indiceUsuario === -1) {
    return;
  }

  const email = listaUsuarios[indiceUsuario].email;

  const urlSlit = window.location.href.split("/");
  const url = urlSlit.splice(0, urlSlit.length - 4).join("/");
  const texto = status === 'Aprovada'
    ? `<h3>Sua denúncia "${nomeDenuncia}" foi aprovada!</h3><p>Caso queira saber se alguém já fez algum comentário sobre a sua denúncia e esteja logado no sistema, você pode visualizar sua denúncia <a href='${url}/src/pages/comentarios/comentarios.html?identificador=${nomeDenuncia}'>clicando aqui</a>.</p>`
    : `<h3>Sua denúncia "${nomeDenuncia}" foi reprovada.</h3><p>Infelizmente sua denúncia não passou na nossa validação interna. Da próxima vez, tente detalhar melhor o ocorrido e solite novamente.</p>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "marcos.sabino@sga.pucminas.br",
    Password: "DF7DE980816DB8D752B26B8F488A08A92F56",
    To: email,
    From: "marcos.sabino@sga.pucminas.br",
    Subject: "S.O.S Web",
    Body: `<html><h2>S.O.S Web - Aprovação de denúncia</h2>${texto}</html>`,
  }).then((message) => {
    if (message == "OK") {
      console.info('O status da denúncia foi enviado ao usuário via email');
      return;
    } else {
      console.error(message);
      console.warn('Não foi possível enviar o email para o usuário sobre o status da denúncia');
      return;
    }
  });
}

main();
