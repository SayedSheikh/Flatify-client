# 🏠 Flatify Frontend

🌟 **Flatify** is a modern web application for browsing, posting, and managing roommate or flat listings.

This is the **frontend** codebase, built using **React** + **Tailwind CSS** + **Firebase**.  
The live app is deployed at:  
👉 [https://flatify-6a56c.web.app](https://flatify-6a56c.web.app)

---

## 🚀 Live Website

✅ Visit here → [https://flatify-6a56c.web.app](https://flatify-6a56c.web.app)

---

## ✨ Features

- ✅ User authentication (Firebase)
- ✅ Browse flat/roommate listings
- ✅ Post your own listings
- ✅ Like & review listings
- ✅ Swiper carousels for banners and featured content
- ✅ Smooth animations (React Awesome Reveal)
- ✅ Toast notifications (React Hot Toast)
- ✅ Fully responsive & mobile-friendly (Tailwind + DaisyUI)

---

## ⚙️ Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| **Frontend** | React, React Router, React Icons     |
| **Styling**  | Tailwind CSS, DaisyUI, Swiper        |
| **Auth**     | Firebase Authentication              |
| **API**      | Custom Express.js + MongoDB backend  |
| **UX**       | SweetAlert2, React Hot Toast, Swiper |

---

## 🛠️ How to Run Locally

Follow these steps to run **Flatify Frontend** on your local development environment:

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/flatify-frontend.git
cd flatify-frontend
````

> Replace `your-username` with your actual GitHub username.

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Create a Firebase Project

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Create a new project
3. Go to **Project Settings > General > Your Apps**
4. Register a new Web App
5. Copy the Firebase config, which looks like this:

```js
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};
```

---

### Step 4: Create a `.env` File

1. In the **root directory** of your project, create a file named `.env`
2. Add your Firebase config like this:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

> ⚠️ Do not commit this `.env` file to your repo. Keep it private.

---

### Step 5: Start the Development Server

```bash
npm run dev
```

---

### Step 6: Open the App

Visit the following URL in your browser:

```
http://localhost:5173
```

You should now see the **Flatify** app running locally! 🎉


