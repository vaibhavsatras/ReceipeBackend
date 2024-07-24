const mongoose = require('mongoose')
const validator = require("email-validator");
const {createHmac,randomBytes, hash}  = require('crypto');
const { Authorization } = require('../Auth/auth');


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        valid: validator.validate(this.email) 
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
    },
    salt:{
        type: String
    }

},{timestamps: true})

//User Signup
userSchema.pre('save',function(next){

    const user = this

    try {
        
        if(!user) throw new Error('User Does Not Exists...')
        
        const salt = randomBytes(32).toString()
        const hashPassword = createHmac('sha256',salt).update(user.password).digest('hex')

        this.salt = salt
        this.password = hashPassword

        next()

    } catch (error) {

        console.log(error.message)
        
    }
    

})


//User Sign In

userSchema.static('matchPassword', async function(email,password){
    
    try {

        const user = await this.findOne({email:email})
        
        if(!user) throw new Error('User Does Not Exists...');

        const salt = user.salt
        const oldPassword = user.password
        const newHashPassword = createHmac('sha256',salt).update(password).digest('hex')

        if(oldPassword !== newHashPassword) throw new Error('Please Enter Correct password..')
        
            const token = Authorization(user)
            return token

    } catch (error) {

        console.log(error.message)
        
    }

}) 


userSchema.static('forgotPass',async function(email,password,newPassword){

    const user = await this.findOne({email:email})

    try {

        if(!user) throw new Error('Please Enter Correct Email Address')

    const salt = user.salt
    
    const hashPassword = createHmac('sha256',salt).update(password).digest('hex')

    let hashNewPassword = createHmac('sha256',salt).update(newPassword).digest('hex')

    if(hashPassword !== hashNewPassword) throw new Error('Re-Enter Password Does Not Match')
    
        return {
            hashPassword,
            hashNewPassword
        }

    } catch (error) {

        console.log(error.message)
        
    }  
       
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel