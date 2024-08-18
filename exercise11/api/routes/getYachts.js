const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Route to get yacht by ID
router.get('/yachts', (req, res) => {
    // Read the JSON file
    const filePath = path.join(__dirname, '../data/yachts.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }

        // Parse JSON data
        const yachts = JSON.parse(data);

        if (yachts) {
            res.json(yachts);
        } else {
            res.status(404).json({ message: 'Yachts not found' });
        }
    });
});

module.exports = router;
