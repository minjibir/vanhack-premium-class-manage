'use strict'

const logger = require('morgan');
const express = require('express');
const helmet = require('helmet');
const attendanceRouter = require('./routes/attendance.route');
const premiumClassRouter = require('./routes/premium-class.route');
const sessionRouter = require('./routes/session.route');
const studentRouter = require('./routes/student.route');
const teacherRouter = require('./routes/teacher.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());

// Application routes
app.use('/api/attendances', attendanceRouter);
app.use('/api/premium-classes', premiumClassRouter);
app.use('/api/sessions', sessionRouter);
app.use('/api/students', studentRouter);
app.use('/api/teachers', teacherRouter);

// Default routes
app.get('/', async (req, res) => {
  res
    .status(200)
    .json({ result: 'vanhack premium class app' });
});

module.exports = app.listen(PORT, () => console.log(`Server running on ${PORT}`));
