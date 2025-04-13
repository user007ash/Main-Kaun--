import { Groq } from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getRandomCharactersWithHints = async () => {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `For each of the following genres: ["Marvel", "Anime", "Games", "WWE", "Cartoon"], pick a random character from each. For every character, return 5 subtle hints (25 words max each) in this JSON format: { genre: { character: "name", hints: ["hint1", "hint2", ...] } }`
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
