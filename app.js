const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log("Example app listening on port ${port}!"));

app.get('/', function (req, res){
    res.send('App Get sent!');
    res.end();
});

app.post('/', function(req, res){
    res.send('Got post request!');
    res.end();
});

app.put('/user', function(req, res){
    res.send('Got a put request at /user!');
    res.end();
});

app.delete('/user', function(req, res){
    res.send('Got a delete request at /user');
    res.end();
});