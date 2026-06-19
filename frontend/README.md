# TaskFlow Frontend

A modern, responsive, and user-friendly Task Management Dashboard built with React.js and Vite.

TaskFlow enables users to securely register, log in, and manage tasks through an intuitive dashboard interface connected to a RESTful backend API.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Token Authentication
- Protected Routes
- Logout Functionality
- Persistent Login using Local Storage

### Dashboard

- Modern Dashboard UI
- Responsive Layout
- Task Statistics Overview
- Real-Time Task Updates

### Task Management

- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- Mark Tasks as Completed
- Track Task Status

### User Experience

- Mobile Responsive Design
- Tablet Friendly Layout
- Desktop Optimized Interface
- Clean Component-Based Architecture
- Fast Development with Vite

---

## Tech Stack

### Frontend Technologies

- React.js
- Vite
- React Router DOM
- Axios
- JavaScript (ES6+)
- CSS3

### Development Tools

- VS Code
- Git
- GitHub
- Chrome DevTools

---

## Project Structure

```plaintext
frontend
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── StatsCards.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── services
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── taskService.js
│   │
│   ├── styles
│   │   ├── App.css
│   │   ├── AuthForm.css
│   │   ├── Dashboard.css
│   │   ├── FilterBar.css
│   │   ├── Header.css
│   │   ├── TaskCard.css
│   │   └── TaskForm.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Folder Explanation

### components/

Reusable UI components used across the application.

| File | Purpose |
|--------|---------|
| Header.jsx | Dashboard navigation and header section |
| ProtectedRoute.jsx | Restricts access to authenticated users |
| TaskForm.jsx | Create and edit task form |
| TaskCard.jsx | Displays individual task information |
| TaskList.jsx | Renders all tasks |
| FilterBar.jsx | Task filtering functionality |
| StatsCards.jsx | Dashboard statistics display |

---

### pages/

Application pages rendered through React Router.

| File | Purpose |
|--------|---------|
| Login.jsx | User login page |
| Register.jsx | User registration page |
| Dashboard.jsx | Main task management dashboard |

---

### services/

Handles API communication with the backend.

| File | Purpose |
|--------|---------|
| api.js | Axios configuration |
| authService.js | Authentication API requests |
| taskService.js | Task CRUD API requests |

---

### styles/

Contains component-specific CSS files for styling.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/mithunsaikumarpanigrahi24cse-commits/task-management-api.git
```

### Navigate to Frontend

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

---

## Required Packages

```bash
npm install axios react-router-dom
```

---

## Running the Application

Start Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## Production Build

Create Production Build

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

---

## Backend Connection

The frontend communicates with the TaskFlow Backend API using Axios.

Example API URL:

```javascript
http://localhost:5000/api
```

### Authentication Endpoints

```http
POST /api/auth/register
POST /api/auth/login
```

### Task Endpoints

```http
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## Authentication Flow

1. User Registers
2. Backend Creates Account
3. JWT Token Generated
4. Token Stored in Local Storage
5. Protected Routes Verify Token
6. User Accesses Dashboard
7. Logout Removes Token

---

## Skills Demonstrated

- React.js Development
- Component-Based Architecture
- React Router
- JWT Authentication
- Protected Routes
- Axios API Integration
- State Management
- CRUD Operations
- Responsive Design
- Frontend-Backend Communication
- Git & GitHub Workflow

---

## Future Enhancements

- Docker Deployment
- Cloud Hosting
- Improved Mobile Responsiveness
- Advanced Dashboard Analytics
- Performance Optimization

---

## Author

### Mithun Sai Kumar

GitHub:

https://github.com/mithunsaikumarpanigrahi24cse-commits

---
