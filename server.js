const client = require('./connection.js')
const express = require('express');
const router = require('./routes')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/api", router);
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 33 00");
})

client.connect();