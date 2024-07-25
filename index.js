require('dotenv').config()
require('./server/database')
const express = require('express');
const app = express();
const router = require('./Routers/productRoute');
const catroute = require('./Routers/catagoryRoute')
const blogRoute = require('./Routers/blogRouter')
const contactRoute = require('./Routers/contactRoute')
const cors = require('cors')
const userRoute = require('./Routers/userRouter') 

const PORT =  process.env.PORT || 5000

app.use(express.json())
app.use(cors({

    origin:["https://food-receipe-three.vercel.app"],
    methods:["GET","POST"],
    credential: true

}))



app.get('/home',(req,resp)=>{

    resp.send('Home')

})

app.use('/',router)
app.use('/',catroute)
app.use('/',blogRoute)
app.use('/',contactRoute)
app.use('/user',userRoute)


app.listen(PORT,()=>{console.log(`Server is Running on http://localhost:${PORT}`)})
