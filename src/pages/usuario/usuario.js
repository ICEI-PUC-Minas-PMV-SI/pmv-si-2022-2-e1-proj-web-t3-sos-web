console.log(JSON.parse(localStorage.getItem("usuario")))
var usuario = JSON.parse(localStorage.getItem("usuario"))

document.getElementById("edit-email").addEventListener("click", (e) => {

  document.getElementById("email-info").remove()
  var input = document.createElement("input")
  document.getElementById("email-container").appendChild(input)
  document.getElementById("edit-email").remove()
  var botaoSalvar = document.createElement("button")
  document.getElementById("email-container").appendChild(botaoSalvar)
})
document.getElementById("edit-telephone").addEventListener("click", (e) => {

  document.getElementById("telephone-info").remove()
  var input = document.createElement("input")
  document.getElementById("telephone-container").appendChild(input)
  document.getElementById("edit-telephone").remove()
  var botaoSalvar = document.createElement("button")
  document.getElementById("telephone-container").appendChild(botaoSalvar)
})
document.getElementById("edit-age").addEventListener("click", (e) => {

  document.getElementById("age-info").remove()
  var input = document.createElement("input")
  document.getElementById("age-container").appendChild(input)
  document.getElementById("edit-age").remove()
  var botaoSalvar = document.createElement("button")
  document.getElementById("age-container").appendChild(botaoSalvar)
})
document.getElementById("edit-data").addEventListener("click", (e) => {

  document.getElementById("data-info").remove()
  var input = document.createElement("input")
  document.getElementById("data-container").appendChild(input)
  document.getElementById("edit-data").remove()
  var botaoSalvar = document.createElement("button")
  document.getElementById("data-container").appendChild(botaoSalvar)
})
document.getElementById("edit-chat").addEventListener("click", (e) => {

  document.getElementById("chat-info").remove()
  var input = document.createElement("input")
  document.getElementById("chat-container").appendChild(input)
  document.getElementById("edit-chat").remove()
  var botaoSalvar = document.createElement("button")
  document.getElementById("chat-container").appendChild(botaoSalvar)
})

