const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    Fullname: { type: String, require: true },
    Email: { type: String, require: true },
    Phone: { type: Number },
    Message: { type: String, require: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Form', formSchema)