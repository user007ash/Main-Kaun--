import { Groq } from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getCharacterWithHints = async (selectedGenre) => {

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Pick a random character from the ${selectedGenre} genre and return 20 subtle hints (25 words max each) in the following format : { "character": "name", "hints": ["hint1", "hint2", ...] } and there should be nothing else than this in response.`
      }
    ],
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: false
  });

  return completion.choices[0].message.content;
};
