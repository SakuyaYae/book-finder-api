# book-finder-api
### Endpoints for books
## /api/books used to get all books
## /api/books/{id} used to find a specifik book by id, {id} is a Mongodb objectId.
## /api/books/{id} as a put requeres a request body whit a corecct bookObject
## /api/books/{id} as a delete is used to remove/delete a specifik book by id, {id} is a Mongodb objectId.

### Endpoints for filtering
## /api/filter/title/{title} used to filter books by title, {title} is the title of the book to filter for.
## /api/filter/author/{author} used to filter books by author, {author} is the author to filter for.
## /api/filter/genre/{genre} used to filter books by genre {genre} is the genre to filter for.

### Endpoints to get sorted results
## /api/sort/title is used to get all books soted by title
## /api/sort/author is used to get all books soted by author
## /api/sort/genre is used to get all books soted by genre

### Basic setup
## To be able to run the server to get the api working you need to run "npm i express mongoose" in a terminal open in the root folder of the project to get the node_modules folder. when you have the node_modules folder you need to add a .env file that have a key named conectionString whit the value of your conection string

### Seedng the database
## Seeding the database is done by runing the seeder.js file
## keep in mind that the basic setup must have been done or you will get a error when running the seeder.js file
