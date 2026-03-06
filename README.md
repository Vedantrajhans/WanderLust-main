<div align="center">

# 🌍 WanderLust

### A Full-Stack Vacation Rental Platform

**Explore · List · Review**

> WanderLust is an Airbnb-inspired vacation rental platform where users can **browse listings**, **add their own properties**, **leave reviews**, and **explore locations on an interactive map** — all in one place.

🔗 **Live Demo:** [https://wander-lust-main-seven.vercel.app/](https://wander-lust-main-seven.vercel.app/)

</div>

---

## ✨ Features

- 🏠 **Browse Listings** — View all vacation properties with images, prices, and locations
- ➕ **Create Listings** — Logged-in users can add their own properties with photo uploads
- ✏️ **Edit & Delete** — Owners can update or remove their own listings
- ⭐ **Reviews** — Users can leave and delete reviews on any listing
- 🗺️ **Interactive Map** — Each listing shows its exact location using Mapbox
- 🔐 **Authentication** — Secure signup, login and logout using Passport.js
- 🛡️ **Authorization** — Only listing owners can edit/delete their listings
- ☁️ **Image Upload** — Photos stored securely on Cloudinary
- 📱 **Responsive Design** — Works on desktop, tablet and mobile
- ⚡ **Flash Messages** — Real-time success/error feedback for all actions
- 🍪 **Sessions & Cookies** — Persistent login sessions using MongoDB store

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| EJS + EJS-Mate | Server-side templating & layouts |
| Bootstrap 5 | Responsive UI components |
| Mapbox GL JS | Interactive property maps |
| Vanilla JavaScript | Client-side interactions |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js 22 | Runtime environment |
| Express.js 5 | Web framework & routing |
| Passport.js | Authentication (Local Strategy) |
| Multer | File upload handling |
| Joi | Server-side data validation |
| Method-Override | Support for PUT/DELETE in forms |

### Database & Storage
| Service | Purpose |
|---------|---------|
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| Connect-Mongo | Session storage in MongoDB |
| Cloudinary | Image hosting & delivery |

---

## 📁 Project Structure

```
WanderLust/
├── controllers/          # Route logic (listings, reviews, users)
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/               # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/               # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                # EJS templates
│   ├── listings/
│   ├── users/
│   ├── layouts/
│   └── includes/
├── public/               # Static assets (CSS, JS)
├── utils/                # Helper utilities
├── init/                 # Database seed data
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom middleware
├── schema.js             # Joi validation schemas
├── app.js                # Main application entry
└── vercel.json           # Vercel deployment config
```

---

## 🚀 Getting Started Locally

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v22 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Vedantrajhans/WanderLust-main.git
cd WanderLust-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderlust
SECRET=your_session_secret_here
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

> 💡 Get your keys from:
> - **MongoDB Atlas** → [mongodb.com/atlas](https://www.mongodb.com/atlas)
> - **Cloudinary** → [cloudinary.com](https://cloudinary.com)
> - **Mapbox** → [mapbox.com](https://www.mapbox.com)

### 4. Seed the Database (Optional)

```bash
node init/index.js
```

### 5. Run the App

```bash
node app.js
```

Visit **[http://localhost:8080](http://localhost:8080)** in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

🔗 **Live URL:** [https://wander-lust-main-seven.vercel.app/](https://wander-lust-main-seven.vercel.app/)

The deployment uses:
- `vercel.json` to serve the Express app as a serverless function
- **MongoDB Atlas** for the database (cloud-hosted)
- **Cloudinary** for image storage
- **Environment variables** configured in Vercel dashboard

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for automated CI/CD on every push and pull request.

```
Push to main
     │
     ├── ESLint        → Code quality check
     ├── Prettier      → Formatting check
     └── Jest + Supertest → API tests
          │
     All pass → Auto-deploy to Vercel
```

---

## 📦 NPM Scripts

```bash
npm start          # Start the server
npm test           # Run Jest tests
npm run lint       # Run ESLint
npm run lint:fix   # Auto-fix lint errors
npm run format     # Check Prettier formatting
npm run format:fix # Auto-fix formatting
```

---

## 🔐 Environment Variables Reference

| Variable | Description |
|----------|-------------|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token |

---

## 👨‍💻 About the Developer

**Vedant Rajhans** — Full-Stack Web Developer & B.Tech CSE Student

Passionate about building scalable, user-centric web applications that solve real-world problems.

**Tech I work with:**
- **Frontend:** React, Next.js, Tailwind CSS, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB, PostgreSQL
- **DevOps:** Docker, AWS, Vercel, MongoDB Atlas
- **Other:** REST APIs, Authentication, Real-time systems

### 📬 Connect With Me

- GitHub: [github.com/Vedantrajhans](https://github.com/Vedantrajhans)
- LinkedIn: [linkedin.com/in/vedant-rajhans-0218682b8](https://www.linkedin.com/in/vedant-rajhans-0218682b8/)
- Email: [vedant.rajhans23@gmail.com](mailto:vedant.rajhans23@gmail.com)

---

<div align="center">

⭐ If you found this project helpful, please give it a star!

Made with ❤️ by [Vedant Rajhans](https://github.com/Vedantrajhans)

</div>
