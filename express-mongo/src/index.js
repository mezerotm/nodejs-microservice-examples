const express = require('express')
const app = express()

const mongoose = require('mongoose')
// connect to mongo atlas
// mongoose.connect('mongodb+srv://user:user@cluster0-pe7fy.mongodb.net/Cluster0?retryWrites=true')

// connect to docker mongo
mongoose.connect('mongodb://mongo:27017')
const User = require('./mongo/models/users.js')

const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', function(req, res) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    first: 'nodemon',
    last: 'works!',
  })
  user.save()
    .then(function(result) {
    console.log(result)
  })
    .catch(function(error) {
      console.error(error)
    })

  res.json(user)
})

const PORT = process.env.PORT || 8000
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
})