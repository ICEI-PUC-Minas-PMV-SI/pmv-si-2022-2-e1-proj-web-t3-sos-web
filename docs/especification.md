# Especificações do Projeto

## Personas
| **Wander**             |                                 |                       |
|--------------------|---------------------------------|-----------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t3-sos-web/blob/main/docs/img/Wander.jpg)|**Idade:** 69 anos - **Ocupação:** Administrador.|**Aplicativos:** Whatsapp, Facebook e Gmail.
|**Motivações:**  Wander possui a necessidade de realizar seus pagamentos de maneira mais prática.|**Frustações:** Baseiam-se na falta de confibialidade e de segurança em relação aos e-mails recebidos.|**Hobbies:** Ler, conversar com a família e caminhar.|

| **Ana Lucia**          |                                 |                       |
|--------------------|---------------------------------|-----------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t3-sos-web/blob/main/docs/img/Ana%20Lucia.jpg)|**Idade:** 38 anos - **Ocupação:** Fisioterapeuta.|**Aplicativos:** Whatsapp, Facebook, Instagram e aplicativos de Compras.
|**Motivações:** Ana Lúcia está em busca de comprar móveis e equipamentos para sua nova clínica.|**Frustações:** Consiste na constante insegurança em relação aos seus dados pessoais na internet.|**Hobbies:** Filmes, viajar com a família, e dançar.|

| **Mateus**             |                                 |                       |
|--------------------|---------------------------------|-----------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t3-sos-web/blob/main/docs/img/Mateus.jpg)|**Idade:** 31 anos - **Ocupação:** Pequeno Empresário.|**Aplicativos:** Whatsapp, Facebook, Insagram e Twitter.
|**Motivações:** Mateus Montou sua loja virtual de venda de eletrônicos, adquiriu um pequeno estoque e cadastrou seu perfil como vendedor no mercado livre e shopee. Futuramente almeja entrar no marketplace das grandes lojas.  Seu objetivo é virar um grande empresário e expandir seus negócios para lojas físicas..|**Frustações:**  Seu desafio é ter ganho de credibilidade e confiança nas redes. Tem medo de usuários fakes e uma das suas vontade é ter uma ferramenta disponível para prevenção de golpes virtuais, tanto para ele quanto para seus clientes. |**Hobbies:** Jogar Video-game, sair com os amigos, e festejar.|

| **Andrea Nunes**       |                                 |                       |
|--------------------|---------------------------------|-----------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t3-sos-web/blob/main/docs/img/AndreaNunes.jpg)|**Idade:** 27 anos - **Ocupação:** Pedagoga.|**Aplicativos:** Whatsapp, Insagram e Pinterest.
|**Motivações:** Andrea busca trazer comodidade e praticidade ao seu dia-a-dia, e recentemente começou a cogitar a realização de compras online.|**Frustações:** Ela gostaria de saber quando um vedendor, hospedado em um site confiável, entrega o produto que realmente está sendo anunciado |**Hobbies:** Viajar, ver filmes e ouvir música.|
## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Wander              | Ter certeza de que o e-mail seja verdadeiro | Para realizar pagamentos confiáveis | 
|Ana Lúcia           | Ter confiança para realizar compras em sites |Para não ter meus dados pessoais fraudados |
|Mateus Ferreira     | Ter ganho de credibilidade, garantindo seus clientes | Vender seus produtos |
|Andrea Nunes        | Ter confiança em vendedores/produtos | Para receber o que realmente é esperado | 


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001 | A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos| ALTA | |
|RF-002| A aplicação deve permitir que um usuário qualquer ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias| MÉDIA | Michael |
|RF-003| A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito| ALTA | Michael |
|RF-004| A aplicação deve permitir que um usuário logado possa consultar o status da denúncia |BAIXA| | Hugo |
|RF-005| A aplicação deve permitir que um usuário logado gerencie o seu cadastro, realize/acompanhe sua denúncia e altere o status dela. (deletar denúncias em análise |ALTA| | Hugo / Rafael |
|RF-006| Somente um administrador logado poderá decidir a ação ser tomada após as denúncias de tal suspeito |ALTA| | |
|RF-007| Toda denúncia realizada pelo usuário entrará com status de pendente/em análise |MÉDIA| | |
|RF-008| Todo cadastro de usuários deve ser validado pelo sistema |ALTA| | |
|RF-009| Permitir que o usuário comente uma denúncia desde que esteja logado |BAIXA| | |
|RF-010| Permitir que o usuário recupere sua senha esquecida |BAIXA|  Marcos |
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva  | MÉDIA | 
|RNF-002| A aplicação deve ser compatível com os principais navegadores utilizados atualmente |ALTA|
|RNF-003| A aplicação deve garantir a proteção de dados pessoais do usuário respeitando a LGPD (Lei Geral de Proteção de Dados) |ALTA|
|RNF-004| A aplicação deve garantir a autenticidade do usuário ao realizar o cadastro |ALTA|
|RNF-005| O design da aplicação deve ser de fácil entendimento |MÉDIA|
|RNF-006| A aplicação deve garantir que o usuário cadastrado consiga realizar uma denúncia. |ALTA|
|RNF-007| A aplicação deve garantir que o usuário não-cadastrado consiga consultar denúncias. |ALTA|
## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Somente usuários maiores de idade (+18) possam efetuar cadastro|
|02| A partir de 5 denúncias o site/e-mail/vendedor/produto suspeito será exibido na blacklist|
