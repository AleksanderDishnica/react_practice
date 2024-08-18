const express = require('express');
const router = express.Router();
const Yacht = require('../models/yacht');

router.get('/yacht/:id', async (req, res) => {
    try {
        const yacht = await Yacht.findOne({ id: req.params.id });
        if (yacht) {
            res.json(yacht);
        } else {
            res.status(404).json({ message: 'Yacht not found' });
        }
    } catch (error) {
        console.error('Error fetching yacht:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;