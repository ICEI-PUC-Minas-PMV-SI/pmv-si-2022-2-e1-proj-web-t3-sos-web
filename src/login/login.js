document.addEventListener('submit', (e) => {
  e.preventDefault()

  var usuario = e.target[0].value
  var senha = e.target[1].value

  var listaUser = JSON.parse(localStorage.getItem('listaUser'))

  for (let i = 0; i < listaUser.length; i++) {
    if (usuario == listaUser[i].userCad && senha == listaUser[i].senhaCad) {
      localStorage.setItem('usuario', JSON.stringify(listaUser[i]))
      localStorage.setItem('denuncias', JSON.stringify([]))
      window.location.href = "../denuncias/denuncias.html"

      return
    }
  }

  alert('Senha ou usuário incorreta')
}) 