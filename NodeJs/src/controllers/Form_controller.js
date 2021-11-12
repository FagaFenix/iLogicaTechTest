const formModel = require('../models/form');
/**
 * 
 * @param {*} raw 
 * @param {*} reply 
 */

//Post
exports.create = (raw, reply) => {
    console.log('acá viene el body: ', raw)
    const form = formModel({
            Fullname: (raw.body.Fullname ? raw.body.Fullname : capture.fullName),
            Email: (raw.body.Email ? raw.body.Email : capture.email),
            Phone: (raw.body.Phone ? raw.body.Phone : capture.phone),
            Message: (raw.body.Message ? raw.body.Message : capture.message)
        })
        // reply.redirect('/')
    form.save().then(
        data => {
            reply.send(data)
        }
    ).catch(
        error => {
            return replay.status(error.status).send({
                message: error.message
            })
        }
    )
}

//post 2.0
exports.create2 = async(raw, reply) => {
    console.log('request in routes: ', raw)
    const formHTML = formModel({
            Fullname: raw.body.Fullname,
            Email: raw.body.Email,
            Phone: raw.body.Phone,
            Message: raw.body.Message
        })
        // reply.redirect('/')
    await formHTML.save().then(
        data => {
            reply.send(data)
        }
    ).catch(
        error => {
            return replay.status(error.status).send({
                message: error.message
            })
        }
    )
}


//Get
exports.findAll = (raw, reply) => {
    console.log('acá viene el request: ', raw)
    const form = formModel({
        Fullname: raw.body.FullName,
        Email: raw.body.Email,
        Phone: raw.body.Phone,
        Message: raw.body.Message
    })
    form.findAll(raw.body.form, form).then(
        data => {
            reply.send(data)
        }
    ).catch(
        error => {
            return replay.status(error.status).send({
                message: ("Error al buscar", error.message)
            })
        }
    )
}

//Delete
exports.delete = (raw, reply) => {
    console.log('acá viene el request: ', raw)
    const form = formModel({
        Fullname: raw.body.FullName,
        Email: raw.body.Email,
        Phone: raw.body.Phone,
        Message: raw.body.Message
    })
    formModel.delete(raw.body.form, form).then(
        data => {
            reply.send(data)
        }
    ).catch(
        error => {
            return replay.status(error.status).send({
                message: ("Error al eliminar", error.message)
            })
        }
    )
}