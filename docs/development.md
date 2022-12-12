# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

|ID    | Descrição do Requisito  | Responsável | Artefato |
|------|-----------------------------------------|----| ----|
| RF-001 | A aplicação deve permitir que um usuário autenticado registre sites/e-mails/vendedores suspeitos                                                               | Túlio       | ./src/pages/criar-denuncia/criar-denuncia.html                  |
| RF-002 | A aplicação deve permitir que um usuário cadastrado possa utilizar a paginação das denúncias e escolher a página que deseja.                                   | Michael     | ./src/pages/denuncias/denuncias.html                            |
| RF-003 | A aplicação deve permitir que um usuário (logado ou não) possa realizar busca específica por site/e-mail/vendedor suspeito                                     | Michael     | ./src/pages/denuncias-convidado/denuncias-convidado.html        |
| RF-004 | A aplicação deve permitir que um usuário logado possa consultar o status da denúncia                                                                           | Hugo        | ./src/pages/minhas-denuncias/minhas-denuncias.html              |
| RF-005 | A aplicação deve permitir que um usuário logado gerencie o seu cadastro, realize/acompanhe sua denúncia e altere o status dela. (deletar denúncias em análise) | Hugo/Rafael | ./src/pages/usuario/usuario.html                                |
| RF-006 | Somente um administrador logado poderá decidir a ação ser tomada após as denúncias de tal suspeito                                                             | Lucas       | ./src/pages/admin/admin.html                                    |
| RF-007 | Toda denúncia realizada pelo usuário entrará com status de pendente                                                                                            | Lucas       | ./src/pages/minhas-denuncias/minhas-denuncias.html              |
| RF-008 | Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados pelo sistema                                                            | Todos/Túlio | ./src/pages/login/login.html ./src/pages/cadastro/cadastro.html |
| RF-009 | Permitir que o usuário comente uma denúncia desde que esteja logado                                                                                            | Túlio       | ./src/pages/adicionar-comentarios/adicionar-comentarios.html    |
| RF-010 | Permitir que o usuário recupere sua senha esquecida                                                                                                            | Marcos      | ./src/pages/recuperar-senha/recuperar-senha.html                |
| RF-011 | O sistema deverá possuir a funcionalidade de login de administrador                                                                                            | ALTA        | Lucas                                                           | ./src/pages/login/login.html |

# Descrição das estruturas:

_Cadastro do Usuário_

| Nome          | Tipo     | Descrição                                       | Exemplo                              |
| ------------- | -------- | ----------------------------------------------- | ------------------------------------ |
| Nome          | Texto    | Dados pessoais(nome do usuário)                 | João Augusto                         |
| Nascimento    | Data     | Dados pessoais(data de nascimento)              | 25/12/1998                           |
| Cpf           | Texto    | Número do documento                             | 088.124.050-88                       |
| Email         | Texto    | Endereço eletrônico                             | aluno@email.com                      |
| Telefone      | Número   | Meio de comunicação                             | 21 0800-8000                         |
| Usuário       | Texto    | Nome da pessoa que irá utilizar a plataforma    | JONAS13                              |
| Senha         | Texto    | Meio de confirmação de acesso visando segurança | senha1300                            |
| Administrador | Booleano | Para saber se o usuário é administrador ou não  | false                                |
| Foto          | Texto    | A foto salva do usuário no formato de base64    | data:image/png;base64,iVBORw0KGgo... |

_Cadastro de Denúncias_
|Nome | Tipo | Descrição | Exemplo |
|------|-----------------------------------------|----| ----|
| Nome | Texto | Nome da instituição/vendedor que o usúario levou o golpe ou suspeita de ser malioso | Magizee Luiza |
| Identificador | Texto | Nome da instituição/vendedor que será usada para identificar a denúncia | magazinee-luiza |
| Endereço | Texto | Contempla o endereço de email/link | www.magazinEEluiza.com.br |
| História | Texto | Campo destinado ao usúario regristar o ocorrido | Realizei uma compra neste site e o produto nunca chegou. |
| Status| Texto | Campo enumerado como "Pendente", "Aprovada" ou "Negada" | Pendente |
| Responsável| Texto | Campo que armazena o usuário que registrou a denúncia | usuario-teste |
| Comentários | Array de _Comentários_ | Campo que armazena os comentários realizados na denúncia | [{mensagem: 'É golpe mesmo!', usuario: 'Jorge', cpf: '274.312.110-66'}] |

_Comentários_
|Nome | Tipo | Descrição | Exemplo |
|------|-----------------------------------------|----| ----|
| Mensagem | Texto | Texto do que foi escrito no comentário | Esse email me mandava spam com links duvidosos |
| Usuario | Texto | Nome do usuário que fez o comentário | Jorge |
| Cpf | Texto | Cpf do usuário que fez o comentário (esse campo serve como identificador e não é mostrado na tela) | 088.124.050-88 |

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
