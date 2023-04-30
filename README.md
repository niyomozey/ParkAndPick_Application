# Livestock Management Application
 The system should include a slaughterhouse management
feature that allows the system to track and monitor the number of animal heads, stock,
and slaughterhouse origins.
I have used `Nodejs` to buld restfull API of this applicaiton with the help of it's framework `Express`.I have also used `postgresql` databse to save entities of slaughter house and animal. Initialy to run this application you should have the following services well intalled.
1. Node
2. Postgres database

# App set-up locally

1. run `npm i` or `npm install`
2. Create database in pg-admin
3. Open `config/config.json` and ad the database credentials in the development, test and production. The credentials include database user, password, host, dialect, name.

I have created migrations, seeders and seed data for testing. To use them you need the following commands:


- To make it simple, I have created scripts for the npx commands in the 'package.json'

4. `npm run make-model` for creating a user model
5. `npm run migrate` to migrate the model
6. `npm run seed` to insert the default data(seed data) into the database. This command initialize user role and permision, user table.
7. `npm start` or `npm run dev` to start application.
7. Done, now you are ready to go!

## Access API

Follow these link for more about API.
- [Animal](./Animal.md)
- [Slaughter House](./Animal.md)

### Features

| HTTP Method | Endpoint                   | Description                                     |
| :---------- | :------------------------- | :---------------------------------------------- |
| GET         | /                          | Default route                                   |
| POST        | /api/v1/auth/signup        | User can create an account                      |
| POST        | /api/v1/auth/login        | User can sign in                                |
| POST        | /api/v1/shouse/       | Find all slaughter house                          |
| GET       | /api/v1/shouse/:name      | Find Slaugher house by name                           |
| GET         | /api/v1/animal/             | Find all animal                          |
| GET         | /api/v1/animal/count/Kimironko     | Count animal by Slaughter house                          |
| POST      | /api/v1/shouse/      | Register Slaugher houser  |
| POST      | /api/v1/animal/      | Register animal  |
| DELETE      | /api/v1/shouse/:id    | Delete registered Slaugher houser  |

### Tools used

- Server side Framework: [Node JS](https://nodejs.org/)/[Express](https://expressjs.com/)
- Linting Library: [ESLint](https://eslint.org)
- Style Guide: [Airbnb](https://github.com/airbnb/javascript) and [Prettier](https://prettier.io/)
- Testing Framework: [Mocha](https://mochajs.org/)
- TDD assertion library: [Chai](https://www.chaijs.com)
- Documentation Tools: [Swagger](https://swagger.io/tools/swagger-ui/)
- Database : [Postgresql](https://www.postgresql.org/)
- ORM : [Squelize](https://sequelize.org/)
### Set up environment variable

- SECRET: secrete word use when system is generating token
- DATABASE_URL: `database connection string. example: postgresql://postgres:12345@localhos/localhost`
- PORT: `3006`

Authorized by
[Moise Niyonkuru](https://github.com/niyomozey)




