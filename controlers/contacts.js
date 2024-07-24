const contactModel = require("../model/contactSchema")

const addContact = async(req,resp)=>{

    const {email,phone} = req.body

    const newContact = await new contactModel({
        email:email,
        phone:phone
    })

    const data = await newContact.save()

   return await resp.json(data)

}

module.exports = {

        addContact

}