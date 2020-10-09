//Budget API
const bodyParser = require('body-parser');
var fs =require('fs');
const express = require('express');
const cors = require('cors');
const app=express();
const port=3000;
var data_json =fs.readFileSync('./myBudget.json','utf8')

var budget =JSON.parse(data_json);

//app.use('/',express.static('public'));
app.use(cors());

//app.use(bodyParser.json());


app.get('/Hello',(req,res) => {
    res.send('Hello world!');
});

app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port,()=> {
    console.log(`API served at http://localhost:${port}`)
});