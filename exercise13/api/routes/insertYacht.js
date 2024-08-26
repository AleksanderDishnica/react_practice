// routes/yachtRoutes.js
const express = require('express');
const app = express.Router();
const Yacht = require('../models/yacht');

// Define your routes here
app.post('/insertYacht', async (req, res) => {
    // console.log(req.body)
    const { title, place, length, price, img } = req.body;

    let id = await Yacht.countDocuments({})

    try {
        const newYacht = new Yacht({
            id: id + 1,
            title: title,
            place: place,
            length: length,
            price: price,
            new: false,
            img: img
        });

        await newYacht.save();
        res.status(201).json({ message: 'Yacht added successfully!' });
    } catch (error) {
        console.error('Error inserting yacht:', error);
        res.status(500).json({ message: 'Failed to add yacht.' });
    }
});

module.exports = app; // Export the router instance
