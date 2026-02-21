const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    alt: String,
    category: String, // 'Campus', 'Sports', 'Events'
    featured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', GallerySchema);
