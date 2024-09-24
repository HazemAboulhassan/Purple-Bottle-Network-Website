const express = require('express');
const router = express.Router();
const Offer = require('../models/offer');

// Get all offers
router.get('/', async(req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new offer
router.post('/', async(req, res) => {
    const offer = new Offer({
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
    });

    try {
        const newOffer = await offer.save();
        res.status(201).json(newOffer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;