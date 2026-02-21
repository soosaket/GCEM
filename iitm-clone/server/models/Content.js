const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true,
        unique: true // e.g., 'hero', 'about', 'contact'
    },
    title: String,
    subtitle: String,
    body: String,
    images: [String], // Array of image URLs
    meta: {
        type: Map,
        of: String // Flexible key-value pairs for extra data
    }
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);
