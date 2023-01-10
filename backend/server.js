const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const color = require('colors');
const connectDB = require('./config/db');
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/goals', require('./routes/goalRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})
