const bodyParser = require('body-parser');
var fs =require('fs');
const express = require('express');
const app=express();
const port=3000;
var data_json =fs.readFileSync('./myBudget.json','utf8')
var budget =JSON.parse(data_json);

app.use('/',express.static('public'));

//app.use(bodyParser.json());


app.get('/Hello',(req,res) => {
    res.send('Hello world!');
});

app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port,()=> {
    console.log(`Example app listening at http://localhost:${port}`)
});