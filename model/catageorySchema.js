const mongoose = require('mongoose')

const catageorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    menuId:{
        type: Number,
        required: true
    }

})

const catageoryModel = mongoose.model('catagories',catageorySchema)
module.exports = catageoryModel;