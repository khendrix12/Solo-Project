const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
// console.log('uri', process.env);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})



const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());



app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});