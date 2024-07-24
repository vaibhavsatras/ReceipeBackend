const blogModel = require("../model/blogSchema")

const getBlogs = async(req,resp)=>{

    const blogs = await blogModel.find()

    resp.json(blogs)

}

module.exports = getBlogs
