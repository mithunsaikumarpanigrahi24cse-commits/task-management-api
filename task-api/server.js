const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();
connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});