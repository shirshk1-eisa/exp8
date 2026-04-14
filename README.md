# JWT Auth App

## 🚀 Quick Start (Local Development)

### Backend
```bash
cd jwt-auth-app/server
copy .env.example .env
# Edit .env - set JWT_SECRET
npm install
npm run dev
```

### Frontend
```bash
cd jwt-auth-app/client
npm install
npm run dev
```

Backend runs on `http://localhost:5000`  
Frontend runs on `http://localhost:5173`

## 🌐 Deployment

### Frontend (Vercel)
1. `cd client`
2. `npm install -g vercel`
3. `vercel` (follow prompts)

### Backend
- Use Render.com, Railway, or Vercel Serverless Functions

## Features
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Login/Register
- ✅ Dashboard with protected data
- ✅ Responsive UI
- ✅ Proxy setup for development

## Tech Stack
- **Frontend**: React 18 + Vite + Tailwind-like styling
- **Backend**: Express.js + JWT + bcrypt
