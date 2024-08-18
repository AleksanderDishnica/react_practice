const express = require('express')
const cors = require('cors');  // Import the cors middleware
const app = express()
const port = 3001

const mongoose = require('mongoose');

const uri = 'mongodb+srv://adishnica31:root@yachtdb.jlhuc.mongodb.net/?retryWrites=true&w=majority&appName=yachtDB';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Import route
const getYacht = require('./routes/getYacht')
const getYachts = require('./routes/getYachts')

// Enable CORS for all routes
app.use(cors());

// The API routes
app.use('/api', getYacht);
app.use('/api', getYachts);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})