const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    name: { type: String },
    capital: { type: String }
});

module.exports = mongoose.model('country', countrySchema);