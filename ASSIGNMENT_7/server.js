const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Feedback = require('./models/Feedback');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentFeedbackDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// POST feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: 'Feedback saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const data = await Feedback.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
