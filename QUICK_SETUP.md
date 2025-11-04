# 🚀 Quick MongoDB Atlas Setup

## Step-by-Step Guide

### 1️⃣ Create MongoDB Atlas Account
- Visit: https://www.mongodb.com/cloud/atlas
- Sign up for FREE

### 2️⃣ Create a FREE Cluster
- Click "Build a Database"
- Select **M0 FREE** tier
- Choose a region close to you
- Click "Create"

### 3️⃣ Create Database User
- Go to "Database Access"
- Click "Add New Database User"
- Username: `healthcare_admin` (or your choice)
- Password: Click "Autogenerate" and **SAVE IT**
- Click "Add User"

### 4️⃣ Whitelist Your IP
- Go to "Network Access"
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (for development)
- Click "Confirm"

### 5️⃣ Get Connection String
- Go to "Database"
- Click "Connect" on your cluster
- Choose "Connect your application"
- **Copy the connection string**

### 6️⃣ Update .env File

Open `backend/.env` and update:

```env
PORT=5000
MONGO_URI=mongodb+srv://healthcare_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/healthcare?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024
```

**Replace:**
- `YOUR_PASSWORD` → Your database password
- `cluster0.xxxxx` → Your cluster URL (from connection string)

### 7️⃣ Restart Backend Server

```bash
# Stop current server (Ctrl+C)

# Start again
cd backend
npm start
```

You should see: **✅ MongoDB Connected Successfully**

### 8️⃣ Seed Sample Data

```bash
cd backend
node seedDoctors.js
```

## ✅ Done!

Your application now uses **MongoDB Atlas Cloud Database**!

---

## 📝 Important Notes

- ⚠️ **Never share your .env file**
- ⚠️ **Never commit .env to Git** (already in .gitignore)
- 🔒 For production, use specific IP addresses instead of "Allow from Anywhere"

## 🆘 Need Help?

See detailed guide: `MONGODB_ATLAS_SETUP.md`
