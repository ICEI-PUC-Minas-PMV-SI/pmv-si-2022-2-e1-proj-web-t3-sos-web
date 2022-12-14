# Plano de Testes de Software
----------------------------

. **Grupos de usuários escolhidos:** Desenvolvedores do Projeto

. **Ferramentas utilizadas:** Navegador Google Chrome, Brave .

Caso de teste  | CT 01 Cadastrar o usuário|
|------------|-------------------------------------------------|
| Requisito associado|RF-008	Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados pelo sistema|
|Objetivo do Teste| Verificar se o usuário consegue cadastrar seus dados de forma correta|
|Passos| 1- Acessar o endereço do site no navegador(GitHub);<br/> 2- Na tela de login, clicar em cadastrar;<br/> 3- Informar o nome completo, CPF, Email, Telefone, Data Nascimento, Usuário e senha, atento com a validação de  cada campo;<br/> 4- Clicar em cadastrar.   |      
|Critério de êxito | Obter o aviso, 'cadastro com sucesso' com todos os campos preenchidos corretamente, caso contrário abrirá uma janela com o aviso: "favor preencher os campos corretamente"  |

-----------------------
Caso de teste  | CT 02 Logar com usuário cadastrado|
|------------|-------------------------------------------------|
| Requisito associado|RF-008	Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados pelo sistema|
|Objetivo do Teste| Verificar se o usuário consegue logar no site com o seu usuário e senha cadastrados
|Passos|1- Acessar o endereço do site no navegador(GitHub);<br/> 2- Na tela de login, colocar o usuário e senha devidamente cadastrados;<br/> 3-Clicar no botão entrar.
|Critério de êxito | Obter o aviso: 'Bem-vindo' seguido do nome cadastrado e cair para a tela denúncias. Caso não for cadastrado ou errar o nome/usuário, irá aparecer uma mensagem de: usuário não encontrado |

--------------------------

Caso de teste  | CT 03 Recuperar senha 
|------------|-------------------------------------------------|
| Requisito associado|RF-010	Permitir que o usuário recupere sua senha |
|Objetivo do Teste| Testar se o usuário consegue recuperar sua senha com sucesso|
|Passos|1- Acessar o endereço do site no navegador(GitHub);<br/>  2- Na tela de login, clicar em: "Esqueceu sua senha?";<br/>  3 - Na tela de recuperar senha, inserir corretamente seu email;<br/> 4 - Abrir o email do SOS web na caixa de entrada do email inserido(verificar a caixa SPAM);<br/>  5 - clicar no link que irá aparecer abrindo uma nova página para inserir a nova senha;<br/>  6 - inserir e confirmar a nova senha;<br/> 7 - Voltar para a tela de Login
|Critério de êxito | Sua nova senha deverá funcionar na tela de Login |

---------------------------
Caso de teste  | CT 04 Entrada de usuários não cadastrados e consulta de  sites nocivos 
|------------|-------------------------------------------------------|
| Requisito associado|RF-003	A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito.<br/> 
|Objetivo do Teste| Verificar se o usuário sem cadastro consegue entrar para fazer consultas de site/emails nocivos |
|Passos|1 - Na tela principal de Login, clicar no botão: "Entrar como convidado";<br/>  2 - Na tela de denúncias, testar a  busca;<br/> 3 - clicar em cima do respectivo site a ser consultado  e testar se o modal com a informações do site irá abrir;<br/> 4 - Caso queira voltar para a tela de login , clicar no ícone no canto superior direito, fazer login|
|Critério de êxito | Usuário sem cadastro deve consultar os sites sem intercorrências |

----------------------------
Caso de teste  | CT 05 Criando e adicionando minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado|RF-001	A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos.<br/> RF-004	A aplicação deve permitir que um usuário logado possa consultar o status da denúncia.<br/> RF-007	Toda denúncia realizada pelo usuário entrará com status de pendente/em análise|
|Objetivo do Teste| Verificar a funcionalidade de cadastrar denúncias  |
|Passos|1 - Realizar o Login;<br/>  2 - clicar no painel esquerdo no ícone "minhas denúncias";<br/> 3 - Na tela de minhas denúncias, clicar no círculo com o '+', indo para a tela de criar denúncias;<br/> 4 - Em criar denúncias, preencher corretamente os campos : "Nome da instituição/vendedor", "Link ou email da denúncia" e "Conte sua história" - detalhando o caso a ser denunciado;<br/> 5 - Clicar em finalizar denúncia;<br/> 6 - O card deverá ser adicionado na parte de minhas denúncias. Nele teremos um ícone com uma lixeira no qual o usuário poderá deletar caso queira. 
|Critério de êxito | Um card contendo os dados, em minhas denúncias, deverá ser adicionado com suas funcionalidades testadas. |
----------------------------
Caso de teste  | CT 06 Tela denúncias e minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado| RF-002 A aplicação deve permitir que um usuário cadastrado possa utilizar a paginação das denúncias e escolher a página que deseja.<br/>RF-004 A aplicação deve permitir que um usuário logado possa consultar o status da denúncia. |
|Objetivo do Teste| Verificar a funcionalidade da tela de denúncias e minhas denúncias |
|Passos| 1 - Realizar o Login;<br/>  2- Na tela denúncias, usuário poderá pesquisar pelo nome no campo de pesquisa;<br/>  3 - Clicando no card com os site/emails denunciados, abrirá um modal detalhando a denúncia clicada;<br/>  4 - Clicando em minhas denúncias no painel esquerdo, teremos as denúncias adicionadas com o seu status de pendente ou aprovada;<br/> 5 - Clicar em sair você será deslogado.
 |Critério de êxito | Êxito no teste da procura das denúncias e  teste dos botões  |
--------------------------

Caso de teste  | CT 07 Tela do Usuário
|------------|-------------------------------------------------------|
| Requisito associado| RF-005 A aplicação deve permitir que um usuário logado gerencie o seu cadastro, realize/acompanhe sua denúncia e altere o status dela. (deletar denúncias em análise). |
|Objetivo do Teste| Gerenciar os dados do cadastrado |
|Passos| 1 - Realizar o Login;<br/>  2 - Na tela denúncias, clicar no nome/foto do usuário(canto superior direito);<br/>  3 - Na tela usuário, clicar no ícone de editar correspondente;<br/>  4 - Adicionar o texto no novo campo que irá aparecer;<br/> 5 - Clicar em salvar.
 |Critério de êxito | Dados do usuário editado com sucesso  |
---------------------------------------

Caso de teste  | CT 08 Tela do Administrador
|------------|-------------------------------------------------------|
| Requisito associado| RF-006	Somente um administrador logado poderá decidir a ação ser tomada após as denúncias de tal suspeito.<br/>RF-011	O sistema deverá possuir a funcionalidade de login de administrador.|
|Objetivo do Teste| Testar as funcionalidades do Administrador de aprovar ou reijetar uma denúncia |
|Passos| 1 - Realizar o Login do administrador ( usuário: admin, senha: 1,2,3,4,5,6);<br/>  2 - Sistema irá direcionar para a tela Deúncias exclusiva do admin;<br/>  3 - Na tela denúncias admin, podemos utilizar o campo de busca e/ou os filtros de pendente, aprovada e negada para a procura das denúncias;<br/>  4 - No campo abaixo, podemos clicar no ícone de um olho ao lado das denúncias para melhor detalhamento e clicar 'x' para reprovar e 'v' para aprová-las, utilizando a  aba de ação;<br/> 5 - Clicar em sair para deslogar.
 |Critério de êxito | Tarefa do Administrador bem sucedida|  |
 
 -------------------------------------
 
 Caso de teste  | CT 09 Tela dos comentários
|------------|-------------------------------------------------------|
| Requisito associado| RF-009	Permitir que o usuário leia e/ou comente uma denúncia desde que esteja logado. |
|Objetivo do Teste| Usuário ler ou comentar uma denúncia com sucesso |
|Passos| 1 - Realizar o Login;<br/>  2 - Na parte das denúncias, clica no ícone(um olho na parte de ação) que deseja comentar;<br/> 3 -  Um modal com detalhes irá abrir ae é só clicar no ícone de uma seta para ir na tela dos comentários;<br/>  4 - na parte dos comentários, é só clicar em escrever comentário ;<br/> 5 - Escreva seu comentário e clique em enviar.
 |Critério de êxito | Seu comentário irá aparecer na tela dos comentários |
---------------------------------------


 Caso de teste  | CT 10 Responsividade
|------------|-------------------------------------------------------|
| Requisito associado| RNF-001	A aplicação deve ser responsiva |
|Objetivo do Teste| verificar se o site é responsivo para diversos tamanhos de tela|
|Passos| 1 - Abrir o site na página a ser testada e logar (no caso do vídeo será a Tela Denuncias );<br/>  2 - Aperta a tecla F112 e testar os tamanhos de resoluçoes;<br/>  3 - Testar em outras paginas do projeto.
 |Critério de êxito | Site responsivo para as resoluções aplicadas  |
---------------------------------------
 
 Caso de teste  | CT 11 Paginação das denúncias
|------------|-------------------------------------------------------|
| Requisito associado| RF-002  A aplicação deve permitir que um usuário cadastrado possa utilizar a paginação das denúncias e escolher a página que deseja.|
|Objetivo do Teste| verificar se páginação de várias denúncias funciona|
|Passos| 1 - logar no site );<br/>  2 - Abrir a tela de Denúncias e verificar a paginação.<br/>  
 |Critério de êxito | Com mais de 10 denúncias a página muda  |

--------------------------------------------


 Caso de teste  | CT 12 API para feedback das denúncias
|------------|-------------------------------------------------------| 
| Requisito associado| RF-012	O sitema enviará um email para o usuário com o status da denúncia(aprovada ou negada)|
|Objetivo do Teste| verificar se o email sobre o status da sua denúncia chega ao usuário|
|Passos| 1 - Logar como admin ;<br/>  2 - na tela de denúncias, rejeitar ou aprovar uma denúncia.<br/>  3 - verificar o email do usuário se o status da denúncia chegou.
 |Critério de êxito | email do sistema recebido  |
