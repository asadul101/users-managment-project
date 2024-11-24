const express=require('express')
const cors=require('cors')
const app= express()
const port=process.env.PORT || 5000
//midlewere
app.use(cors())
app.use(express.json())

const users=[
   {id:1,name:'Asadul',email:'asadul@gmail.com'},
   {id:2,name:'Jaman',email:'jaman@gmail.com'},
   {id:3,name:'Roshid',email:'roshid@gmail.com'},
]
app.get('/',(req,res)=>{
   res.send('My servers managment  ports')
})
app.get('/users',(req,res)=>{
   res.send(users)
})

app.post('/users',(req,res)=>{
   console.log('hiet api rest');
   const newUser=req.body;
   newUser.id=users.length+1;
   users.push(newUser)
   res.send(newUser)
})
app.listen(port,()=>{
   console.log(`my port ${port}`);
})
