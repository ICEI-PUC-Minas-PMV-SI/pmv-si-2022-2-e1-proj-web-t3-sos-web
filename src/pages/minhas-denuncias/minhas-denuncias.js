// Deletar
function myDelete() {
  const deletando = document.getElementById("d-a");
  deletando.remove();
}

// JSON.Stringfly (conversão para linguagem do navegador) && JSON.Parse (conversão para JavaScript)

function adicionarCards(denuncias) {
  // Criar Denuncias

  for (let i = 0; i < denuncias.length; i++) {
    // Variável selecionando Objeto do HTML
    var divPrincipal = document.querySelector(".denounce");

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
    card.appendChild(titulo);

    card.appendChild(document.createElement("div"));
    var resto = card.getElementsByTagName("div")[1];
    resto.setAttribute("style", "margin-left: 25px;");

    var ztatus = document.createElement("h3");
    var contentZtatus = document.createTextNode("Em Analise");
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
  // COLOCAR CÓDIGO AQUI
  // PASSO 2:
  // necessário pegar a div com class "denounce" e colocar numa variável
  // criar uma div e colocar numa variável, adicionar a classe chamada "mensagem"
  // na div "mensagem", adicionar um texto falando que não existe denúncias ainda
  // adicionar div "mensagem" dentro da div "denounce"
  // criar uma estilação pra essa div "mensagem" no arquivo css
}

function main() {
  deslogaSeAdmin();
  preencheUsuarioNoMenu();

  const denunciasDoUsuario = denuncias.filter(
    (denuncia) => denuncia.responsavel === usuarioLogado.usuario
  );

  // PASSO 1:

  // se existem denuncias, vai chamar a função adicionarCards
  // ou então se não existem denuncias, vai chamar a função adicionarMensamgem;

  adicionarCards(denunciasDoUsuario);

  adicionarMensagemPadrao();
}

main();
