// models/contact.js
const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minlength: [10, 'Message must be at least 10 characters long']
    }
}, { timestamps: true });

// Create the Contact model using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
