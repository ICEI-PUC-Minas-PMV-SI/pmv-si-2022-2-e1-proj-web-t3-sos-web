function sendEmail(email) {
  var indiceUsuario = listaUsuarios.findIndex(
    (usuarioLista) => email && usuarioLista.email === email
  );

  if(indiceUsuario === -1 || !indiceUsuario) {
    alert('Esse email não foi cadastrado no sistema! Insira um email válido');
    return;
  }

  const urlSlit = window.location.href.split("/");
  const url = urlSlit.splice(0, urlSlit.length - 4).join("/");

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "marcos.sabino@sga.pucminas.br",
    Password: "DF7DE980816DB8D752B26B8F488A08A92F56",
    To: email,
    From: "marcos.sabino@sga.pucminas.br",
    Subject: "S.O.S Web",
    Body: `<html> <h2>S.O.S Web - Recuperação de senha</h2> <p>Acesse o link para alterar sua senha:</p> <br></br> <a href='${url}/src/pages/recuperar-senha/recuperar-senha.html?usuario=${email}'>Clique aqui</a> </html>`,
  }).then((message) => {
    if (message == "OK") {
      alert("Email enviado com sucesso!");
      window.location.href = "../login/login.html";
      return;
    } else {
      console.error(message);
      alert("Erro ao enviar o email. Verifique!");
    }
  });
}

document.getElementById("inserir_email").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  const { email } = Object.fromEntries(form);

  sendEmail(email);
});
