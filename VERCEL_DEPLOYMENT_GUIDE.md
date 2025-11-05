# 🚀 Vercel Deployment Guide - Healthcare Management System

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ Vercel account (sign up at https://vercel.com)
- ✅ GitHub account with your repository
- ✅ MongoDB Atlas database (already set up)

---

## 🎯 Deployment Strategy

We'll deploy in TWO parts:
1. **Backend** - Separate Vercel project
2. **Frontend** - Separate Vercel project

---

## 📦 STEP 1: Deploy Backend to Vercel

### **Option A: Using Vercel CLI (Recommended)**

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Deploy Backend
```bash
cd backend
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → healthcare-backend (or your choice)
- **Directory?** → ./
- **Override settings?** → No

#### 4. Add Environment Variables
After deployment, go to Vercel Dashboard:
1. Select your backend project
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - `MONGO_URI` = Your MongoDB Atlas connection string
   - `JWT_SECRET` = Your JWT secret key
   - `PORT` = 5000

4. **Redeploy** after adding variables:
```bash
vercel --prod
```

---

### **Option B: Using Vercel Dashboard**

#### 1. Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Click **"Add New..."** → **"Project"**

#### 2. Import Repository
- Click **"Import Git Repository"**
- Select your GitHub repository
- Click **"Import"**

#### 3. Configure Backend
- **Root Directory**: `backend`
- **Framework Preset**: Other
- **Build Command**: Leave empty
- **Output Directory**: Leave empty
- **Install Command**: `npm install`

#### 4. Add Environment Variables
Before deploying, add:
- `MONGO_URI` = Your MongoDB connection string
- `JWT_SECRET` = Your secret key
- `PORT` = 5000

#### 5. Deploy
- Click **"Deploy"**
- Wait for deployment to complete
- **Copy the backend URL** (e.g., `https://healthcare-backend-xxx.vercel.app`)

---

## 📦 STEP 2: Deploy Frontend to Vercel

### **Option A: Using Vercel CLI**

#### 1. Update Frontend API URL
Edit `frontend/src/services/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://YOUR-BACKEND-URL.vercel.app/api';
```

Replace `YOUR-BACKEND-URL` with your actual backend URL from Step 1.

#### 2. Deploy Frontend
```bash
cd frontend
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → healthcare-frontend (or your choice)
- **Directory?** → ./
- **Override settings?** → Yes
  - **Build Command**: `npm run build`
  - **Output Directory**: `build`
  - **Install Command**: `npm install`

#### 3. Add Environment Variable
```bash
vercel env add REACT_APP_API_BASE_URL
```
Enter: `https://YOUR-BACKEND-URL.vercel.app/api`

#### 4. Deploy to Production
```bash
vercel --prod
```

---

### **Option B: Using Vercel Dashboard**

#### 1. Update API URL First
Edit `frontend/.env.production`:
```
REACT_APP_API_BASE_URL=https://YOUR-BACKEND-URL.vercel.app/api
```

#### 2. Import Frontend
- Go to Vercel Dashboard
- Click **"Add New..."** → **"Project"**
- Import your repository again

#### 3. Configure Frontend
- **Root Directory**: `frontend`
- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

#### 4. Add Environment Variable
- `REACT_APP_API_BASE_URL` = `https://YOUR-BACKEND-URL.vercel.app/api`

#### 5. Deploy
- Click **"Deploy"**
- Wait for deployment
- Your app will be live!

---

## 🔧 STEP 3: Update Backend CORS

After deploying frontend, update backend CORS settings:

Edit `backend/server.js`:
```javascript
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "https://YOUR-FRONTEND-URL.vercel.app", // Add this
];
```

Then redeploy backend:
```bash
cd backend
vercel --prod
```

---

## ✅ STEP 4: Verify Deployment

### Test Backend:
1. Visit: `https://YOUR-BACKEND-URL.vercel.app`
2. Should see: "🏥 HealthCare+ Backend Running ✅"

### Test Frontend:
1. Visit: `https://YOUR-FRONTEND-URL.vercel.app`
2. Try to signup/login
3. Book an appointment
4. Test double-booking feature

---

## 🔐 Environment Variables Summary

### **Backend (.env)**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/healthcare
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
```

### **Frontend (.env.production)**
```
REACT_APP_API_BASE_URL=https://YOUR-BACKEND-URL.vercel.app/api
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "Cannot connect to backend"
**Solution**: 
- Check `REACT_APP_API_BASE_URL` is correct
- Verify backend is deployed and running
- Check browser console for CORS errors

### Issue 2: "MongoDB connection failed"
**Solution**:
- Verify `MONGO_URI` is correct in Vercel
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for Vercel)
- Ensure database user has correct permissions

### Issue 3: "CORS error"
**Solution**:
- Add frontend URL to `allowedOrigins` in `backend/server.js`
- Redeploy backend

### Issue 4: "Environment variables not working"
**Solution**:
- Redeploy after adding environment variables
- Check variable names match exactly
- For frontend, must start with `REACT_APP_`

---

## 📱 Quick Deploy Commands

### Deploy Backend:
```bash
cd backend
vercel --prod
```

### Deploy Frontend:
```bash
cd frontend
vercel --prod
```

### Check Deployment Status:
```bash
vercel ls
```

### View Logs:
```bash
vercel logs YOUR-DEPLOYMENT-URL
```

---

## 🎊 After Successful Deployment

Your app will be live at:
- **Frontend**: `https://YOUR-PROJECT.vercel.app`
- **Backend**: `https://YOUR-BACKEND.vercel.app`

Share the frontend URL with users!

---

## 📝 Important Notes

1. **Free Tier Limits**:
   - Vercel free tier has bandwidth limits
   - Serverless functions have 10-second timeout
   - Consider upgrading for production use

2. **MongoDB Atlas**:
   - Whitelist Vercel IPs: `0.0.0.0/0` (all IPs)
   - Or use specific Vercel IP ranges

3. **Custom Domain** (Optional):
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS records

4. **Automatic Deployments**:
   - Vercel auto-deploys on git push
   - Push to `main` branch for production
   - Create preview deployments from PRs

---

## 🔄 Redeployment

To redeploy after changes:

```bash
# Commit changes
git add .
git commit -m "Your changes"
git push

# Or manually redeploy
vercel --prod
```

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- GitHub Repo: https://github.com/nanda-haripriya/HealthCare-FULLSTACK.git

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas database created and accessible
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables added
- [ ] Backend URL copied
- [ ] Frontend API URL updated
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variable added
- [ ] CORS updated in backend
- [ ] Backend redeployed with CORS changes
- [ ] Tested signup/login
- [ ] Tested appointment booking
- [ ] Tested double-booking prevention

---

🎊 **Your Healthcare Management System is ready for the world!** 🚀
