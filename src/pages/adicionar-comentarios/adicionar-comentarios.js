function main() {
  deslogaSeNaoLogado();
  preencheUsuarioNoMenu();
}
main();

var identificador = new URLSearchParams(window.location.search).get(
  "identificador"
);

const denuncia = denuncias.find(
  (denuncia) => denuncia.identificador === identificador
);
if (!denuncia) {
  alert("Denúncia não encontrada");
  window.location.href = DENUNCIAS_PAGINA;
}

let comentario = document.querySelector("#comentario");
let labelComentario = document.querySelector("#labelComentario");
let validComentario = false;

comentario.addEventListener("keyup", () => {
  if (comentario.value.length <= 19) {
    labelComentario.setAttribute("style", "color: red");
    labelComentario.innerHTML =
      "*Conte sua história com no minímo 20 caracteres";
    comentario.setAttribute("style", "outline-color: red");
    validComentario = false;
  } else {
    labelComentario.setAttribute("style", "color: green");
    labelComentario.innerHTML = "";
    comentario.setAttribute("style", "outline-color: green");
    validComentario = true;
  }
});

document
  .getElementById("form_add_comentario")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const { mensagem } = Object.fromEntries(form);

    denuncia.comentarios.push({
      mensagem: mensagem.trim(), // trim() remove espaços em branco no início e no fim da string
      usuario: usuarioLogado.usuario,
    });
    localStorage.setItem("denuncias", JSON.stringify(denuncias));
    window.location.href =
      COMENTARIOS_PAGINA + "?identificador=" + identificador;
  });
