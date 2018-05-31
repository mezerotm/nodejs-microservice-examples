const {ServiceBroker} = require('moleculer')

const broker = new ServiceBroker({logger: console})
const db = require('./mongo/connect')
const postUser = require('./mongo/postUser')

broker.createService({
  name: 'math',
  actions: {
    add(req) {
      return req.params.a + req.params.b
    }
  }
})

broker.start()
  .then(() => broker.call("math.add", { a: 5, b: 3 }))
  .then(res => console.log("5 + 3 =", res))
  .catch(err => console.error(`Error occured! ${err.message}`))
