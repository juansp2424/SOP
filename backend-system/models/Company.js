const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    companyKey: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Company', CompanySchema);
