const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

const URI = process.env.dbURL
    ? process.env.dbURL
    : 'mongodb://localhost/crudNode';

module.exports= () =>{
    mongoose.connect(URI,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    });
    
    
    const connection = mongoose.connection
    
    connection.once("open",()=>{
        console.log("DB is connected ");
    })
}

/*
module.exports= ()=>{
    mongoose.connect(dbURL,{useNewUrlParser:true})
    .then(()=>console.log(connected("conectado a la base de datos")))
    .catch(err => console.log(`Ocurred error ${err}`))

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log('Mongosse is disconnected');
            process.exit(0);
        })
    })
}
*/