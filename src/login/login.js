function main() {
  redirecionaLogado();

  var usuarios = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuarios || !usuarios.length) {
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    return;
  }

  listaUsuarios = usuarios;
}

main();

document.getElementById("form_login").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const { usuario, senha } = Object.fromEntries(form);

  const indiceUsuario = listaUsuarios.findIndex(
    (usuarioDaLista) =>
      usuarioDaLista.usuario === usuario && usuarioDaLista.senha === senha
  );

  if (indiceUsuario === -1) {
    alert("Usuário não encontrado");
    return;
  }

  const usuarioEncontrado = listaUsuarios[indiceUsuario];

  localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

  usuarioLogado = usuarioEncontrado;
  redirecionaLogado();
});
