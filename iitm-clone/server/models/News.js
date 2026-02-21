const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: String, // Keeping as String for flexibility with "July 12, 2024" format
    category: String, // 'Awards', 'Research', 'Events'
    image: String,
    summary: String,
    content: String // Full article content if needed later
}, { timestamps: true });

module.exports = mongoose.model('News', NewsSchema);
