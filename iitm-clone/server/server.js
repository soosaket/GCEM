const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

// Import Models
const Content = require('./models/Content');
const News = require('./models/News');
const Gallery = require('./models/Gallery');
const Department = require('./models/Department');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'https://gcem.vercel.app',
    'https://gcem-website.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

// Serve uploaded files statically
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static(uploadDir));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dce-clone')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Routes

// --- Image Upload ---
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ imageUrl });
});

// --- News API ---
app.get('/api/news', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/news', async (req, res) => {
    try {
        const newNews = new News(req.body);
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/news/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'News deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- Gallery API ---
app.get('/api/gallery', async (req, res) => {
    try {
        const photos = await Gallery.find().sort({ createdAt: -1 });
        res.json(photos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/gallery', async (req, res) => {
    try {
        const newPhoto = new Gallery(req.body);
        const savedPhoto = await newPhoto.save();
        res.status(201).json(savedPhoto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/gallery/:id', async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Photo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- Departments API ---
app.get('/api/departments', async (req, res) => {
    try {
        const departments = await Department.find().sort({ createdAt: -1 });
        res.json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/departments', async (req, res) => {
    try {
        const newDept = new Department(req.body);
        const savedDept = await newDept.save();
        res.status(201).json(savedDept);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/departments/:id', async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.json({ message: 'Department deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- Content API ---
app.get('/api/content/:section', async (req, res) => {
    try {
        const content = await Content.findOne({ section: req.params.section });
        res.json(content || {});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/content', async (req, res) => {
    try {
        const { section } = req.body;
        const updatedContent = await Content.findOneAndUpdate(
            { section },
            req.body,
            { new: true, upsert: true }
        );
        res.json(updatedContent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// --- Admin Login (Simple) ---
app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    // Hardcoded password for "Zero Code" simplicity
    if (password === (process.env.ADMIN_PASSWORD || 'admin123')) {
        res.json({ success: true, token: 'frontend-only-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
});


app.get('/', (req, res) => {
    res.send('GEC Madhubani API is running with MongoDB');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
