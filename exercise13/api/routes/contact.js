// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');  // Import the Contact model

// Route to handle contact form submissions
router.post('/contact', async (req, res) => {
    try {
        // Create a new contact from the form data
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });

        // Save the contact to the database
        await newContact.save();

        // Return a success response
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error('Error submitting contact form:', err);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
