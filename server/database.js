const mongoose = require('mongoose')

const Database_Connnect = mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

try {
    if(!Database_Connnect) throw new Error('Database not Connected...')
    
        console.log('Database Connected Successfully...')

} catch (error) {
    
    console.log(error.message)
}


module.exports = Database_Connnect
