const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const homeRoute=(req,res)=>{
    res.send({'message':'server running 123'});
}

app.get('/',homeRoute)

app.post('/',async(req,res)=>{
    const url='https://test-f4e61-default-rtdb.firebaseio.com/list1.json'

    const data = {username:'Chirag',lastname:'Mittal'};

    try {
        const response = await axios.post(url,data);
        console.log(response)
        res.status(response.status).send(response.data)
    } catch (error) {
        console.log(error.response.data)
        res.status(404).send(error.response.data)
    }
    // res.send("Post request working fine")
})

app.post('/fomBody',async (req,res)=>{
    const url='https://test-f4e61-default-rtdb.firebaseio.com/body.json'
    const username1=req.body.username;
    const password1=req.body.password;
    const name1=req.body.name;

    const data={username:username1,password:password1,name:name1};
    console.log(data)

    try {
        const response=await axios.post(url,data);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

app.post('/feedback',async (req,res)=>{
    const url='https://test-f4e61-default-rtdb.firebaseio.com/feedback.json'
    const rating1=req.body.rating;
    const feedback1=req.body.feedback;

    const data={rating:rating1,feedback:feedback1};
    console.log(data)

    try {
        const response=await axios.post(url,data);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})


app.get('/param/:param1',(req,res)=>{
    const param=req.params.param1;
    const query=req.query.query;
    res.send({"params":req.params,"query":req.query});
})

app.listen(5000,console.log('server running on 5000'))