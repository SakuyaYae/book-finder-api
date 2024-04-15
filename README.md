# book-finder-api
### Endpoints for books
## /api/books used to get all books

## /api/books/{id} used to find a specifik book by id {id} is a Mongodb objectId

### Basic setup
## To be able to run the server to get the api working you need to run "npm i express mongoose" in a terminal open in the root folder of the project to get the node_modules folder. when you have the node_modules folder you need to change the conectionString variable in server.js to your own conection string

### Seedng the database
## Seeding the database is done by runing the seeder.js file
## keep in mind that the basic setup must have been done or you will get a error when running the seeder.js file
