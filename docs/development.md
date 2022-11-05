# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

|ID    | Descrição do Requisito  | Responsável | Artefato |
|------|-----------------------------------------|----| ----|
|RF-001 | A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos |  |../criar-denuncia/criar-denuncia.html |
|RF-002| A aplicação deve permitir que um usuário cadastrado ordene a exibição de sites tendo como padrão a ordenação de sites/e-mails/vendedores/produtos com maiores números de denúncias |  |../denuncias/denuncias.html |
|RF-003| A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito |  |../denuncias-convidado/denuncias-convidado.html |
|RF-004| A aplicação deve permitir que um usuário logado possa consultar o status da denúncia |  |../minhas-denuncias/minhas-denuncias.html |
|RF-005| A aplicação deve permitir que um usuário logado gerencie o seu cadastro, realize/acompanhe sua denúncia e altere o status dela. (deletar denúncias em análise |  |../usuario/usuario.html  |
|RF-006| Somente um administrador logado poderá decidir a ação ser tomada após as denúncias de tal suspeito |  | ../admin/admin.html |
|RF-007| Toda denúncia realizada pelo usuário entrará com status de pendente/em análise |  |../minhas-denuncias/minhas-denuncias.html|
|RF-008| Todo cadastro de usuários deve ser validado pelo sistema |  | ../login/login.html  ../cadastro/cadastro.html |
|RF-009| Permitir que o usuário comente uma denúncia desde que esteja logado |  |../addcoments/addcoments.html | 
|RF-010| Permitir que o usuário recupere sua senha esquecida |  | ../recuperar-senha/recuperar-senha.html |

# Descrição das estruturas:

*Cadastro do Usuário*

|Nome  | Tipo  | Descrição | Exemplo |
|------|-----------------------------------------|----| ----|
| Nome Completo| Texto | Dados pessoais | João Augusto|
|CPF |  |  | |
|Email |  |  | |
|Telefone|  |  | |
|Usuario |  |  | |
|Senha|  |  | |

*Cadastro de Denúncias*
|Nome  | Tipo  | Descrição | Exemplo |
|------|-----------------------------------------|----| ----|
|Instituição/vendedor| Texto | colocar nome da loja, vendedor| Magazine luiza  |
|Link/email |  |  | |
|Cnpj/Cpf|  |  | |
|História |  |  | |


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
