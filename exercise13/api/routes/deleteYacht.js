const express = require('express');
const router = express.Router();
const Yacht = require('../models/yacht');

router.delete('/deleteYacht/:id', async (req, res) => {
    try {
        const deletedYacht = await Yacht.findOneAndDelete({ id: req.params.id });
        if (deletedYacht) {
            res.json({ message: 'Yacht deleted successfully' });
        } else {
            res.status(404).json({ message: 'Yacht not found' });
        }
    } catch (error) {
        console.error('Error deleting yacht:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
