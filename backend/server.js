import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getCharacterWithHints } from "./groqClientResponse.js"; //
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/random-character/:selectedGenre", async (req, res) => {
  const { selectedGenre } = req.params;

  try {
    const characterData = await getCharacterWithHints(selectedGenre);
    console.log(characterData)
    res.json({ characterData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
