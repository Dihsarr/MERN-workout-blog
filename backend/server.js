//main server file

//used to stat the server
const express = require('express')
//used to extrapolate routing code to another file
const workoutRoutes = require('./routes/workouts');
//used to connect to the database
const mongoose = require('mongoose');

//loads the .env file into process.env
require('dotenv').config()

//creates express app
const app = express();

//middleware
//attaches json to the req.body
app.use(express.json())


app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

//handles the routes
app.use('/api/workouts',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listens for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to db & listening for requests on port 3000')
        })
    })
    .catch((err) => {
        console.log(err);
    })


