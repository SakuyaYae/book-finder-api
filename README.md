### book-finder-api

## p.s This task is trying to get the garde VG

## All endpoints requires the adress to the local server you use. example http://localhost:4444. All are rate limited to 500 requests in 15 minuits 

### Endpoints for books

## Thease end points are used to handel CRUD(create, read,update,delete) request 

## /api/books used to get all books
## /api/books/{id} used to find a specifik book by id, {id} is a Mongodb objectId.
## /api/books/{id} as a PUT request requires a request body whit a corecct bookObject.{id} is a Mongodb objectId.
## /api/books/{id} as a delete is used to remove/delete a specifik book by id, {id} is a Mongodb objectId.
## The querry parameter page works on /api/books and gives a paginated reuslt where you will get the page that us specified in the param. example /api/books?page=3 would give you page 3 in the response.


### Endpoints for filtering

## The end points for filtering are used for filtering books so that you only gett books that have the filter you use in them example if you fillter by genre and type action only books whit the genre action will be in the response.

## /api/filter/title/{title} used to filter books by title, {title} is the title of the book to filter for.
## /api/filter/author/{author} used to filter books by author, {author} is the author to filter for.
## /api/filter/genre/{genre} used to filter books by genre {genre} is the genre to filter for.

### Endpoints to get sorted results

## The end points for sorting will sort the response in alphabethickal order based on the end point used.

## /api/sort/title is used to get all books soted by title.
## /api/sort/author is used to get all books soted by author.
## /api/sort/genre is used to get all books soted by genre.


### Basic setup

## To be able to run the server to get the api working you need to run "npm i express mongoose" in a terminal open in the root folder of the project to get the node_modules folder. when you have the node_modules folder you need to add a .env file that have a key named conectionString whit the value of your conection string to your MongoDB database.


### Seedng the database

## Seeding the database is done by runing the seeder.js file.
## keep in mind that the basic setup must have been done or you will get a error when running the seeder.js file.


### Cleanng the database
## /api/cleaner as a deleate is used to empty the database.


### Database connection relateded API routs

## These end points are only used for testing the systems respones to losing the database connection .

## /api/testing/connection/close: closes the connection to the database.
## /api/testing/connection/open: opens a connection to the database.
## /api/testing/connection/state: gives the state the connection is in whit nummbers.