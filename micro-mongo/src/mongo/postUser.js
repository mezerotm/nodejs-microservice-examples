const User = require('./models/users')

module.exports = async (_user) => {
  let user = new User(_user)

  user.save()

  return user
}