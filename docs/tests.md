# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.



. **Grupos de usuários escolhidos:** Devs do Projeto

. **Ferramentas utilizadas:** Navegador Google Chrome

Caso de teste  | CT 01 Cadastrar o usuário
|------------|-------------------------------------------------|
| Requisito associado|RF-008	Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados pelo sistema|
|Objetivo do Teste| Verificar se o usuário consegue cadastrar seus dados de forma correta|
|Passos|1- Acessar o endereço do site no navegador(GitHub)/ 2- Na tela de login, clicar em cadastrar; / 3- Informar o nome completo, CPF, Email, Telefone, Data Nascimento, Usuário e senha, atento com a validação de cada campo; / 4- Clicar em cadastrar;|
|Critério de êxito | Obter o aviso, 'cadastro com sucesso' com todos os campos preenchidos corretamente, caso contrário abrirá uma janela com o aviso:"favor preencher os campos corretamente"  |


Caso de teste  | CT 02 Logar com usuário cadastrado
|------------|-------------------------------------------------|
| Requisito associado|RF-008	Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados pelo sistema|
|Objetivo do Teste| Verificar se o usuário consegue logar no site com o seu usuário e senha cadastrados
|Passos|1- Acessar o endereço do site no navegador(GitHub) / 2- Na tela de login, colocar o usuário e senha devidamente cadastrados; / 3-Clicar no botão entrar.
|Critério de êxito | Obter o aviso: 'Bem-vindo' seguido do nome cadastrado e cair para a tela denúncias. Caso não for cadastrado ou errar o nome/usuário, irá aparecer uma mensagem de: usuário não encontrado |



Caso de teste  | CT 03 Recuperar senha 
|------------|-------------------------------------------------|
| Requisito associado|RF-010	Permitir que o usuário recupere sua senha esquecida|
|Objetivo do Teste| Testar se o usuário consegue recuperar sua senha com sucesso|
|Passos|1- Acessar o endereço do site no navegador(GitHub) / 2- Na tela de login, clicar em: "Esqueceu sua senha?"; / 3-Na tela de recuperar senha, inserir corretamente seu email / 4- Abrir o email do SOS web na caixa de entrada do email inserido(verificar a caixa SPAM) / 5 - clicar no link que irá aparecer abrindo uma nova página para inserir a nova senha / 6 - inserir e confirmar a nova senha / 7 - Voltar para a tela de Login
|Critério de êxito | Sua nova senha deverá funcionar na tela de Login |


Caso de teste  | CT 04 entrada de usuários não cadastrados e consulta de  sites nocivos 
|------------|-------------------------------------------------------|
| Requisito associado|RF-003	A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito / RF-002  A aplicação deve permitir que um usuário qualquer ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias e com filtros que vão de baixa a alta nocividade.|
|Objetivo do Teste| Verificar se o usuário sem cadastro consegue entrar para fazer consultas de site/emails nocivos |
|Passos|1 - Na tela principal de Login, clicar no botão: "Entrar como convidado" / 2 - Na tela de denúncias, testar a procura por nome e os filtros de baixa, média e alta nocividade 3 - clicar em cima do respectivo site a ser consultado  e testar se o modal com a informações do site irá abrir 4 - Caso queira voltar para a tela de login , clicar no ícone no canto superior direito, fazer login|
|Critério de êxito | Usuário sem cadastro deve consultar os sites sem intercorrências |


Caso de teste  | CT 05 adicionando minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado|RF-001	A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos / RF-004	A aplicação deve permitir que um usuário logado possa consultar o status da denúncia / RF-007	Toda denúncia realizada pelo usuário entrará com status de pendente/em análise|
|Objetivo do Teste| Verificar a funcionalidade de cadastrar denúncias  |
|Passos|1 - Realizar o Login / 2- clicar no painel esquerdo no ícone "minhas denúncias" / 3 - Na tela de minhas denúncias, clicar no círculo com o '+', indo para a tela de criar denúncias; / 4 - Em criar denúncias, preencher corretamente os campos : "Nome da instituição/vendedor", "Link ou email da denúncia" e "Conte sua história" - detalhando o caso a ser denunciado.Clique em anexar, se caso tiver algum documento sobre / 5 - Clicar em finalizar denúncia. / 6 - O card deverá ser adicionado na parte de minhas denúncias. Nele teremos um ícone com uma lixeira no qual o usuário poderá deletar caso queira 
|Critério de êxito | Um card contendo os dados, em minhas denúncias, deverá ser adicionado com suas funcionalidades testadas. |

Caso de teste  | CT 06 Tela denúncias e minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado| RF-002 A aplicação deve permitir que um usuário cadastrado ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias e com filtros que vão de baixa a alta nocividade / RF-004 A aplicação deve permitir que um usuário logado possa consultar o status da denúncia |
|Objetivo do Teste| Verificar a funcionalidade da tela de denúncias e minhas denúncias |
|Passos| 1 - Realizar o Login / 2- Na tela denúncias, usuário poderá pesquisar pelo nome no campo de pesquisa / 3 - Nos botões abaixo do campo de procura, poderá ordenar a procura com os filtros de baixa, média e alta nocividade / 4 - Clicando no card com os site/emails denunciados, abrirá um modal detalhando a denúncia clicada / 5 - clicando em minhas denúncias no painel esquerdo, teremos as denúncias adicionadas com o seu status de pendente ou aprovada./ 6 - clicar em sair você será deslogado.
 |Critério de êxito | Êxito no teste da procura das denúncias e  teste dos botões  |


Caso de teste  | CT 07 Tela do Usuário
|------------|-------------------------------------------------------|
| Requisito associado| RF-005 A aplicação deve permitir que um usuário logado gerencie o seu cadastro, realize/acompanhe sua denúncia e altere o status dela. (deletar denúncias em análise) |
|Objetivo do Teste| Gerenciar os dados do cadastrado |
|Passos| 1 - Realizar o Login / 2- Na tela denúncias, clicar no nome/foto do usuário(canto superior direito) / 3 - Na tela usuário, clicar no ícone de editar correspondente / 4 - Adicionar o texto no novo campo que irá aparecer / 5 - Clicar em salvar.
 |Critério de êxito | Dados do usuário editado com sucesso  |



 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
