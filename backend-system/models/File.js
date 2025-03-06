const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    filename: String,
    url: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model('File', FileSchema);
