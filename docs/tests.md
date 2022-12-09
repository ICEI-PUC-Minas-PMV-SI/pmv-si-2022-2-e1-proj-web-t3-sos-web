# Plano de Testes de Software
----------------------------

. **Grupos de usuários escolhidos:** Devs do Projeto

. **Ferramentas utilizadas:** Navegador Google Chrome

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
| Requisito associado|RF-010	Permitir que o usuário recupere sua senha esquecida|
|Objetivo do Teste| Testar se o usuário consegue recuperar sua senha com sucesso|
|Passos|1- Acessar o endereço do site no navegador(GitHub);<br/>  2- Na tela de login, clicar em: "Esqueceu sua senha?";<br/>  3 - Na tela de recuperar senha, inserir corretamente seu email;<br/> 4 - Abrir o email do SOS web na caixa de entrada do email inserido(verificar a caixa SPAM);<br/>  5 - clicar no link que irá aparecer abrindo uma nova página para inserir a nova senha;<br/>  6 - inserir e confirmar a nova senha;<br/> 7 - Voltar para a tela de Login
|Critério de êxito | Sua nova senha deverá funcionar na tela de Login |

---------------------------
Caso de teste  | CT 04 entrada de usuários não cadastrados e consulta de  sites nocivos 
|------------|-------------------------------------------------------|
| Requisito associado|RF-003	A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito.<br/> RF-002  A aplicação deve permitir que um usuário qualquer ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias e com filtros que vão de baixa a alta nocividade.|
|Objetivo do Teste| Verificar se o usuário sem cadastro consegue entrar para fazer consultas de site/emails nocivos |
|Passos|1 - Na tela principal de Login, clicar no botão: "Entrar como convidado";<br/>  2 - Na tela de denúncias, testar a procura por nome e os filtros de baixa, média e alta nocividade;<br/> 3 - clicar em cima do respectivo site a ser consultado  e testar se o modal com a informações do site irá abrir;<br/> 4 - Caso queira voltar para a tela de login , clicar no ícone no canto superior direito, fazer login|
|Critério de êxito | Usuário sem cadastro deve consultar os sites sem intercorrências |

----------------------------
Caso de teste  | CT 05 adicionando minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado|RF-001	A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos.<br/> RF-004	A aplicação deve permitir que um usuário logado possa consultar o status da denúncia.<br/> RF-007	Toda denúncia realizada pelo usuário entrará com status de pendente/em análise|
|Objetivo do Teste| Verificar a funcionalidade de cadastrar denúncias  |
|Passos|1 - Realizar o Login;<br/>  2 - clicar no painel esquerdo no ícone "minhas denúncias";<br/> 3 - Na tela de minhas denúncias, clicar no círculo com o '+', indo para a tela de criar denúncias;<br/> 4 - Em criar denúncias, preencher corretamente os campos : "Nome da instituição/vendedor", "Link ou email da denúncia" e "Conte sua história" - detalhando o caso a ser denunciado.Clique em anexar, se caso tiver algum documento sobre;<br/> 5 - Clicar em finalizar denúncia;<br/> 6 - O card deverá ser adicionado na parte de minhas denúncias. Nele teremos um ícone com uma lixeira no qual o usuário poderá deletar caso queira. 
|Critério de êxito | Um card contendo os dados, em minhas denúncias, deverá ser adicionado com suas funcionalidades testadas. |
----------------------------
Caso de teste  | CT 06 Tela denúncias e minhas denuncias
|------------|-------------------------------------------------------|
| Requisito associado| RF-002 A aplicação deve permitir que um usuário cadastrado ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias e com filtros que vão de baixa a alta nocividade.<br/>RF-004 A aplicação deve permitir que um usuário logado possa consultar o status da denúncia |
|Objetivo do Teste| Verificar a funcionalidade da tela de denúncias e minhas denúncias |
|Passos| 1 - Realizar o Login;<br/>  2- Na tela denúncias, usuário poderá pesquisar pelo nome no campo de pesquisa;<br/> 3 - Nos botões abaixo do campo de procura, poderá ordenar a procura com os filtros de baixa, média e alta nocividade;<br/>  4 - Clicando no card com os site/emails denunciados, abrirá um modal detalhando a denúncia clicada;<br/>  5 - clicando em minhas denúncias no painel esquerdo, teremos as denúncias adicionadas com o seu status de pendente ou aprovada;<br/> 6 - clicar em sair você será deslogado.
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
 |Critério de êxito | Tarefa do usuário bem sucedida|  |
 
 -------------------------------------
 
 Caso de teste  | CT 09 Tela dos comentários
|------------|-------------------------------------------------------|
| Requisito associado| RF-009	Permitir que o usuário leia e/ou comente uma denúncia desde que esteja logado. |
|Objetivo do Teste| Usuário ler ou comentar uma denúncia com sucesso |
|Passos| 1 - Realizar o Login;<br/>  2 -);<br/>  3 - ;<br/>  4 - ;<br/> 5 - 
 |Critério de êxito | Dados do usuário editado com sucesso  |
---------------------------------------



# Registro de Testes de Software

### Teste Vídeo:  CT 01 Cadastrar o usuário 

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t3-sos-web/blob/main/docs/videos/Cadastro2.mp4

- Resultado: Tela de cadastro funcionado corretamente , tanto nos inputs como no ato de cadastrar.

**Situação final:**
- [x] Aprovado
- [ ] Reprovado




## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
