const express=require('express');
const app=express();
const port=5000;
var routes = require('./routes/wether');
app.use('/',routes)
//console.log(routes);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port,()=>{
    console.log('app running on port -'+port)
})