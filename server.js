const PORT = process.env.PORT || 4000
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
require('./config/db');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const auth = require('./routes/auth');

app.use('/auth', auth)


app.listen(PORT, function () {
    console.log('App started')
})

app.get("/", (req, res) => {
    res.json('welcome!!')
})