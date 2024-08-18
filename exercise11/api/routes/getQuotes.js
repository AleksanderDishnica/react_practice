const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Route to get quote by ID
router.get('/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);

    // Read the JSON file
    const filePath = path.join(__dirname, '../data/index.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }

        // Parse JSON data
        const quotes = JSON.parse(data);

        // Find quote by ID
        const quote = quotes.find(u => u.id === quoteId);

        if (quote) {
            res.json(quote);
        } else {
            res.status(404).json({ message: 'Quote not found' });
        }
    });
});

module.exports = router;
