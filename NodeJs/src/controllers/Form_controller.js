const formModel = require('../models/form');
var MongoClient = require('mongodb').MongoClient;
/**
 * 
 * @param {*} raw 
 * @param {*} reply 
 */

//Post
exports.create = (raw, reply) => {
    console.log('acá viene el body: ', raw)
    const form = formModel({
        Fullname: raw.body.Fullname,
        Email: raw.body.Email,
        Phone: raw.body.Phone,
        Message: raw.body.Message
    })
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
    console.log('request in routes: ', raw.body)
    const formHTML = formModel({
            Fullname: raw.body.Fullname,
            Email: raw.body.Email,
            Phone: raw.body.Phone,
            Message: raw.body.Message
        })
        // reply.redirect('/')
    await formHTML.save().then(
        data => {
            console.log('enviando la info')
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
let url = 'mongodb+srv://FelipeG:Admin.FelipeG@ilogicadatabase.mbmru.mongodb.net/formulariosEnviados?retryWrites=true&w=majority'

//Get
exports.findAll = async(raw, reply) => {
    console.log('acá viene el request: ', raw)
    formModel.find({}, (err, data) => {
        if (err) throw err
        reply.send({
            data
        })
    })
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
    formModel.deleleOne(raw.body.form, form).then(
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