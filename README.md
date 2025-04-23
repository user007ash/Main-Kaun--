Got it! Here's the regenerated and polished `README.md` for your project, correctly using the name **Main-Kaun** (always in brackets):

---

# 🧠 Main-Kaun

**Main-Kaun** is a fun twist on the classic guessing game. In this version, **you** ask the questions — and the AI gives you intelligent hints to help you guess the character! Think of it as **Reverse Akinator**, where you're in control, powered by a blazing-fast LLM backend.

🔗 **Live Demo**: [https://main-kaun-game.netlify.app](https://main-kaun-game.netlify.app)  
🔗 **GitHub Repo**: [github.com/user007ash/Main-Kaun-Game](https://github.com/user007ash/Main-Kaun-Game)

---

## 🚀 Features

- 🧠 **Reverse Akinator Gameplay** — You ask questions, and the AI responds with smart hints.
- ⚡ **Groq Cloud LLama Model** — Real-time AI answers using one of the fastest LLMs.
- 🧩 **Hint-based Guessing** — Get better with each question and try to find the character.
- 🖥️ **React (Vite) Frontend** — Smooth, fast, and responsive.
- 📦 **No External API Dependencies** — Just pure LLM logic and React for a lean setup.

---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend
- React (with Vite)
- React Router DOM
- Tailwind CSS 
- LocalStorage (for game persistence)

### 🔙 Backend
- Node.js + Express
- Groq Cloud's LLama model for LLM responses
- `.env`-based config (no databases used)

---

## 📁 Project Structure

```
main-kaun-game/
├── backend/
│   ├── .env
│   ├── server.js
│   ├── groqClientResponse.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   └── Pages/
│   │       ├── CharacterGuess.jsx
│   │       ├── Home.jsx
│   │       ├── NotFound.jsx
│   │       └── Result.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── vite.config.js
├── README.md
└── .gitignore
```

---

## 🧪 How It Works

1. User selects a genre and starts the game.
2. The app picks a random character internally.
3. You ask yes/no questions in natural language.
4. The backend (via Groq + LLama) processes your questions and returns helpful hints.
5. You keep guessing until you hit the right answer or run out of attempts.
6. You receive feedback on how close you were to the real answer.

---

## 🧰 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/user007ash/Main-Kaun-Game.git
cd MAIN-KAUN
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
GROQ_API_KEY=your_groq_api_key_here
```

Then start the server:

```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 📌 To-Do

- [ ] Write a fully custom backend without LLM help
- [ ] Add support for more genres and categories
- [ ] Improve hint logic to be more dynamic
- [ ] Track question and hint history
- [ ] Polish game UI/UX

---

## 🙏 Acknowledgements

Thanks to Groq Cloud for providing an ultra-low-latency LLama model experience and to GPT for jumpstarting backend development.

---

## 📃 License

MIT — free to use, modify, and distribute.

--
