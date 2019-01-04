const mongoose = require('mongoose')
const { WordSchema } = require('./schema')

const WordModel = mongoose.model('Word', WordSchema)

module.exports = { Word: WordModel }