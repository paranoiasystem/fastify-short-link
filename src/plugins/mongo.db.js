const fp = require('fastify-plugin')
const MongoDB = require('fastify-mongodb')

const mongodb = fp(async (fastify, opts) => {
  let mongoOpts = Object.assign({}, {
    useNewUrlParser: true,
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/',
  }, opts.mongodb)

  fastify.register(MongoDB, mongoOpts)
})

module.exports = mongodb