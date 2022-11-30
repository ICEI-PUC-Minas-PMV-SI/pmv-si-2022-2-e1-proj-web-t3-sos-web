var email = new URLSearchParams(window.location.search).get("usuario");
var indiceUsuario = listaUsuarios.findIndex(
  (usuarioLista) => email && usuarioLista.email === email
);
if (!email || indiceUsuario === -1) {
  window.location.href = LOGIN_PAGINA;
}

function addNewPassword(e) {
  e.preventDefault();

  const password = e.target[0].value;
  const confirmPassword = e.target[1].value;

  if (password == "" || confirmPassword == "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (password == confirmPassword) {
    listaUsuarios[indiceUsuario].senha = password;
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    alert("Senha alterada com sucesso!");
    window.location.href = LOGIN_PAGINA;
  } else {
    alert("As senhas devem ser iguais!");
  }
}

document.addEventListener("submit", (e) => {
  addNewPassword(e);
});
