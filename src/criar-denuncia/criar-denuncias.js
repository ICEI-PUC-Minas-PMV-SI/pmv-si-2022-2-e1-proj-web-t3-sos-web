// Evento de conversão de Formalario para Variavel Manipulavél 

document.addEventListener('submit', (e) => {
  e.preventDefault();
  criarDenuncia(e)
})

// Função de Receber Valor 
function criarDenuncia(e) {
  var nome = (e.target[0].value);
  var endereco = (e.target[1].value)
  var historia = (e.target[2].value)

  // Declarando  Objeto
  var obj = { nome, endereco, historia }


  var denuncias = JSON.parse(localStorage.getItem("denuncias"))
  denuncias.push(obj)

  localStorage.setItem("denuncias", JSON.stringify(denuncias))

  //Enviando Dados para a Próxima Página
  window.location.href = "../minhas-denuncias/minhas-denuncias.html"
  return
}

