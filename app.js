const express = require('express')
const bodyParser = require('body-parser')
// initialize our express app
const app = express()
const port = 1234;

app.listen(port, function () {
    console.log('Server is up and running on port numner ' + port);
})