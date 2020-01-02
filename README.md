<h3 align="center">
  Desafio 2: Gympoint, o início
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>


## :rocket: Sobre o desafio

A aplicação é um app gerenciador de academia, o **Gympoint**.

Nesse primeiro desafio foi criado algumas funcionalidades básicas.

### Um pouco sobre as ferramentas

Aplicação do zero utilizando o [Express](https://expressjs.com/), além de configurar as seguintes ferramentas:

- Sucrase + Nodemon;
- Sequelize (PostgreSQL);

### Funcionalidades

Abaixo estão descritas as funcionalidades da aplicação.

#### 1. Autenticação

Permite que um usuário se autentique utilizando e-mail e uma senha.

Foi criado um usuário administrador utilizando a funcionalidade de [seeds do sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed), essa funcionalidade serve para criarmos registros na base de dados de forma automatizada.

Para criar um seed utilize o comando:

```js
yarn sequelize seed:generate --name admin-user
```

No arquivo gerado na pasta `src/database/seeds` adicione o código referente à criação de um usuário administrador:

```js
const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Administrador",
          email: "admin@gympoint.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
```

Agora execute:

```js
yarn sequelize db:seed:all
```

Agora você tem um usuário na sua base de dados, utilize esse usuário para todos logins daqui pra frente.

- A autenticação foi feita utilizando JWT.
- Foi realizado a validação dos dados de entrada;

#### 2. Cadastro de alunos

Permite que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.

O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.

O aluno não pode se autenticar no sistema, ou seja, não possui senha.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Jackson Passos
