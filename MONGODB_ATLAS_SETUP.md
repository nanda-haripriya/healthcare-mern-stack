# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** or **"Sign Up"**
3. Create an account using email or Google

## Step 2: Create a Cluster

1. After logging in, click **"Build a Database"**
2. Choose **FREE** tier (M0 Sandbox)
3. Select your preferred **Cloud Provider** (AWS, Google Cloud, or Azure)
4. Choose a **Region** closest to you
5. Name your cluster (or keep default "Cluster0")
6. Click **"Create"** (may take 3-5 minutes)

## Step 3: Create Database User

1. Click **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username (e.g., `healthcare_admin`)
5. Click **"Autogenerate Secure Password"** or create your own
6. **IMPORTANT**: Copy and save this password
7. Set privileges to **"Read and write to any database"**
8. Click **"Add User"**

## Step 4: Configure Network Access

1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. For development: Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - **Warning**: For production, use specific IP addresses
4. Click **"Confirm"**

## Step 5: Get Connection String

1. Click **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Driver: Node.js"** and **"Version: 5.5 or later"**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Update Your .env File

1. Open `backend/.env`
2. Replace the `MONGO_URI` with your connection string
3. Replace `<username>` with your database username
4. Replace `<password>` with your database password
5. Add `/healthcare` before the `?` to specify database name

### Example:
```env
PORT=5000
MONGO_URI=mongodb+srv://healthcare_admin:MyPassword123@cluster0.abc123.mongodb.net/healthcare?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024
```

## Step 7: Restart Your Backend Server

1. Stop your backend server (Ctrl+C)
2. Start it again:
   ```bash
   cd backend
   npm start
   ```
3. You should see: "✅ MongoDB Connected Successfully"

## Step 8: Seed Sample Data (Optional)

Run the seeder to add sample doctors to your Atlas database:
```bash
cd backend
node seedDoctors.js
```

## Important Security Notes

⚠️ **Never commit your .env file to Git**
- Already added to .gitignore
- Never share your password publicly

🔒 **For Production**:
- Use specific IP addresses, not "Allow Access from Anywhere"
- Use strong passwords
- Rotate credentials regularly
- Enable 2FA on MongoDB Atlas account

## Troubleshooting

### Error: "MongoServerError: bad auth"
- Double-check username and password
- Make sure password doesn't contain special characters (or URL encode them)

### Error: "MongooseServerSelectionError"
- Check Network Access settings
- Ensure your IP is whitelisted
- Verify connection string format

### Error: "Authentication failed"
- Confirm user has correct permissions
- Wait 1-2 minutes after creating user

## Connection String Format

```
mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

- `<username>`: Your database user
- `<password>`: User's password
- `<cluster-url>`: Provided by Atlas
- `<database-name>`: healthcare (or your choice)

## Verify Connection

Check the backend console for:
```
✅ MongoDB Connected Successfully
```

Your application will now use MongoDB Atlas cloud database instead of local MongoDB!
