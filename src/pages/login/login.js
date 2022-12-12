redirecionaLogado();

document.getElementById("form_login").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const { usuario, senha } = Object.fromEntries(form);

  const indiceUsuario = listaUsuarios.findIndex(
    (usuarioDaLista) =>
      usuarioDaLista.usuario === usuario && usuarioDaLista.senha === senha
  );

  if (indiceUsuario === -1) {
    alert("Usuário ou senha incorretos");
    return;
  }

  const usuarioEncontrado = listaUsuarios[indiceUsuario];

  localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

  usuarioLogado = usuarioEncontrado;
  redirecionaLogado();
});
