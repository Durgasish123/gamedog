# 🎮 GameDog – Your Ultimate Gaming Hub

**GameDog** is a full-stack web application crafted for gamers to **search for games**, **explore the latest updates**, and access **download links** across popular platforms like **Steam** and **Xbox**. Designed with modern UI/UX principles and a robust backend, GameDog delivers a fast, smooth, and interactive experience for gaming enthusiasts.

🌐 Live Demo: [gamedog.vercel.app](https://gamedog.vercel.app/)

---

## 🚀 Features

- 🔍 **Search Games**  
  Search for your favorite titles across platforms like Steam, Xbox, and more using real-time data from the RAWG Video Games Database API.

- 🆕 **Latest Game Updates**  
  Stay updated with the newest releases and trending games. GameDog fetches and displays timely updates from trusted gaming sources.

- 🔗 **Direct Download Links**  
  Get store or download links for each game directly from official platforms such as Steam and Xbox Store.

---

## 🧑‍💻 Tech Stack

### 🖼️ Frontend

- **React.js** – Component-based UI for a seamless SPA experience  
- **Tailwind CSS** – Utility-first CSS for responsive, modern design  
- **Framer Motion** – Smooth animations and transitions  
- **Axios** – Handles API calls efficiently  
- **React Router** – SPA routing across multiple pages

### 🧠 Backend

- **Node.js & Express.js** – RESTful API server  
- **RAWG Video Games Database API** – Main external API for game data  
- **MVC Architecture** – Organized folder structure with separation of concerns:
  - **Models**: Game data schema (optional)
  - **Controllers**: Business logic and data processing
  - **Routes**: API endpoint definitions
  - **Services**: RAWG API interaction
  - **Utils**: Helper functions

---

## 📁 Project Structure

### 🔷 Frontend (`/client`)
