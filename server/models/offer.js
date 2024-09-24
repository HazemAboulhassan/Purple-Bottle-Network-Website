const { default: mongoose } = require("mongoose");

const mongoose = require(mongoose);

const OfferSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
});

module.exports = mongoose.model('Offer', OfferSchema);