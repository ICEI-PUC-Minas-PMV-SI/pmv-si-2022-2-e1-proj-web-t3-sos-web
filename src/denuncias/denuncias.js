
function fullFillTables(denunciations) {
  if(denunciations?.length) {
    const table = document.querySelector('table');
    for(let i=0; i<denunciations.length; i++) {
      const tr = document.createElement('tr');
      
      const tdAddress = document.createElement('td');
      const tdName = document.createElement('td');
      const tdHarmfulness = document.createElement('td');

      const aAddress = document.createElement('a');
      const aName = document.createElement('a');
      const aHarmfulness = document.createElement('a');

      const address = document.createTextNode(denunciations[i].endereco);
      const name = document.createTextNode(denunciations[i].nome);
      const harmfulness = document.createTextNode('Alta');

      aAddress.appendChild(address);
      aName.appendChild(name);
      aHarmfulness.appendChild(harmfulness);

      tdAddress.appendChild(aAddress);
      tdName.appendChild(aName);
      tdHarmfulness.appendChild(aHarmfulness);

      tr.append(tdAddress, tdName, tdHarmfulness);
      table.append(tr);


      const totalDenuncias = denunciations.length;
      const records = document.querySelector('.records');
      records.appendChild(document.createTextNode(`Total de registros: ${totalDenuncias}`));

      const totalPaginas = totalDenuncias/10;
      const pages = document.querySelector('.pages');
      pages.appendChild(document.createTextNode(`Página 1 de ${totalPaginas}`));
    }
  } else {
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const emptyDataMessage = document.createTextNode('Ainda não há nenhuma denúncia!');
    td.appendChild(emptyDataMessage);
    tr.appendChild(td); 
    table.appendChild(td);

    const pagination = document.querySelector('.pagination');
    const nextPage = document.querySelector('.next-pagination');
    pagination.removeChild(nextPage);

    const pages = document.querySelector('.pages');
    pages.appendChild(document.createTextNode(`Página 1 de 1`));

    const records = document.querySelector('.records');
    records.appendChild(document.createTextNode(`Total de registros: 0`));
  }
}

function listenToEvents(denunciations) {
  document.addEventListener('click', e => {
    if (e.target.className === 'img-search') {
      const input = document.getElementsByClassName('input-base');
      const searchValue = input[0]?.value;
      const filteredDenunciations = denunciations.filter(denunciation => {
        (denunciation?.nome ?? '').includes(searchValue)
      })
      console.log(filteredDenunciations);
      fullFillTables(filteredDenunciations);
    }
  })
}

function removeDenunciations() {
  const e = document.querySelector("table");
  const childs = e.childNodes;
  // console.log(childs,length)
  console.log(childs);
  childs.forEach((child) => {
    console.log(child.nodeName)
    // if(child.nodeName) {
    //   child.remove();
    // }
  })
}

function main() {
  const denuncias = JSON.parse(localStorage.getItem('denuncias'));
  console.log(denuncias);
  fullFillTables(denuncias);
  listenToEvents(denuncias);

  removeDenunciations();
}

main();