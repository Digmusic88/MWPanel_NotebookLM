const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../routes/auth');
const userRoutes = require('../routes/users');
const courseRoutes = require('../routes/courses');
const categoryRoutes = require('../routes/categories');
const assignmentRoutes = require('../routes/assignments');
const messageRoutes = require('../routes/messages');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
  res.send('LMS API');
});

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
