# Welcome to flight service

## Project setup

- clone the project on your local

- Excecute `npm install` on the same path.
- Creatate a `.env` files in the same root and add the following variable. - `PORT=3000`.
- Inside `src/config` folder create a new file and the `config.json` and add the followig code.

  ```
  {
  "development": {
    "username": "root",
    "password": "password",
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }

  ```

- once you have add the you have to go to src folder from the terminal then excute ` npx sequelize db:create`

  /
  -src/
  index.js//server
  models/
  controllers/
  middlewares/
  services/
  utils/
  config/

  - test/[later]

/
-flights
/models
/controllers
