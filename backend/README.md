# MERN Notes App – Backend

This is the **backend service** for the MERN Notes Application.
It provides a RESTful API for managing notes, built with **Node.js, Express, and MongoDB**.

## 🚀 Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Backend framework
* **MongoDB + Mongoose** – Database and ODM
* **Upstash Redis** – Rate limiting
* **dotenv** – Environment variable management
* **cors** – Cross-origin resource sharing
* **nodemon** – Development auto-reload

## 📁 Project Structure

```pgsql
backend/
├── src/
│   └── server.js        # Express server entry point
├── package.json
├── package-lock.json
├── .env                 # Environment variables (ignored by git)
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/asha-saini06/mern-notes-app.git
cd mern-notes-app/backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Create a `.env` file in the `backend` folder and add:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## ▶️ Running the Server

### Development mode (with hot reload)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server will start on:

```bash
http://localhost:5001
```

## 📡 API Endpoints (Initial)

### Health / Test Route

```bash
GET /api/notes
```

**Response:**

```text
Notes is working
```

> More CRUD endpoints will be added as the project progresses.

## 🧠 Module System

This backend uses **ES Modules**:

* `"type": "module"` is enabled
* `import` / `export` syntax is used
* Node.js version: **v24+ recommended**

Example:

```js
import express from 'express';
```

## 🔐 Security & Best Practices

* Sensitive data stored in `.env`
* `.env` and `node_modules` are ignored via `.gitignore`
* Rate limiting implemented using Upstash Redis

## 📌 Future Enhancements

* Notes CRUD APIs
* MongoDB models and schemas
* Authentication & authorization
* Validation and error handling
* API documentation
