const express = require('express');
const router = express.Router();
const Yacht = require('../models/yacht');
const axios = require('axios');

// Define the update route
router.patch('/yacht/:id', async (req, res) => {
    try {
        const yachtId = req.params.id;

        // Log request body to debug
        console.log('Request Body:', req.body);

        // Only update the fields provided in the request body
        const updateFields = {};
        if (req.body.title) updateFields.title = req.body.title;
        if (req.body.length) updateFields.length = req.body.length;
        if (req.body.place) updateFields.place = req.body.place;
        if (req.body.price) updateFields.price = req.body.price;
        if (req.body.new !== undefined) updateFields.new = req.body.new;
        if (req.body.img) updateFields.img = req.body.img;

        // Perform the update
        const updatedYacht = await Yacht.findOneAndUpdate(
            { id: yachtId },
            { $set: updateFields },  // Use $set to update fields
            { new: true, runValidators: true }
        );

        // Handle case where yacht was not found
        if (!updatedYacht) {
            return res.status(404).json({ message: 'Yacht not found' });
        }

        // Return success response
        res.status(200).json({ message: 'Yacht updated successfully', yacht: updatedYacht });
    } catch (err) {
        console.error('Error during yacht update:', err.message);
        res.status(500).json({ error: err.message });
    }
});


// Export the router
module.exports = router;
