import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import randomCharacterRoute from './routes/randomCharacterRoute.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Route
app.use('/api/random-character', randomCharacterRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
