let comentario = document.querySelector('#comentario')
let labelComentario = document.querySelector('#labelComentario')
let validComentario = false


comentario.addEventListener('keyup', () => {
  if (comentario.value.length <= 19) {
    labelComentario.setAttribute('style', 'color: red')
    labelComentario.innerHTML = '*Conte sua história com no minímo 20 caracteres'
    comentario.setAttribute('style', 'outline-color: red')
    validComentario = false
  } else {
    labelComentario.setAttribute('style', 'color: green')
    labelComentario.innerHTML = ''
    comentario.setAttribute('style', 'outline-color: green')
    validComentario = true
  }
})


function enviar() {
  if (validComentario) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push(
      {
        comentarioCad: comentario.value
      }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    alert('mensagem enviada')

    window.location.href = "../comentarios/comentarios.html"
    return


  }
  else {


    alert('favor preencher o comentário corretamente')
    preventDefault()


  }
}