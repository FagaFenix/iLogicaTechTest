const fastify = require('fastify')({ logger: true })
const PORT = 3000
const cors = require('fastify-cors')
const { connectToDB } = require('./db')
const formbody = require('fastify-formbody')
const routes = require('fastify-routes')
    // const capture = require('./formDataCapture');
    // const bodyParser = require('body-parser')

fastify.register(cors)
fastify.register(formbody)
fastify.register(routes)


fastify.get('/', async(raw, reply) => {
    console.log('este es el request: ', raw)
    return reply.send({ hello: 'world' })
})

fastify.get('/newEndPoint', async(raw, reply) => {
    reply.send('Hello World!')
})

require('./routes/form_route')(fastify)


connectToDB()


const start = async() => {
    try {
        await fastify.listen(PORT)
        fastify.log.info(`server listening on port ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();