require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
})
// mongoose error handling
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build/'))

// controller setup
const wordsController = require('./routes/wordsController')
app.use('/api/words', wordsController)

// root index
app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

module.exports = app
