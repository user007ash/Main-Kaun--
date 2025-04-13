import express from 'express';
import { getRandomCharactersWithHints } from '../groqClientResponse.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const output = await getRandomCharactersWithHints();
    const json = JSON.parse(output); 
    res.json(json);
  } catch (err) {
    console.error("Error in Groq API:", err.message);
    res.status(500).json({ error: "Failed to get characters from Groq" });
  }
});

export default router;
