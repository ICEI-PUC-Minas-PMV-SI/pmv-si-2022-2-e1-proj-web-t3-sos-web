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
    window.location.href = usuarioLogado.administrador
      ? ADMIN_PAGINA
      : DENUNCIAS_PAGINA;
    return;
  }

  document.getElementById("add-comment-text").innerText = 'Escrever comentário >';

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
    const src = acharFotoPorCpf(comentario?.cpf);
    addComentarios.insertAdjacentHTML(
      "afterend",
      `<div class="user-comment">
        <img
          class="user-image"
          src="${src}"
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

function acharFotoPorCpf(cpf) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"))
  const usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpf);
  const foto = usuarioEncontrado?.foto ? usuarioEncontrado.foto : "../../assets/user.svg";
  return foto;
}

main();
