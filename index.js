const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

app.use(express.json());

const port =process.env.port || 5000;

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.listen(port, () =>{
    console.log("server running on port " + port);
});