const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/iLogicaDBTest',
       {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (error) => {
            if (error) {
                console.log('tenemos un error', error)
            } else {
                console.log('Nos conectamos a la DB')
            }
        })
}
module.exports = { connectToDB }



// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://FelipeG:Admin.FelipeG@ilogicadatabase.mbmru.mongodb.net/formulariosEnviados?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
