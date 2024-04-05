import express from 'express';

const app = express();

app.get('/first', (req, res)=>{
    res.send("the first request");
})

app.get('/second', (req, res)=>{
    res.send("the second request");
})


app.listen(5000, ()=>{

    console.log('server is running on 5000');

})