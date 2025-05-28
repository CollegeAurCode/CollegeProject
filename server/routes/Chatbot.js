const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/ask', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY', {
      contents: [{ parts: [{ text: prompt }] }],
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
});

module.exports = router;
