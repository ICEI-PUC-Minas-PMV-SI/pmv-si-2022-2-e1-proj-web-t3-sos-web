# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

**PERSONA 1:** Wander tem 69 anos, é administrador e recebeu um e-mail do que parecia ser a sua fatura de TV a cabo. Ao abrir o e-mail, deparou-se com um boleto contendo seus dados todos corretos e então pagou a fatura. Posteriormente descobriu que aquele e-mail enviado não era de sua operadora de TV a cabo e ele pagou um boleto falso.

**PERSONA 2:** Ana Lúcia tem 38 anos, é uma fisioterapeuta que está em busca de comprar móveis para nova clínica, e está em busca de produtos acessíveis, porém nunca realizou compras online. Ao consultar em seu smartphone, se depara com uma imensa variedade de produtos, entretanto, possui um pé atrás sobre a segurança de seus dados.

**PERSONA 3:** Mateus Ferreira Ribeiro, 31 anos, solteiro, pequeno empresário, graduado em administração. Montou sua loja virtual de venda de eletrônicos, adquiriu um pequeno estoque e cadastrou seu perfil como vendedor no mercado livre e shopee. Futuramente almeja entrar no marketplace das grandes lojas.  Seu objetivo é virar um grande empresário e expandir seus negócios para lojas físicas. Seu desafio é ter ganho de credibilidade e confiança nas redes. Tem medo de usuários fakes e uma das suas vontade é ter uma ferramenta disponível para prevenção de golpes virtuais, tanto para ele quanto para seus clientes. 

**PERSONA 4:** Andrea Nunes, 27 anos, formada em Pedagogia, porém trabalha como recepcionista em uma clínica de odontologia. Encontrou uma oferta pela internet com preço baixíssimo e imperdível. Ao abrir o link, ela foi redirecionada para um site muito similar a uma das grandes empresas de compra e venda. Após isso, colocou os seus dados e finalizou a compra usando seu cartão de crédito. Seu produto no entanto, nunca chegou. Ela constatou que tinha caído em um golpe. O site possuía o link e a interface quase que idênticos ao site original, diferenciando apenas por uma letra a mais na url. Ao falar com as autoridades, disseram que seria muito difícil localizar os estelionatários uma vez que o site estava fora do ar. O banco não ressarciu seu dinheiro.

**PERSONA 5:** Lucas Henrique, tem 26 anos, formado em técnico de eletromecânica e atualmente cursa engenharia de sistemas, trabalha como técnico de PCM em uma empresa farmacêutica referência no Brasil. Ele esta à procura de ferramentas de manutenção. Ao pesquisar, encontrou um conjunto de ferramentas de uma marca internacional em um site brasileiro, mas com um valor bem elevado. Pesquisando pelo mesmo produto em outros sites, encontrou o mesmo em um site estrangeiro para importação com opção de frete para o Brasil. Porém ele tem receio de realizar importações, pois já foi vítima de golpe, onde comprou um produto de uso pessoal e não recebeu, outra vez ele recebeu um produto de marca paralela. Hoje ele tem certo receio de realizar importações através de sites na internet.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Wander              | Verificar veracidade de e-mails    |Para assim poder pagar boletos verdadeiros|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

**HISTÓRIA 1:**

**HISTÓRIA 2:**

**HISTÓRIA 3:** Eu, Lucas Henrique, sou resposnável pela manutenção na empresa onde trabalho. Sempre procuro por produtos com custo x benefício e em fornecedores confiáveis. Necessito de alguma aplicação onde me mostre a veracidade dos fornecedores nacionais e internacionais, assim realizando compras seguras onde eu receba o produto e que o mesmo tenha as especificações registradas no anúncio.

**HISTÓRIA 4:** Eu, Andrea, uso a internet constantemente, embora não faça compras online com frequência. Gostaria de saber quando uma oferta seria confiável e se o link é de fato seguro. Isso poderia me prevenir de estar acessando um site que apenas quer pegar os meus dados e o meu dinheiro, sem ao menos me entregarem o produto esperado.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário registre sites suspeitos| ALTA |  |
|RF-002| Exibir sites com mais números de denúncias| MÉDIA | |
|RF-003| Ferramenta onde o usuário possa realizar busca específica por site| ALTA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
