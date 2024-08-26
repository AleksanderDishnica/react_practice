# React / Express / Mongo project
The project is separated in two folders: api and client<br />

## API folder
This is expressjs backend<br />

## client folder
This is react frontend<br />

### libraries
You will need to run ```npm i``` in both folders api and client<br />
client has two libraries: Axios and react-bootstrap<br />
api has three libraries: cors(in order to make API calls locally and bypass cors error) mongodb and mongoose<br />

### DB data
The database is called yachtDB and everything is setup already<br />
In case you cannot connect to the database or you want to write your own data you have insertData.js file<br />
Modify it as you need and run it in order to insert the data into the database using ```node insertData.js```<br />

### commands
To run the API you need to use the command from within the API folder ```node app.js```
To run the client you need to use the command from within the client folder ```npm start```

### nodemon
In case you do not want to run ```node app.js``` all the time, you can use nodemon which does the refresh every time you modify the files<br />
Run this nodemon command instead of node ```nodemon app.js```

### extra
You can use local json data instead of a database from the data folder