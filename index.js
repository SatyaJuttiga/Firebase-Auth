var express=require('express');
var app=express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
});

app.listen(port,()=>{
    console.log('server started on port' + port);
});
