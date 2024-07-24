const catageoryModel = require("../model/catageorySchema")
const productModel = require("../model/productSchema")

const getProducts = async(req,resp)=>{

        const products = await productModel.find()

        return resp.json(products)

}
const searchProducts = async (req,resp)=>{


    const products = await productModel.find({

        "$or":[
            
            {name: {$regex : req.params.key}}
            
        ]
    
    })
         resp.status(200).json(products)
}


const searchCatagory = async(req,resp)=>{

    const catageory = await catageoryModel.findOne({name: req.params.catagory})
    if(!catageory) return resp.json('Catageory Not Found...')

    const menu = await productModel.find({menuId: catageory.menuId})
    
    return resp.json(menu)

}

const getData = async(req,resp)=>{

    const product = await productModel.findById(req.params.id)

    if(!product) return resp.json('Product Not Available...');

    return resp.json(product)

}

module.exports = {
    getProducts,
    searchProducts,
    searchCatagory,
    getData
}