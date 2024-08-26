const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const Yacht = require('../models/yacht');

const uri = process.env.MONGO_URI;

// Get all yachts from the database
mongoose.connect(uri, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Route to get yacht by ID
router.get('/yachts', async (req, res) => {
    try {
        const yachts = await Yacht.find();
        res.json(yachts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

    // Route to get all yachts
    app.get('/yachts', async (req, res) => {
    });

    // Read the JSON file
    // const filePath = path.join(__dirname, '../data/yachts.json');

    // fs.readFile(filePath, 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).json({ message: 'Server error' });
    //     }

    //     // Parse JSON data
    //     const yachts = JSON.parse(data);

    //     if (yachts) {
    //         res.json(yachts);
    //     } else {
    //         res.status(404).json({ message: 'Yachts not found' });
    //     }
    // });
});

module.exports = router;
