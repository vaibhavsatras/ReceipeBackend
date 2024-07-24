const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

        title: String,
        date : String,
        views: String,
        imageSrc: String,
        catageory: String

})

const blogModel = mongoose.model('blogs',blogSchema)

module.exports = blogModel