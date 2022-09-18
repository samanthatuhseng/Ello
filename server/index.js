const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// tell the server to use the models files
//load the routers from other files
const taskRouter = require('./routes/tasks.js');
const usersRouter = require('./routes/users.js');

// routers are added as middleware
app.use('/task', taskRouter);
app.use('/user', usersRouter);

//server listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
