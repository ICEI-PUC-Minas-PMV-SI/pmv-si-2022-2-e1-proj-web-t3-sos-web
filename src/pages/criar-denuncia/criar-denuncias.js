function main() {
  deslogaSeAdmin();
  preencheUsuarioNoMenu();
}

main();

document
  .getElementById("form_cria_denuncia")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const { nome, endereco, historia } = Object.fromEntries(form);
    const identificador = slugify(nome);

    const nomeExiste = denuncias.some(
      (denuncia) => denuncia.identificador === identificador
    );

    if (nomeExiste) {
      alert(
        `Já existe uma denúncia para o nome ${nome}. Você pode fazer comentários na página: ${COMENTARIOS_PAGINA}?identificador=${identificador}`
      );
      return;
    }

    const novaDenuncia = {
      identificador,
      nome,
      endereco,
      historia,
      status: statusDenuncia.PENDENTE,
      comentarios: [],
      votacao: {
        positivo: 0,
        negativo: 0,
      },
      responsavel: usuarioLogado.usuario,
    };

    denuncias.push(novaDenuncia);
    localStorage.setItem("denuncias", JSON.stringify(denuncias));
    alert("Denúncia criada com sucesso!");
    window.location.href = MINHAS_DENUNCIAS;
  });
