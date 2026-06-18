# TaskFlow - Full Stack MERN Task Management Dashboard

## Overview

TaskFlow is a Full Stack Task Management Dashboard built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

The application allows users to securely register, log in, and manage tasks through a modern dashboard interface. Authentication is implemented using JSON Web Tokens (JWT), passwords are securely hashed using bcryptjs, and all task data is stored in MongoDB.

This project demonstrates real-world full-stack development concepts including REST APIs, Authentication & Authorization, Protected Routes, Database Integration, Frontend-Backend Communication, and Responsive UI Design.

---

## Features

### Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing using bcryptjs
* Logout Functionality

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Mark Tasks as Completed
* Task Statistics Dashboard
* Task Filtering

### Frontend

* React.js + Vite
* React Router DOM
* Axios API Integration
* Responsive UI
* Component-Based Architecture

### Backend

* RESTful API
* MongoDB Integration
* Mongoose ODM
* Authentication Middleware
* Error Handling Middleware
* Morgan Request Logging
* Environment Variable Configuration

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* cors
* morgan

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* MongoDB Compass

---

## Project Structure

```plaintext
InternSpark Project1
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public
│   ├── package.json
│   └── README.md
│
├── task-api
│   ├── config
│   ├── Controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## Folder Explanation

### Frontend

| Folder/File | Purpose                         |
| ----------- | ------------------------------- |
| assets      | Stores images and static assets |
| components  | Reusable React components       |
| pages       | Application pages               |
| services    | API communication layer         |
| styles      | CSS styling files               |
| App.jsx     | Root component                  |
| main.jsx    | React entry point               |

### Backend

| Folder/File | Purpose                           |
| ----------- | --------------------------------- |
| config      | Database configuration            |
| Controllers | Business logic layer              |
| middleware  | Authentication & error middleware |
| models      | MongoDB schemas                   |
| routes      | API route definitions             |
| server.js   | Backend entry point               |

---

## Authentication Flow

1. User registers with name, email, and password.
2. Password is hashed using bcryptjs.
3. User information is stored in MongoDB.
4. JWT token is generated.
5. Token is sent to the frontend.
6. ProtectedRoute verifies token presence.
7. Authenticated users can access the dashboard.

---

## Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd ../task-api
npm install
```

### Create Backend Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

## Running The Project

### Start Backend

```bash
cd task-api
npm start
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Tasks

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## Skills Demonstrated

* MERN Stack Development
* REST API Development
* Authentication & Authorization
* MongoDB Integration
* React Hooks
* React Router
* Axios Integration
* MVC Architecture
* Middleware Implementation
* API Testing
* Git & GitHub Workflow
* Full Stack Debugging

---

## Future Enhancements

* Docker Containerization
* Cloud Deployment (Render / Vercel)
* Role-Based Access Control (RBAC)
* Advanced Analytics Dashboard

---

## Author

**Mithun Sai Kumar**
