const mongoose = require('mongoose')

const Database_Connnect = mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected',()=>{

  console.log('Database Connected Successfully')

})

mongoose.connection.on('error',(err)=>{

        console.log(err)

})

module.exports = Database_Connnect
