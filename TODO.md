# JWT Auth App: Run Locally & Deploy to Vercel

## TODO Steps

### 1. Run Locally ✅
- [x] Install deps & start backend dev server
- [x] Install deps & start frontend dev server (http://localhost:5173/)
- [x] Test: login/register/dashboard

### 2. Vercel Deployment
- [ ] Init git repo
- [ ] Restructure: Create `api/index.js` for serverless backend
- [ ] Update `vite.config.js` build outDir to '../dist'
- [ ] Update `vercel.json` for full-stack builds/rewrites
- [ ] Create server/.env (JWT_SECRET=your_secret_here)
- [ ] Git add/commit/push (add Vercel remote)
- [ ] `vercel deploy --prod`

### 3. Post-Deploy
- [ ] Update CORS origin & axios (if needed)
- [ ] Test deployed app

**Status:** Local running. Next: Git init & restructure.
