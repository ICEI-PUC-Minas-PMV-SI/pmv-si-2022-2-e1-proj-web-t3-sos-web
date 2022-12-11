
function deletarDenuncia(deleteButton) {
  var titleContainer = deleteButton.parentNode;
  var card = titleContainer.parentNode;
  var conteudo = card.childNodes[1];
  var endereco = conteudo.childNodes[1];
  var conteudoEndereco = endereco.innerText || endereco.textContent;
  var index = denuncias.findIndex(denuncia => denuncia.endereco === conteudoEndereco);
  denuncias.splice(index, 1);

  localStorage.setItem('denuncias', JSON.stringify(denuncias));
  const cards = document.getElementsByClassName('denounce-analyses')
  for (var i = cards.length - 1; i >= 0; --i) {
    cards[i].remove();
  }
  refrescarPagina();
}

function escutarEvento() {
  DOMUtils.escutarEventoPorClasse('gg-trash', 'click', (e) => {
    // console.log(e)
    deletarDenuncia(e.target);
  })
}

// JSON.Stringfly (conversão para linguagem do navegador) && JSON.Parse (conversão para JavaScript)

function adicionarCards(denuncias) {
  // Criar Denuncias

  for (let i = 0; i < denuncias.length; i++) {
    // Variável selecionando Objeto do HTML
    var divPrincipal = document.querySelector(".denounce");
    // card.childNodes

    // Variável criando Elemento do HTML
    var card = document.createElement("div");

    // Declarando CSS do Elemento Criado
    card.classList.add("denounce-analyses");

    // Definindo Posição dos Novos Elementos
    divPrincipal.insertBefore(card, divPrincipal.children[2]);

    var titulo = document.createElement("div");
    titulo.classList.add("title-denounce-analyses");

    var h2 = document.createElement("h2");

    var content = document.createTextNode(denuncias[i].nome);
    h2.appendChild(content);

    titulo.appendChild(h2);

    var iconeDeletar = document.createElement('i');
    iconeDeletar.setAttribute('class', 'gg-trash');
    iconeDeletar.setAttribute('style', 'margin-right: 10px');

    titulo.appendChild(iconeDeletar);

    card.appendChild(titulo);

    var conteudoDenuncia = document.createElement("div");
    conteudoDenuncia.setAttribute('class', 'denunciation-content');
    card.appendChild(conteudoDenuncia);
    var resto = card.getElementsByTagName("div")[1];
    resto.setAttribute("style", "margin-left: 25px;");

    var ztatus = document.createElement("h3");
    var contentZtatus = document.createTextNode("Pendente");
    ztatus.appendChild(contentZtatus);

    var endereco = document.createElement("h4");
    var contentEndereco = document.createTextNode(denuncias[i].endereco);
    endereco.appendChild(contentEndereco);

    var historia = document.createElement("h5");
    var contentHistoria = document.createTextNode(denuncias[i].historia);
    historia.appendChild(contentHistoria);

    resto.append(ztatus, endereco, historia);
  }
}

function adicionarMensagemPadrao() {
  const divPrincipal = document.querySelector('.denounce');
  const texto = document.createTextNode('Você ainda não possui denúncias cadastradas!');
  divPrincipal.insertBefore(texto, divPrincipal.children[2]);
  divPrincipal.setAttribute('style', 'padding: 0');
}

function refrescarPagina() {
  const denunciasDoUsuario = denuncias.filter(
    (denuncia) => denuncia.responsavel === usuarioLogado.usuario
  );
  if(denunciasDoUsuario.length) {
    adicionarCards(denunciasDoUsuario);
    escutarEvento();
  } else {
    adicionarMensagemPadrao();
  }
}

function main() {
  deslogaSeNaoLogado();
  deslogaSeAdmin();
  preencheUsuarioNoMenu();

  refrescarPagina();
}

main();
