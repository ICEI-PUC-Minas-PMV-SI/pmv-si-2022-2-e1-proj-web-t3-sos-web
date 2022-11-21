function addNewPassword(e) {
  e.preventDefault()

  const password = e.target[0].value
  const confirmPassword = e.target[1].value

  if(password == '' || confirmPassword == '') {
    alert('Preencha todos os campos!')
    return;
  }

  const busca = window.location.search

  const email = busca.split('?usuario=')[1]
  
  if(password == confirmPassword) {
    var listaUser = JSON.parse(localStorage.getItem('listaUser'))
    for (let i = 0; i < listaUser.length; i++) {
      if (email == listaUser[i].emailCad) {

        listaUser[i] = {
          nomeCad: listaUser[i].nomeCad,
          userCad: listaUser[i].userCad,
          senhaCad:  password,
          cpfCad:  listaUser[i].cpfCad,
          telefoneCad: listaUser[i].telefoneCad,
          emailCad: listaUser[i].emailCad
        }

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert('Senha atualizada com sucesso!')
        window.location.href = "../login/login.html"
  
        return
      }
    }
  } else {
    alert('As senhas devem ser iguais!');
  }
}

document.addEventListener('submit', (e) => {
  addNewPassword(e)
})




