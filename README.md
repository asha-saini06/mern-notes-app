# MERN Notes App

A **full-stack notes management application** built with **MongoDB, Express, React (Vite), and Node.js**.
This project demonstrates a REST API backend with an interactive frontend app for creating, viewing, editing, and deleting notes.

## 🚀 Features

✅ Backend API using Express and MongoDB

✅ Frontend UI using React (Vite), Tailwind CSS & DaisyUI

✅ Axios-powered API requests

✅ Environment variable support

✅ Development setup with hot reload (nodemon + Vite)

✅ Clean project structure for scalability

## 🗂️ Repository Structure

```
mern-notes-app/
├── backend/
│   ├── src/
│   │   └── server.js              # Express server entrypoint
│   ├── .env                       # Env vars (not committed)
│   ├── package.json
│   ├── package-lock.json
│   └── README.md                  # Backend README
│
├── frontend/
│   ├── src/                       # Source code for React UI
│   ├── public/
│   ├── package.json
│   └── README.md                  # Frontend README
│
├── .gitignore
├── README.md                     # This file
└── ...
```

## 🧠 Tech Stack

| Layer      | Technology            |
| ---------- | --------------------- |
| Frontend   | React, Vite           |
| Styling    | Tailwind CSS, DaisyUI |
| Backend    | Node.js, Express      |
| Database   | MongoDB, Mongoose     |
| API Client | Axios                 |
| Dev Tools  | nodemon, ESLint       |

## 🛠️ Setup Instructions

> These steps get both the backend and frontend running locally.

### 📌 1. Clone the Repository

```bash
git clone https://github.com/asha-saini06/mern-notes-app.git
cd mern-notes-app
```

## 🔧 Backend Setup

1️⃣ Open the backend folder:

```bash
cd backend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create `.env` file:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

4️⃣ Start server (dev):

```bash
npm run dev
```

Server runs at:

```
http://localhost:5001
```

## 💻 Frontend Setup

1️⃣ Open the frontend folder in a new terminal:

```bash
cd frontend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the frontend (dev):

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

## 🔗 Backend API

### Health Check

```
GET /api/notes
```

Returns:

```
“Notes is working”
```

💡 More API routes (CRUD) will be implemented next.

## 📌 Usage

With both servers running:

✔ Visit the frontend (UI)

✔ Create, view, update, delete notes

✔ Backend serves as REST API

✔ Axios handles API requests from UI

## 🧪 Environment Variables

**backend/.env**

```
MONGO_URI=your_db_uri
PORT=5001
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

**frontend .env** (optional if needed for API base URL):

```
VITE_API_BASE_URL=http://localhost:5001
```

