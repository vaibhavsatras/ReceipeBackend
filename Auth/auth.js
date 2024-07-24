const jWT = require('jsonwebtoken')
const key = process.env.SEC_KEY


const Authorization = (user)=>{

        try {
            if(!user) throw new Error('User Does Not Found')
            
                const token = jWT.sign({

                    _id: user._id,
                    email: user.email,
                    
                },key)
        
                if(!token) throw new Error('Token Is Invalid')
                
                    return token

        } catch (error) {
            console.log(error.message)
        }        

}

const Authintication = (token)=>{

        const user = jWT.verify(token,key)

       return user

}


module.exports = {
    Authorization,
    Authintication
}