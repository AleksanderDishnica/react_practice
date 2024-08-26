const mongoose = require('mongoose');
const Yacht = require('./models/yacht');

const uri = 'mongodb+srv://adishnica31:root@yachtdb.jlhuc.mongodb.net/?retryWrites=true&w=majority&appName=yachtDB';

app.put('/yacht/:id', async (req, res) => {
    try {
        // 
        const updatedYacht = await Yacht.findByIdAndUpdate(
            req.params.id, // The yacht's ID
            {
                id: req.body.id,
                title: req.body.title,
                length: req.body.length,
                place: req.body.place,
                price: req.body.price,
                new: req.body.new,
                img: req.body.img
            },
            {
                new: true,                 // Return the updated document
                runValidators: true        // Run schema validation on the update
            }
        );

        if (!updatedYacht) {
            return res.status(404).json({ message: 'Yacht not found' });
        }

        res.json(updatedYacht);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});