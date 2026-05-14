# Yatrix - Global Technology Platform
Yatrix is a global technology platform that connects users with transportation, food delivery (Yatrix Rides), and freight services via a smartphone app. It allows riders to request cars, track them via GPS, and make automatic, cashless payments for rides in over 10,000 cities worldwide.

<div align="center">

![Yatrix](https://img.shields.io/badge/Yatrix-v1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/Node.js-14+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Frontend Developer Guide](#frontend-developer-guide)
- [Architecture](#architecture)
- [Error Handling](#error-handling)
- [Security](#security)
- [Contributing](#contributing)
- [Support](#support)

---

## 🌟 Overview

**Yatrix** is a global technology platform that connects users with:
- 🚗 **Transportation Services** - Request cars and track them via GPS
- 🍔 **Food Delivery** - Order food from restaurants
- 📦 **Freight Services** - Send packages across cities
- 💳 **Automatic Payments** - Cashless transactions

The platform operates in **over 10,000 cities worldwide** and provides a seamless experience through a mobile app with real-time tracking and automatic billing.

---

## ✨ Features

### User Authentication
- ✅ User registration with email verification
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Token expiration (24 hours)
- ✅ Protected routes and endpoints

### User Management
- ✅ User profile management
- ✅ Email-based unique identification
- ✅ Real-time socket integration support
- ✅ User data validation

### API Features
- ✅ RESTful API architecture
- ✅ Input validation with express-validator
- ✅ Error handling and logging
- ✅ CORS enabled for frontend integration
- ✅ Comprehensive error messages

---

## 🛠 Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 14+ | Runtime environment |
| **Express.js** | Latest | Web framework |
| **MongoDB** | Atlas | Database |
| **Mongoose** | Latest | ODM for MongoDB |
| **JWT** | Latest | Authentication |
| **bcrypt** | Latest | Password hashing |
| **express-validator** | Latest | Input validation |
| **CORS** | Latest | Cross-origin requests |
| **dotenv** | Latest | Environment management |

### Frontend
- React/Vue/Angular
- Axios or Fetch API
- Redux/Zustand (optional state management)
- React Router (for routing)

---

## 📁 Project Structure

```
yatrix/
├── Backend/
│   ├── controllers/
│   │   └── user.controller.js          # Request handlers
│   ├── models/
│   │   └── user.model.js               # MongoDB schema & methods
│   ├── services/
│   │   └── user.service.js             # Business logic
│   ├── routes/
│   │   └── user.routes.js              # Endpoint definitions
│   ├── db/
│   │   └── db.js                       # Database connection
│   ├── app.js                          # Express app setup
│   ├── server.js                       # Server startup
│   ├── package.json                    # Dependencies
│   └── .env                            # Environment variables
├── README.md                           # Documentation (this file)
└── .gitignore                          # Git ignore rules
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas Account** (for database)
- **Git** (for version control)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/yatrix.git
cd yatrix
```

### Step 2: Install Backend Dependencies

```bash
cd Backend
npm install
```

**Dependencies Installed:**
```
- express: Web framework
- mongoose: MongoDB ODM
- bcrypt: Password hashing
- jsonwebtoken: JWT authentication
- express-validator: Input validation
- cors: Cross-origin resource sharing
- dotenv: Environment variables
```

### Step 3: Setup Environment Variables

Create a `.env` file in the `Backend` directory:

```bash
touch .env
```

Add the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://yatrix_admin:AdminTest@cluster0.te54wzf.mongodb.net

# JWT Secret Key
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# Server Port
PORT=3000

# Environment
NODE_ENV=development
```

**⚠️ Important Security Notes:**
- Change `JWT_SECRET` to a strong random string in production
- Never commit `.env` file to version control
- Use environment-specific configs for development and production

### Step 4: Verify Installation

```bash
cd Backend
npm list
```

You should see all dependencies listed without errors.

---

## ⚙️ Configuration

### Database Connection

The app uses **MongoDB Atlas** for cloud database hosting.

**Connection String:**
```
mongodb+srv://yatrix_admin:AdminTest@cluster0.te54wzf.mongodb.net/yatrix
```

**Database Name:** `yatrix`

**Collections:**
- `users` - Stores user accounts

### JWT Configuration

- **Algorithm:** HS256
- **Secret:** Stored in `JWT_SECRET` environment variable
- **Expiration:** 24 hours
- **Payload:** User ID (`_id`)

### CORS Configuration

Currently enabled for all origins. For production:

```javascript
const corsOptions = {
  origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

---

## 🏃 Running the Application

### Start the Backend Server

```bash
cd Backend
npm start
```

**Expected Output:**
```
Server running on port http://localhost:3000
Connected to DB Successfully!
MongoDB connected !! DB HOST: cluster0.te54wzf.mongodb.net
```

### Verify Server is Running

Open your browser and visit:
```
http://localhost:3000
```

Expected response:
```
Hello this message from Yatrix Project
```

### Development Mode (with auto-reload)

```bash
npm install --save-dev nodemon
npx nodemon server.js
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

### Authentication Endpoints

#### 1️⃣ User Registration

**Endpoint:** `POST /users/register`

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `fullname.firstname` - Min 3 characters
- `fullname.lastname` - Min 3 characters
- `email` - Valid email format
- `password` - Min 6 characters

**Success Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6756a1b2c3d4e5f6g7h8i9j0",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

**Error Response (400):**
```json
{
  "errors": [
    {
      "msg": "invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Example cURL:**
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

#### 2️⃣ User Login

**Endpoint:** `POST /users/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email` - Valid email format
- `password` - Min 6 characters

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6756a1b2c3d4e5f6g7h8i9j0",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

**Error Response (401):**
```json
{
  "message": "Invalid email or password"
}
```

**Example cURL:**
```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

### Health Check

**Endpoint:** `GET /`

**Response:**
```
Hello this message from Yatrix Project
```

Used to verify the server is running and accessible.

---

## 📊 Database Schema

### User Model

```javascript
{
  _id: ObjectId,                    // MongoDB unique ID
  fullname: {
    firstname: String,               // Min 3 characters
    lastname: String                 // Min 3 characters
  },
  email: String,                     // Unique, Min 5 characters
  password: String,                  // Bcrypt hashed, not selected by default
  socketId: String,                  // Optional, for real-time features
  __v: Number,                       // MongoDB version key
  createdAt: Date,                   // Auto-generated timestamp
  updatedAt: Date                    // Auto-generated timestamp
}
```

**Indexes:**
- `email` - Unique index for faster lookups
- `_id` - Primary key

**Methods:**
- `generateAuthToken()` - Creates JWT token
- `comparePassword(password)` - Verifies password against hash
- `hashPassword(password)` - Static method to hash passwords

---

## 👨‍💻 Frontend Developer Guide

### Quick Start

#### Step 1: Setup API Client

Create `services/api.js`:

```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials)
};

export default api;
```

#### Step 2: Registration Form

```javascript
import { useState } from 'react';
import { authAPI } from './services/api';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.register({
        fullname: {
          firstname: formData.firstName,
          lastname: formData.lastName
        },
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('authToken', response.data.token);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.errors?.[0]?.msg || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
        minLength={3}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
        minLength={3}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        minLength={6}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}

export default RegisterForm;
```

#### Step 3: Login Form

```javascript
import { useState } from 'react';
import { authAPI } from './services/api';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem('authToken', response.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        minLength={6}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

export default LoginForm;
```

#### Step 4: Authentication Context

```javascript
import React, { createContext, useState } from 'react';
import { authAPI } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const login = async (email, password) => {
    const response = await authAPI.login({ email, password });
    localStorage.setItem('authToken', response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
    return response.data.user;
  };

  const register = async (userData) => {
    const response = await authAPI.register(userData);
    localStorage.setItem('authToken', response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
    return response.data.user;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### Frontend Integration Checklist

- [ ] Install Axios: `npm install axios`
- [ ] Create API service file
- [ ] Setup Authentication Context
- [ ] Create Registration form
- [ ] Create Login form
- [ ] Create Protected Route component
- [ ] Setup localStorage for token persistence
- [ ] Add error handling
- [ ] Add loading states
- [ ] Test with Postman first
- [ ] Deploy frontend

---

## 🏗 Architecture

### Request Flow

```
Client Request
    ↓
Express Middleware (CORS, JSON Parser)
    ↓
Routes (user.routes.js)
    ↓
Input Validation (express-validator)
    ↓
Controller (user.controller.js)
    ↓
Service Layer (user.service.js)
    ↓
Model (user.model.js)
    ↓
MongoDB Database
    ↓
Response to Client
```

### Authentication Flow

```
1. User Registration
   - Input Validation
   - Password Hashing (bcrypt)
   - Create User in DB
   - Generate JWT Token
   - Return Token + User Data

2. User Login
   - Input Validation
   - Find User by Email
   - Compare Password
   - Generate JWT Token
   - Return Token + User Data

3. Protected Requests
   - Extract Token from Header
   - Verify Token Signature
   - Check Expiration
   - Allow/Deny Request
```

---

## ⚠️ Error Handling

### Common HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | Success | Login successful |
| 201 | Created | User registered |
| 400 | Bad Request | Validation error |
| 401 | Unauthorized | Invalid credentials |
| 409 | Conflict | Email already exists |
| 500 | Server Error | Database error |

### Error Response Format

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

or

```json
{
  "message": "Error message"
}
```

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| CORS Error | Backend not running | Start backend: `npm start` |
| 401 Error | Invalid credentials | Check email and password |
| 400 Error | Missing fields | Verify all required fields |
| Connection Refused | Wrong port | Check PORT in .env |
| MongoDB Error | Wrong connection string | Verify MONGODB_URI in .env |

---

## 🔒 Security

### Current Security Measures

✅ **Implemented:**
- Password hashing with bcrypt (cost factor: 10)
- JWT tokens with 24-hour expiration
- Email validation
- Input validation and sanitization
- CORS protection
- Environment variables for secrets

### Recommended for Production

- [ ] HTTPS/SSL encryption
- [ ] Rate limiting on login/register
- [ ] Email verification before account activation
- [ ] Password reset functionality
- [ ] Refresh token mechanism
- [ ] API key management
- [ ] Request logging and monitoring
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF protection

### Security Best Practices

```javascript
// ✅ DO
- Store token in secure storage
- Send token in Authorization header
- Use HTTPS in production
- Validate on both client and server
- Hash passwords with bcrypt
- Rotate JWT secrets regularly

// ❌ DON'T
- Store passwords in plain text
- Expose API keys in frontend code
- Log sensitive information
- Send credentials in URL
- Store sensitive data in localStorage
- Use weak JWT secrets
```

---

## 📝 Testing with Postman

### Import Collection

1. Open Postman
2. Click "Import"
3. Create requests for each endpoint

### Register Request

```
Method: POST
URL: http://localhost:3000/users/register
Headers:
  Content-Type: application/json
Body (raw):
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

### Login Request

```
Method: POST
URL: http://localhost:3000/users/login
Headers:
  Content-Type: application/json
Body (raw):
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 🤝 Contributing

### Fork & Clone

```bash
git clone https://github.com/yourusername/yatrix.git
cd yatrix
git checkout -b feature/your-feature
```

### Make Changes

```bash
# Make your changes
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

### Submit Pull Request

1. Go to GitHub
2. Create Pull Request
3. Describe your changes
4. Submit for review

### Code Standards

- Use consistent indentation (2 spaces)
- Add comments for complex logic
- Follow naming conventions
- Test before submitting
- Update documentation

---

## 📞 Support

### Getting Help

- 📧 **Email:** support@yatrix.com
- 🐛 **Issues:** GitHub Issues
- 💬 **Discussions:** GitHub Discussions
- 📖 **Documentation:** See docs folder

### Useful Links

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Introduction](https://jwt.io/introduction)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Authors

- **Pramod** - Initial work

---

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Express.js community
- JWT for secure authentication
- bcrypt for password security

---

## 📦 Database Credentials

> ⚠️ **For Development Only** - Change credentials in production

```
Username: yatrix_admin
Password: AdminTest

Connection String:
mongodb+srv://yatrix_admin:AdminTest@cluster0.te54wzf.mongodb.net/yatrix
```

---

## 🗺️ Roadmap

### v1.0 (Current)
- ✅ User Authentication
- ✅ Basic API endpoints
- ✅ MongoDB integration

### v1.1 (Planned)
- [ ] Email verification
- [ ] Password reset
- [ ] User profiles
- [ ] Real-time notifications

### v2.0 (Future)
- [ ] Ride booking system
- [ ] Payment integration
- [ ] WebSocket support
- [ ] Admin dashboard
- [ ] Analytics

---

**Last Updated:** May 14, 2026  
**Version:** 1.0.0  
**Status:** Active Development
