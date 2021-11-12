/**
 * @param {*} fastify
 */

module.exports = (fastify) => {
    const formController = require('../controllers/Form_controller')
    const formHTML = require('../controllers/Form_controller').create2

    fastify.post('/formHTML/create2', formController.create2)

    fastify.post('/form/create', formController.create)

    fastify.get('/form/getAll', formController.findAll)

    fastify.delete('/form/deleleOne/:id', formController.delete)
}


/**
 *     const formRoute = {
        url: "/formHTML/create2",
        method: "POST",
        handler: formHTML
    }
    fastify[formRoute]
 */