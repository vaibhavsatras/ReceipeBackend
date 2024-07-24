const userModel = require("../model/userSchema")


const userSignUp = async(req,resp)=>{

    const {name,email,phone,password} = req.body

    try {

        const mail = await userModel.findOne({email:email})

        if(mail) throw new Error('User Already Registered..')
            
        const newUser = await new userModel({

            name: name,
            email: email,
            phone:phone,
            password: password
    
        })
    
         const newData = newUser.save()
    
        resp.json({result: 'User Regsiter Successfully..'})

    } catch (error) {

        resp.json({error:error.message})
        
    }

    


}

const userSignIn = async(req,resp)=>{

    const {email,password} = req.body

    try {

        if(!email && !password) throw new Error('Please Enter All Details')
        
            const userMatch = await userModel.matchPassword(email,password)
          return resp.json({token:userMatch})

    } catch (error) {
       resp.json({result:error.message})
    }

}

const userForgotPassword = async (req,resp)=>{

    const {email,password,newPassword} = req.body

    try{

    const {hashPassword,hashNewPassword} = await userModel.forgotPass(email,password,newPassword)

    if(!hashPassword || !hashNewPassword) throw new Error('Please Enter Correct Password')    
    
        const user = await userModel.findOneAndUpdate({email:email},{$set:{password:hashPassword}})

        if(user.password === hashPassword) throw new Error(`Please Don't Use old Password`)
        
        resp.json({result: 'Password Updated Successfully...'})
        

    } catch (error) {
        
        resp.json({error:error.message})
    }
   
    
}

module.exports = {
    userSignUp,
    userSignIn,
    userForgotPassword
}