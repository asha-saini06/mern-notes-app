# MERN Notes App – Frontend

This is the **frontend application** for the MERN Notes App.
It is built using **React (with Vite)** and communicates with the backend via REST APIs to manage notes.

## 🚀 Tech Stack

* **React 19** – UI library
* **Vite** – Fast development build tool
* **React Router** – Client-side routing
* **Axios** – API communication
* **Tailwind CSS** – Utility-first styling
* **DaisyUI** – Tailwind component library
* **Lucide React** – Icon set
* **React Hot Toast** – Toast notifications
* **ESLint** – Linting and code quality

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages
│   ├── routes/           # React Router configuration
│   ├── services/         # API calls (Axios)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Navigate to frontend folder

```bash
cd mern-notes-app/frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

## ▶️ Running the App

### Development mode

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 🔗 Backend Integration

The frontend communicates with the backend using **Axios**.

Example:

```js
axios.get('http://localhost:5001/api/notes');
```

Make sure the backend server is running before starting the frontend.

## 🎨 Styling

* **Tailwind CSS** is used for layout and utilities
* **DaisyUI** provides ready-made UI components
* Styling is fully responsive and component-driven

## 🧠 Architecture Notes

* Uses **ES Modules**
* Clean separation of:

  * UI components
  * Pages
  * API services
* Designed to scale with additional features like authentication and state management

## 📌 Planned Enhancements

* Notes CRUD UI
* Loading & error states
* Authentication flow
* Improved form validation
* API environment configuration
