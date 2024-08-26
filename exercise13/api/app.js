const express = require('express')
const cors = require('cors');  // Import the cors middleware
const app = express()
const port = 3001

const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
app.use(express.json());
// Import route
const getYacht = require('./routes/getYacht')
const getYachts = require('./routes/getYachts')
const newYachts = require('./routes/newYachts')
const insertYacht = require('./routes/insertYacht')
// const updateYacht = require('./routes/updateYacht')

// Enable CORS for all routes
app.use(cors());

// The API routes
app.use('/api', getYacht);
app.use('/api', getYachts);
app.use('/api', newYachts);
app.use('/api', insertYacht);
// app.use('/api', updateYacht);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})