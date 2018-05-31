const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first: String,
  last: String
})

module.exports = mongoose.model('User', userSchema)