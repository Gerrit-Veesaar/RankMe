const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// ✅ Connect to MongoDB
const MONGO_URI = 'mongodb+srv://Gerrit:GV33saaR0@cluster0.2052t1f.mongodb.net/RankMe?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/api/message', (req, res) => {
  res.send('Hello from /api/message!');
});

// ✅ Import auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
