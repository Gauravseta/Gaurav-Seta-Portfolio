var express=require('express');
var app=express();
var path=require('path');


app.use( express.static(path.join(__dirname)));


app.get('/',function(req,res){

	res.sendFile(path.join(__dirname+'/views/index.html'));

});

app.get('/work',function(req,res){
	res.sendFile(path.join(__dirname+'/views/workscreen.html'));
});
app.listen(process.env.PORT||8080);
