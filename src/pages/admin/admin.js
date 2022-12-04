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
}

function preencherTabela() {
  const table = document.querySelector("#denunciations-table");
  if (!denuncias.length) {
    adicionarMensagemTabelaVazia();
    return;
  }
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
          status !== statusDenuncia.ANALISE
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
