const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middleware/error-middleware');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goal-routes'));
app.use('/api/users', require('./routes/user-routes'));

app.use(errorHandler);

app.listen(port, () => { console.log(`app listen on port ${port}`) });