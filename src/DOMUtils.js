class DOMUtils {
  // Classe criada para aumentar a produtividade e diminuir
  // a quantidade de chamadas repetitivas aos métodos da
  // DOM API tornando o código menos verboso e poluído
  
  // Como todo classe utilitária, certos métodos podem acabar não sendo reutilizados e
  // reaproveitados como mo propósito inicial. Por isso, métodos utilizados apenas
  // uma vez serão passíveis de refatoração e deixarão de existir nesta classe

  constructor() {}

  static adicionarTexto(seletor, texto) {
    // Adiciona o texto ao elemento recebido
    const elementoPai = document.querySelector(seletor);
    elementoPai.appendChild(document.createTextNode(texto));
  }

  static removerElementosPorClasse(nomeClasse){
    // Remove todos os elementos que possuem a classe específicada
    const elementos = document.getElementsByClassName(nomeClasse);
    while(elementos.length){
      elementos[0].parentNode.removeChild(elementos[0]);
    }
}

  static escutarEventoPorId(id, evento, cb) {
    // Esse método é um açúcar sintático e escuta a 
    // eventos do elemento que está referenciado pelo ID
    document.getElementById(id).addEventListener(evento, (e) => {
      return cb(e);
    })
  }

  static escutarEventoPorClasse(classe, evento, cb) {
    // Esse método escuta a um evento para cada 
    // elemento que está referenciado pela classe
    const buttons = document.getElementsByClassName(classe)
    for (let button of buttons) {
      button.addEventListener(evento, (e) => {
        return cb(e);
      });
    }
  }

  static criarElementos(seletor, quantidade) {
    // Cria elementos de forma serial e os retorna
    const elementos = [];
    for(let i=0; i<quantidade; i++) {
      elementos.push(document.createElement(seletor));
    }
    return elementos;
  }

  static criarNosDeTexto(arrayTextos) {
    // Cria nós de texto de forma serial e os retorna
    return arrayTextos.map(texto => {
      return document.createTextNode(texto);
    })
  }

  static adicionarClasses(elementos, nomeClasse) {
    // Adiciona a classe passada para o multíplos elementos  
    return elementos.map(elemento => {
      elemento.classList.add(nomeClasse);
      return elemento;
    });
  }

  static adicionarFilhosAosNos(nos, filhos) {
    // Esse método serve para adicionar um filho a um nó
    // de forma serial, como no caso de uma table
    // Cada elemento pai deve ter um filho correspondente 
    // tal que no[n] <- filho[n]

    if(!nos || !filhos) {
      throw new Error('Necessário passar os dois parâmetros!');
    } else if(!nos.length || !filhos.length) {
      throw new Error('Parâmetros devem ser array e ter mais de um item!');
    } else if(nos.length !== filhos.length) {
      throw new Error('A quantidade de nós filhos dever ser a mesma de nós pais!');
    }

    return nos.map((no, i) => {
      no.appendChild(filhos[i]);
      return no;
    });
  }
}