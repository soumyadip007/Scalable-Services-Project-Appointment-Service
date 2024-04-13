const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const responseWrapper = require('./middlewares/responseWrapper');
const errorHandler = require('./middlewares/errorHandler');

const app = express()

const url = 'mongodb://localhost:27017/blockchain'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function () {
    console.log('MongoDb Connected')
});

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(responseWrapper())
    .use('/project', routes)
    .use(errorHandler());


// Middleware to set the Referrer-Policy header
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.listen(3000, () => {
    console.log("Server Started")
})
