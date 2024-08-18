const mongoose = require('mongoose');
const Yacht = require('./models/yacht');

const uri = 'mongodb+srv://adishnica31:root@yachtdb.jlhuc.mongodb.net/?retryWrites=true&w=majority&appName=yachtDB';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB Atlas');

        const yachts = [
            { id: 1, title: '2013 Sunseeker Predator 53', length: 60, place: "Charlottenlund, Denmark", price: 10000, img: "https://images.boatsgroup.com/resize/1/11/96/9091196_20231017043959334_1_XLARGE.jpg?w=1028&h=685&t=1697542912000&format=webp" },
            { id: 2, title: '2024 Lagoon 42', length: 42, place: "Charlottenlund, Denmark", price: 1000000, img: "https://images.boatsgroup.com/resize/1/88/67/6808867_20180815040902966_1_XLARGE.jpg?w=1028&h=685&t=1701200194000&format=webp" },
            { id: 3, title: '2010 Moody DS 45e', length: 45, place: "Rostock, Mecklenburg-Western Pomerania", price: 1000000, img: "https://images.boatsgroup.com/resize/1/71/88/9197188_20240116065424543_1_XLARGE.jpg?w=800&h=533&t=1705417026000&format=webp" },
            { id: 4, title: '2021 Princess V50', length: 51, place: "Vedbæk, Denmark", price: 1000000, img: "https://images.boatsgroup.com/resize/1/98/64/2021-princess-v50-power-9449864-20240712043954348-1_XLARGE.jpg?w=800&h=533&t=1720784437000&format=webp" },
            { id: 5, title: '2024 Cranchi settantotto 78', length: 42, place: "Constanta, Romania", price: 1000000, img: "https://images.boatsgroup.com/resize/1/24/96/7482496_20200615074233094_1_XLARGE.jpg?w=800&h=533&t=1699451182000&format=webp" },
            { id: 6, title: '2009 Formula 382 FASTech', length: 38, place: "Rhineland-Palatinate", price: 1000000, img: "https://images.boatsgroup.com/resize/1/28/46/6622846_20180220104911033_1_XLARGE.jpg?w=800&h=533&t=1519152634000&format=webp" },
        ];

        await Yacht.insertMany(yachts);
        console.log('Yachts inserted');

        mongoose.connection.close();
    })
    .catch(err => console.error('Error:', err));