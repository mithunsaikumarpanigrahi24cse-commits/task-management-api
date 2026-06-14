# TaskFlow Frontend

A modern and responsive task management dashboard built with React.js and Vite.

TaskFlow provides an intuitive user experience for managing tasks, tracking progress, filtering data, and organizing daily work through a clean and professional user interface.

---

## Project Overview

TaskFlow Frontend is the client-side application of a full-stack MERN Task Management System.

The application communicates with a Node.js, Express.js, and MongoDB backend through REST APIs and provides users with an efficient way to create, manage, and track tasks.

The project focuses on modern React development practices, responsive design, API integration, and user experience.

---

## Features

### Dashboard

* Modern dashboard layout
* Task statistics overview
* Clean and professional UI
* Responsive design for all screen sizes

### Task Management

* Create new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed or pending
* Real-time task updates

### Search & Filtering

* Search tasks by:

  * Title
  * Description
  * Priority
  * Due Date

* Quick filters:

  * All Tasks
  * Completed Tasks
  * Pending Tasks
  * High Priority Tasks

### User Experience

* Light Theme
* Dark Theme
* Theme persistence using Local Storage
* Mobile-friendly design
* Tablet-friendly design
* Desktop optimized layout

---

## Tech Stack

### Frontend Technologies

* React 19
* Vite
* Axios
* JavaScript (ES6+)
* CSS3

### Development Tools

* VS Code
* Git
* GitHub
* Chrome DevTools

---

## Project Structure

```plaintext
frontend
│
├── public
│
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

### Clone the Repository

```bash
 git clone https://github.com/mithunsaikumarpanigrahi24cse-commits/task-management-api
```

### Navigate to Frontend Folder

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Build files will be generated inside:

```text
dist/
```

Preview the production build:

```bash
npm run preview
```

---

## Backend API Integration

This frontend is designed to work with the TaskFlow Backend API built using:

* Node.js
* Express.js
* MongoDB
* Mongoose

Ensure the backend server is running before starting the frontend application.

Example API Base URL:

```javascript
http://localhost:5000/api/tasks
```

The frontend communicates with the backend using Axios for:

* Fetching tasks
* Creating tasks
* Updating tasks
* Deleting tasks
* Managing task status

---

## Skills Demonstrated

This project demonstrates practical experience with:

* React Components
* React Hooks
* State Management
* API Integration
* Axios
* Responsive Web Design
* CSS Styling
* Dark Mode Implementation
* Search & Filtering Logic
* CRUD Operations
* Frontend-Backend Communication
* Git & GitHub Workflow

---

## Future Enhancements

* JWT Authentication
* User Login & Registration
* Protected Routes
* Role-Based Access Control
* Drag & Drop Task Management
* Due Date Notifications
* Advanced Analytics Dashboard
* Cloud Deployment
