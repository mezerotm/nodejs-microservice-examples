const {json} = require('micro')

const db = require('./mongo/connect')
const postUser = require('./mongo/postUser')

module.exports = async (req, res) => {
  return postUser(await json(req))
}