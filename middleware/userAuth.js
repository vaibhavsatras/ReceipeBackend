const { Authintication } = require("../Auth/auth")


const userAuthintication = (req,resp,next)=>{

    const token = req.headers['authorization']

        try {
            
            if(!token) throw new Error('Token not Found...')

            const user = Authintication(token)
            if(!user) throw new Error('User not Authinticate...')

            req.user = user
            next()

            return user


        } catch (error) {   

            console.log(error.message)
            
        }

}

module.exports = {
    userAuthintication
}