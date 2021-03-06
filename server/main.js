const fastify = require('fastify')({ logger: false })
const path = require('path')


fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../dist'),
})



fastify.get('/api/getMDHTML', async () => {
    return { hello: 'world' }
})

fastify.get('/api/saveGit', async () => {

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