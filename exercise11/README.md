# React / Express / Mongo project
The project is separated in two folders

## API
This is expressjs backend

## client
This is react frontend

### libraries
You will need to run ```npm i``` in both folders api and client
client has two libraries: Axios and react-bootstrap
api has three libraries: cors(in order to make API calls locally and bypass cors error) mongodb and mongoose

### DB data
The database is called yachtDB and everything is setup already
In case you cannot connect to the database or you want to write your own data you have insertData.js file
Modify it as you need and run it in order to insert the data into the database using ```node insertData.js```

### nodemon
In case you do not want to run ```node app.js``` all the time, you can use nodemon which does the refresh every time you modify the files

### extra
You can use local json data instead of a database from the data folder