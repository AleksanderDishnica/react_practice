const mongoose = require('mongoose');

const yachtSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    length: { type: Number, required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
});

const Yacht = mongoose.model('Yacht', yachtSchema);

module.exports = Yacht;
