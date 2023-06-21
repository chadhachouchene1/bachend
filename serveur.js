const express=require('express');

const User=require('./models/user');
require( './config/connect');
const app = express();
app.use(express.json());
app.post('/add',(req,res)=>{
    data=req.body;
    usr=new User(data);
    usr.save()
        .then(
            (savedUser)=>{
                res.send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    



});
app.post('/create',async(req,res)=>{
    try{
        data=req.body;
        data=new User(data);
        savedUser=await usr.save()
        res.send(savedUser)


    }catch (error){
        res.send(error)

    }







})
app.get('/getall',(req,res)=>{
    User.find()
        .then(
            (users)=>{
                res.send(users)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    



});
app.get('/getbyid/:id',(req,res)=>{
    myid=req.params.id;
    User.findOne()
        .then(
            (user)=>{
                res.send(user)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    



});
app.get('/all',async(req,res)=>{
    try{
       users= await User.find();
       res.send(users);


    }catch (error){
        res.send(error)

    }






})
app.put('/update',()=>{
    console.log('update work');



});
app.delete('/delete/id:',(req,res)=>{
    id=req.params.id;
    User.findById({ _id:id })
        .then(
            (deletedUser)=>{
                res.send(deletedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    



});

app.listen(3003,()=>{

    console.log('hello dadou');
});


