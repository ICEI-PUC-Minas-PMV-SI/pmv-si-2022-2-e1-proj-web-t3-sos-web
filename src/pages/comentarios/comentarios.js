function main() {
  deslogaSeNaoLogado();
  preencheUsuarioNoMenu();
  var identificador = new URLSearchParams(window.location.search).get(
    "identificador"
  );

  const denuncia = denuncias.find(
    (denuncia) => denuncia.identificador === identificador
  );
  if (!denuncia) {
    alert("Denúncia não encontrada");
    return;
  }

  preencheDenuncia(denuncia);
  preencheComentarios(denuncia);
}

function preencheDenuncia(denuncia) {
  document.querySelector(".modal-header h1").innerText = denuncia.nome;
  document.querySelector(
    ".add-comment a"
  ).href = `${ADICIONAR_COMENTARIOS_PAGINA}?identificador=${denuncia.identificador}`;
  document.querySelector(".content-link").innerText = denuncia.endereco;
  document.querySelector(".content-historia").innerText = denuncia.historia;
}

function preencheComentarios(denuncia) {
  const addComentarios = document.querySelector(".add-comment");
  denuncia.comentarios.reverse().forEach((comentario) => {
    addComentarios.insertAdjacentHTML(
      "afterend",
      `<div class="user-comment">
    <img
      class="user-image"
      src="../../assets/user.svg"
      alt="user"
    />
    <div class="comment-container">
      <p>
        ${comentario.mensagem}
      </p>
    </div>
  </div>`
    );
  });
}

main();
