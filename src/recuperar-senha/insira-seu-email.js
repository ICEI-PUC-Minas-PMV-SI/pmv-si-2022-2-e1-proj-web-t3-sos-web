function sendEmail(email) {

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "marcos.sabino@sga.pucminas.br",
    Password: "DF7DE980816DB8D752B26B8F488A08A92F56",
    To: email,
    From: "marcos.sabino@sga.pucminas.br",
    Subject: "S.O.S Web",
    Body: "<html> <h2>S.O.S Web - Recuperação de senha</h2> <p>Acesse o link para alterar sua senha:</p> <br></br> <a href='https://icei-puc-minas-pmv-si.github.io/pmv-si-2022-2-e1-proj-web-t3-sos-web/src/recuperar-senha/recuperar-senha.html'>Clique aqui</a> </html>"
  }).then(
    message => {
      if (message == "OK") {
        alert("Email enviado com sucesso!")
        window.location.href = "../login/login.html"
        return
      } else {
        alert("Erro ao enviar o email. Verifique!")
      }
    }

  );
}
document.addEventListener('submit', (e) => {
    e.preventDefault()

    var email = e.target[0].value
    sendEmail(email)
  }

)