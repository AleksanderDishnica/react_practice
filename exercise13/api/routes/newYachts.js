const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const Yacht = require('../models/yacht');

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Route to get yachts that are new
router.get('/yachts/new/:new', async (req, res) => {
    try {
        const yachts = await Yacht.find({ new: req.params.new });
        res.json(yachts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

    // Route to get all yachts
    app.get('/yachts', async (req, res) => {
    });
});

module.exports = router;
