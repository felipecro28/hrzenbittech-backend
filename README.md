# Hrzenbittech Backend Challenge

## Application description:

The application is a REST API made using NEST.JS, Sequelize and SQL, hosted on Heroku and developed for the Hrzenbittech backend challenge.

<br>

## Tools and Utilities:

- NodeJS
- Framework: Nest.Js
- Relational Datastore: SQLite
- ORM: Sequelize
- Deploy: Heroku

<br>

To install and run the API, you can run the following command by copying it and pasting on your terminal.


```
git clone https://github.com/felipecro28/hrzenbittech-backend && cd hrzenbittech-backend && npm install
```

<br>

## API INITIALIZATION:
To run the application you might use the following command:

```
npm start
```

<br>


## API ROUTES:

The API is able to to implement all CRUD operations, you can check the routes bellow:
<br>

### GET ALL USERS:

Use the HTTP method Get on <b>`"api url" + /api/user`</b>
<br>
<br>

### GET USER BY ID:

Use the HTTP method Get on <b>`"api url" + /api/user/id`</b>
<br>
<br>

### Add user:
Use the HTTP method POST on <b>`"api url" + /api/user/id`</b> with all required data to create an user. You can check a JSON example bellow:

```json
{
    "name": "Test",
    "email": "test@email.com",
    "message": "test message"
}

```
<br>

### Delete an User:
Use the HTTP method DELETE on <b>`"api url" + /api/user/id`</b>
<br>
<br>



<h2 id="grupo">Aut
  - [Felipe Oliveira](https://www.linkedin.com/in/carvalho-felipe28/)
 
