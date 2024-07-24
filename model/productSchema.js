const mongoose = require('mongoose')

const ingridientsScheam = new mongoose.Schema({

        name:{
            type: String,
            required: true
        },
        quantity:{
            type: String,
            required: true
        }   

})

const commentSchema = new mongoose.Schema({

        user:{
            type: String,
        },
        comment:{
            type: String
        }

})

const moreSchema = new mongoose.Schema({
    pre_time:{type: String, required:true},
    cook_time:{type: String, required:true},
    servings:{type: String, required:true},
    difficulty:{type: String, required:true},
    source:{type: String, required:true}
})

const productSchema = new mongoose.Schema({

        menuId:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        thumbnail_image:{
            type: String
        },
        category:{
            type: String,
            required: true
        },
        instructions:{
            type: String,
            required: true
        },
        tags:{
            type: []
        },

        ingredients:{

            type:[ingridientsScheam],
            required: true
        },

        comments:{
            type: [commentSchema],
            required: true
        },
        more:{
            type: [moreSchema],
            required: true
        }


},{timestamps: true})

const productModel = mongoose.model('products',productSchema)

module.exports = productModel