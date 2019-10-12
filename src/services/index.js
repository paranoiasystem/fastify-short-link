const root = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        reply.code(200)
        return { hello: 'world' }
    })
}

module.exports = root