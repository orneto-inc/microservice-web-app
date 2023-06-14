
// All dependencies
const express = require('express');
const cors = require('cors');
const connect = require('./database/connect.js')

// initializing app as express app
const app = express();

// PORT defining for local development
const PORT = 8000;


// Get Request
app.get('/', (req, res)=>{
    res.status(201).json("This is GET Request for Homepage - User Login Service is On");
    res.send(`This is runnning on port ${PORT}`);
});

// App starting on Local Port
app.listen(PORT, ()=>{
        console.log(`This is app is running on port ${PORT}`);
});
