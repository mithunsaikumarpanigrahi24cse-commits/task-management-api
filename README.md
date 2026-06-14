# Task Management REST API

A professional RESTful CRUD API built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project allows users to create, retrieve, update, and delete tasks using REST API endpoints.

---

## Features

✔ Create a new task  
✔ Get all tasks  
✔ Get a single task by ID  
✔ Update a task by ID  
✔ Delete a task by ID  
✔ MongoDB database integration  
✔ Schema validation using Mongoose  
✔ Error handling middleware  
✔ Logging using Morgan  
✔ Environment variable configuration

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Postman
- Nodemon
- Morgan
- dotenv

---

## Project Structure

```plaintext
task-management-api
│
├── config
│   └── db.js
│
├── controllers
│   └── taskController.js
│
├── middleware
│   └── errorMiddleware.js
│
├── models
│   └── Task.js
│
├── routes
│   └── taskRoutes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

### Folder Explanation

| Folder/File | Purpose |
|-------------|----------|
| **config/db.js** | MongoDB connection logic |
| **models/Task.js** | Defines task schema & validation rules |
| **controllers/taskController.js** | Contains CRUD business logic |
| **routes/taskRoutes.js** | Defines API routes |
| **middleware/errorMiddleware.js** | Centralized error handling |
| **server.js** | Application entry point |

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/mithunsaikumarpanigrahi24cse-commits/task-management-api
```

### Move Into Project Folder

```bash
cd task-management-api
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root folder.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
```

### Start Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## API Endpoints

### 1. Create Task

**POST**

```http
/tasks
```

#### Request Body

```json
{
  "title":"Learn Node.js",
  "description":"Practice CRUD API"
}
```

#### Response

```json
{
  "_id":"685xxxxx",
  "title":"Learn Node.js",
  "description":"Practice CRUD API",
  "completed":false
}
```

---

### 2. Get All Tasks

**GET**

```http
/tasks
```

#### Response

```json
[
  {
    "_id":"685xxxxx",
    "title":"Learn Backend",
    "completed":false
  }
]
```

---

### 3. Get Task By ID

**GET**

```http
/tasks/:id
```

#### Example

```http
/tasks/685xxxxx
```

---

### 4. Update Task

**PUT**

```http
/tasks/:id
```

#### Request Body

```json
{
  "completed": true
}
```

---

### 5. Delete Task

**DELETE**

```http
/tasks/:id
```

---

## Mongoose Schema

```javascript
const taskSchema = new mongoose.Schema({

title:{
type:String,
required:true,
trim:true
},

description:{
type:String
},

completed:{
type:Boolean,
default:false
}

},{
timestamps:true
});
```

---

## Error Handling

The project includes centralized error handling middleware for managing application errors.

Examples:

- Invalid task ID
- Task not found
- Validation failures
- Server errors

---

## Logging

Morgan middleware is used for request logging.

Example:

```bash
GET /tasks 200 5ms
POST /tasks 201 12ms
```

---

## Testing

This API was tested using **Postman**.

CRUD operations tested:

✔ POST request  
✔ GET request  
✔ GET by ID  
✔ PUT request  
✔ DELETE request

---

## What I Learned

Through this project, I learned:

- Building REST APIs using Express
- CRUD operations
- MongoDB database integration
- Mongoose schemas & validation
- MVC project architecture
- Error handling middleware
- Environment variables
- Git & GitHub workflow
- API testing using Postman

---

## Future Improvements

- Pagination
- Search & filtering
- Authentication & Authorization
- JWT Login System
- Swagger API Documentation

---

## Author

**Mithun Sai Kumar**

GitHub:https://github.com/mithunsaikumarpanigrahi24cse-commits
