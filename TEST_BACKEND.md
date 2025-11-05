# Backend Connection Test

## Quick Test Steps:

### 1. Check if Backend is Running
Open your browser and go to:
```
http://localhost:5000
```
**Expected**: You should see "🏥 HealthCare+ Backend Running ✅"

### 2. Test Signup API Directly
Open browser console (F12) and run:
```javascript
fetch('http://localhost:5000/api/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    password: 'test123'
  })
})
.then(res => res.json())
.then(data => console.log('Signup Response:', data))
.catch(err => console.error('Signup Error:', err));
```

### 3. Check Browser Console
When you try to signup/login, open browser console (F12) and check for:
- Network tab: See if requests are being sent to http://localhost:5000/api/auth/signup
- Console tab: Look for error messages

### 4. Common Issues:

**Issue**: "Failed to fetch" or "Network Error"
**Solution**: Backend server is not running. Start it with:
```bash
cd backend
npm start
```

**Issue**: "CORS error"
**Solution**: Already fixed in server.js

**Issue**: "Email already exists"
**Solution**: Use a different email or login instead

**Issue**: "Invalid email or password"
**Solution**: 
- For signup: Check if you already have an account
- For login: Make sure email and password are correct

### 5. Check Backend Logs
Look at the terminal where backend is running for error messages.
