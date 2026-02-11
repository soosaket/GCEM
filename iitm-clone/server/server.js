const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const newsData = [
    {
        id: 1,
        title: "IIT Madras tops NIRF Rankings 2024",
        date: "July 15, 2024",
        category: "Awards",
        image: "https://via.placeholder.com/300x200",
        summary: "IIT Madras retains the top spot in the overall category for the sixth consecutive year."
    },
    {
        id: 2,
        title: "New Centre for Quantum Information launched",
        date: "July 12, 2024",
        category: "Research",
        image: "https://via.placeholder.com/300x200",
        summary: "A state-of-the-art facility to advance research in quantum computing and communication."
    },
    {
        id: 3,
        title: "Convocation 2024 held with grandeur",
        date: "July 10, 2024",
        category: "Events",
        image: "https://via.placeholder.com/300x200",
        summary: "Over 2500 students graduated in the 61st convocation ceremony."
    }
];

const eventsData = [
    {
        id: 1,
        title: "International Conference on AI",
        date: "Aug 05, 2024",
        location: "ICSR Hall",
        time: "10:00 AM"
    },
    {
        id: 2,
        title: "Research Park Open House",
        date: "Aug 12, 2024",
        location: "IITM Research Park",
        time: "09:00 AM"
    },
    {
        id: 3,
        title: "Alumni Meet 2024",
        date: "Sept 01, 2024",
        location: "OAT",
        time: "05:00 PM"
    }
];

// Routes
app.get('/api/news', (req, res) => {
    res.json(newsData);
});

app.get('/api/events', (req, res) => {
    res.json(eventsData);
});

app.get('/', (req, res) => {
    res.send('IIT Madras Clone API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
