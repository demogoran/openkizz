const fastify = require('fastify')({ logger: false })
const path = require('path')
const simpleGit = require('simple-git')();

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../dist'),
})



fastify.get('/api/getMDHTML', async () => {
    return { hello: 'world' }
})

fastify.get('/api/saveGit', async (request, reply) => {
    return { hello: 'world' }
})





// Run the server!
const start = async () => {
    try {
        await fastify.listen(1511)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()