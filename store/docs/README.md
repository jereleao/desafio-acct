<h1 align="center">
      <a href="#" alt="DESAFIO ACCT - GRUPO 13 - Hiring Coders 2021"> DESAFIO ACCT - GRUPO 13 - Hiring Coders 2021 </a>
</h1>

<h3 align="center">
     Desafio: Desenvolver um projeto de website de acordo com a temática ACCT, com uso da API VTEX IO e fazer a ligação entre ela e a API AWS GATEWAY.
O grupo para a entrega do desafio, também utilizou a API AWS Lambda em conjunto com o Amazon DynamoDB.
</h3>

Tabela de conteúdos
=================
<!--ts-->
   * Sobre o projeto
   * Desenvolvimento do Backend - API AWS e VTEX
   * Contribuidores
<!--te-->


## 💻 Sobre o projeto

Para a conclusão do projeto, devemos concluir os seguintes requisitos:

- Utilizando o VTEX IO, reproduzir o site da ACCT, patrocinadora do Hiring Coders 2021;
- Criar uma API para servir os projetos e os pedidos vendidos (API VTEX);
- Criar uma API para gerenciamento de venda ativa na AWS, com o objetivo de gerenciar os clientes que se cadastraram em uma lead ou os clientes que
já compraram no e-commerce, fazendo com que a equipe de pós-venda possa
entrar em contato com os clientes tentando fazer venda Ativa/Casada ou
UPSELL;
- Integrar ambas as APIs com o objetivo de, ao concluir uma compra, verificar se o usuário que finalizou é o mesmo usuário cadastrado na lead da API AWS e, caso seja, marcar este usuário que era somente um prospect na lead agora como cliente; e
- Criar uma página para trazer a lista das leads cadastradas na API Gateway na
AWS, listando os clientes cadastrados. Opcionalmente, implementar essa página no admin.



---

## ⚙️ Desenvolvimento do Backend - API AWS e VTEX

### - **API VTEX**
A implementação da API VTEX foi realizada através da criação de um service app, responsável por ouvir os eventos de compras finalizadas.

O serviço conta com dois middlewares:
- **getEmail**: Ouve o evento de compra e recebe a orderId através do context. Com base na orderId, realiza a requisição das informações sobre a ordem através do cliente OMS. Por fim, com base no userProfileId recebido nas informações da ordem, faz a requisição do email através do cliente Profile e o repassa para o context para acesso pelo próximo middleware.

- **leadUpdater**: A partir do email recebido através do context, realiza a requisição à API AWS e verifica se o referido email está cadastrado na base de dados. Caso esteja, altera o status da lead de "PROSPECT" para a "CLIENT".

Além do service app, a API VTEX também conta com uma camada GraphQL responsável por dois processos:
- **Cadastro de Leads**: Através do formulário disponível no site, o usuário realiza o cadastro de suas informações. Essas, por sua vez, são verificadas pela camada GraphQL que, posteriormente, realiza uma mutation para a API AWS.

- **Buscas das Leads**: Para a implementação da página de exibição das Leads cadastradas, a camada GraphQL realiza a requisição à API AWS para receber a informação de todas as Leads cadastradas.


### - **API AWS**
A implementação da API AWS foi realizada utilizando os serviços API AWS Gateway, API Lambda Function e DynamoDB.

Através da API AWS Gateway, os dados são recebidos pela função lambda que, por sua vez, faz a conexão com o DynamoDB.

Métodos disponíveis de requisição à API AWS:
- GET;
- PUT;
- POST.

## 👨‍💻 Contribuidores



<table>
  <tr>
    <td align="center"><a href="https://github.com/gabrielaraujr"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/36744423?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Araújo</b></sub></a><br /></td>
  <td align="center"><a href="https://github.com/JerryLion91"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/73080834?v=4" width="100px;" alt=""/><br /><sub><b>Jeremias Leão</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/arielyth"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/52684278?v=4" width="100px;" alt=""/><br /><sub><b>Arielle Cardoso
</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Franklin-Siqueira"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86517033?v=4" width="100px;" alt=""/><br /><sub><b>Franklin Siqueira</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/igor7x7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80541299?v=4" width="100px;" alt=""/><br /><sub><b>Igor Barbosa</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/hugooleal"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77586151?v=4" width="100px;" alt=""/><br /><sub><b>Hugo Leal</b></sub></a><br /></td>
    
  </tr>
  <tr>
   <td align="center"><a href="https://github.com/isaCSF"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87619544?v=4" width="100px;" alt=""/><br /><sub><b>Isadora Silva</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ambitencourt"><img style="border-radius: 50%;" src="https://ca.slack-edge.com/T02CG6LJLMP-U02BP80CLBH-acda0369d2d0-512" width="90px;" alt=""/><br /><sub><b>Maria Luiza Andrade</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ambitencourt"><img style="border-radius: 50%;" src="https://scontent.fssa5-1.fna.fbcdn.net/v/t1.18169-9/72920_395081970525336_1562693111_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7NBO2XrPV6kAX_Zv_Ig&_nc_ht=scontent.fssa5-1.fna&oh=bf3bf42c6003ab26813c0a861286478d&oe=6151708B" width="100px;" alt=""/><br /><sub><b>Adriano Bitencourt</b></sub></a><br /></td>
    
  </tr>
</table>
