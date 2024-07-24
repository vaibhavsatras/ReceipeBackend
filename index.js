require('dotenv').config()
require('./server/database')
const express = require('express');
const router = require('./Routers/productRoute');
const catroute = require('./Routers/catagoryRoute')
const blogRoute = require('./Routers/blogRouter')
const contactRoute = require('./Routers/contactRoute')
const userRoute = require('./Routers/userRouter') 
const app = express();
const PORT =  process.env.PORT || 5000
const cors = require('cors')

const corConfig = {

    origin:['http://localhost:3000/'],
    methods:['GET','POST'],
    credential: true

}

app.use(cors(corConfig))
app.use(express.json())


app.get('/home',(req,resp)=>{

    resp.send('Home')

})

app.use('/',router)
app.use('/',catroute)
app.use('/',blogRoute)
app.use('/',contactRoute)
app.use('/user',userRoute)


app.listen(PORT,()=>{console.log(`Server is Running on http://localhost:${PORT}`)})