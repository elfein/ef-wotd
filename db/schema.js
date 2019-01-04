const Schema = require('mongoose').Schema

const WordSchema = new Schema({
    name: String,
    definition: String,
    dateId: Number
})

module.exports = { WordSchema }