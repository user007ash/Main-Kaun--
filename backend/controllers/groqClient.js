import { askGroq } from "./groqClient.js";

const prompt =
  "Give me 5 popular Marvel characters with image URLs as a JSON array of objects like this: [{name: 'Iron Man', image: 'https://...'}]";

const main = async () => {
  const response = await askGroq(prompt);
  setTimeout(() => {
    console.log("the settimeout is running.");
    console.log("Groq Response:\n", response);
    console.log("the settimeout is response is done");
  }, 3000);
};

main();
