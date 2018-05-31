const mongoose = require('mongoose')

mongoose.connection.on('connected', function() {
  module.exports = mongoose
})

mongoose.connection.on('disconnected', function () {
  let connection = 'mongo://mongo'
  console.log('attempting to connect to: ' + connection)
  module.exports = mongoose.connect('mongo://mongo')
});

