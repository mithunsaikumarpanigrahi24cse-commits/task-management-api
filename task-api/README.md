# TaskFlow Backend API

A secure and scalable RESTful API built using Node.js, Express.js, MongoDB, and Mongoose.

The backend powers the TaskFlow application by providing authentication, authorization, and task management functionality through REST API endpoints.

---

## Features

### Authentication

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- JWT Token Verification
- Protected Routes
- Secure Authentication Middleware

### Task Management

- Create Tasks
- Get All Tasks
- Get Single Task
- Update Tasks
- Delete Tasks
- Mark Tasks as Completed

### Backend Functionality

- MongoDB Integration
- Mongoose Schema Validation
- Environment Variable Configuration
- Centralized Error Handling
- Request Logging using Morgan
- CORS Configuration
- RESTful API Architecture

---

## Tech Stack

### Backend Technologies

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Token (JWT)
- bcryptjs

### Middleware

- CORS
- Morgan
- dotenv

### Development Tools

- VS Code
- Git
- GitHub
- Postman

---

## Project Structure

```plaintext
task-api
│
├── config
│   └── db.js
│
├── Controllers
│   ├── authController.js
│   └── taskController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models
│   ├── Task.js
│   └── User.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Folder Explanation

### config/

Database configuration files.

| File | Purpose |
|--------|---------|
| db.js | Establishes connection with MongoDB database |

---

### Controllers/

Contains application business logic.

| File | Purpose |
|--------|---------|
| authController.js | Handles user registration and login |
| taskController.js | Handles task CRUD operations |

---

### middleware/

Custom middleware used throughout the application.

| File | Purpose |
|--------|---------|
| authMiddleware.js | Verifies JWT token and protects routes |
| errorMiddleware.js | Centralized error handling |

---

### models/

MongoDB schema definitions using Mongoose.

| File | Purpose |
|--------|---------|
| User.js | User schema for authentication |
| Task.js | Task schema for task management |

---

### routes/

Defines API endpoints.

| File | Purpose |
|--------|---------|
| authRoutes.js | Authentication endpoints |
| taskRoutes.js | Task management endpoints |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/mithunsaikumarpanigrahi24cse-commits/task-management-api.git
```

### Navigate to Backend

```bash
cd task-api
```

### Install Dependencies

```bash
npm install
```

---

## Required Packages

```bash
npm install express mongoose cors dotenv morgan bcryptjs jsonwebtoken
```

Development Dependency

```bash
npm install --save-dev nodemon
```

---

## Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## Running the Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## API Endpoints

### Authentication Routes

#### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "name": "Mithun",
  "email": "mithun@gmail.com",
  "password": "123456"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "mithun@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "token": "jwt_token"
}
```

---

## Protected Routes

All task routes require a valid JWT token.

Example Header

```http
Authorization: Bearer your_jwt_token
```

---

### Task Routes

#### Get All Tasks

```http
GET /api/tasks
```

---

#### Create Task

```http
POST /api/tasks
```

Request Body

```json
{
  "title": "Build MERN Project",
  "description": "Complete internship task"
}
```

---

#### Update Task

```http
PUT /api/tasks/:id
```

---

#### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Authentication Flow

1. User Registers
2. Password Hashed Using bcryptjs
3. User Data Stored in MongoDB
4. JWT Token Generated
5. Token Returned to Frontend
6. Frontend Stores Token
7. Token Sent in Authorization Header
8. authMiddleware Verifies Token
9. Protected Route Access Granted

---

## Security Features

- Password Hashing
- JWT Authentication
- Protected API Endpoints
- Environment Variable Protection
- CORS Configuration
- Request Validation
- Centralized Error Handling

---

## Testing

API tested using:

- Postman
- Browser Developer Tools
- React Frontend Integration

Tested Features:

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Task
- Read Tasks
- Update Task
- Delete Task

---

## Skills Demonstrated

- Node.js Development
- Express.js Routing
- REST API Development
- MongoDB Integration
- Mongoose ODM
- JWT Authentication
- Password Hashing
- Middleware Development
- CRUD Operations
- Error Handling
- API Testing
- Git & GitHub Workflow

---

## Future Enhancements

- Docker Deployment
- Cloud Hosting
- API Documentation using Swagger
- Rate Limiting
- Refresh Token Authentication
- Performance Optimization

---

## Author

### Mithun Sai Kumar

GitHub:

https://github.com/mithunsaikumarpanigrahi24cse-commits

---
