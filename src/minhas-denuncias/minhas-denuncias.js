
// Deletar
function myDelete() {
  const deletando = document.getElementById("d-a")
  deletando.remove()
}

// JSON.Stringfly (conversão para linguagem do navegador) && JSON.Parse (conversão para JavaScript) 


// Criar Denuncias
var denuncias = JSON.parse(localStorage.getItem("denuncias"))
console.log(denuncias)

// Variável selecionando Objeto do HTML
var divPrincipal = document.querySelector(".denounce")

// Variável criando Elemento do HTML
var card = document.createElement("div")

// Declarando CSS do Elemento Criado
card.classList.add("denounce-analyses")


// Adcionando Elemento do localStorage no HTML
// divPrincipal.appendChild(card)

// Definindo Posição dos Novos Elementos
divPrincipal.insertBefore(card, divPrincipal.children[2])

//
var titulo = document.createElement("div")
titulo.classList.add("title-denounce-analyses")

var h2 = document.createElement("h2")
var textoTitulo = titulo.getElementsByTagName("h2")

var content = document.createTextNode(denuncias.nome)
h2.appendChild(content)

titulo.appendChild(h2)
card.appendChild(titulo)


card.appendChild(document.createElement("div"))
var resto = card.getElementsByTagName("div")[1]
resto.setAttribute("style", "margin-left: 25px;")

var ztatus = document.createElement("h3")
var contentZtatus = document.createTextNode("Em Analise")
ztatus.appendChild(contentZtatus)

var endereco = document.createElement("h4")
var contentEndereco = document.createTextNode(denuncias.endereco)
endereco.appendChild(contentEndereco)

var historia = document.createElement("h5")
var contentHistoria = document.createTextNode(denuncias.historia)
historia.appendChild(contentHistoria)

resto.append(ztatus, endereco, historia)
console.log(resto)




// <div class="denounce-analyses" id="d-a">
// <div class="title-denounce-analyses">
//   <h2>Spotlight</h2>
//   <i onclick="myDelete()" style="margin-right: 10px;" class="gg-trash"></i>
// </div>
// <div style="margin-left: 25px;">
//   <h3>Em Análise</h3>
//   <h4>www.spotlight.com.br</h4>
//   <h5>O site possui vários anúncios fake que redirecionam para páginas maliciosas.</h5>
// </div>
// </div>
