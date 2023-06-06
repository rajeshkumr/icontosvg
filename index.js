var express = require('express');
var template = require('./template');
var convertor = require('./convertor');
const multer  = require('multer');
const fs = require("fs");
const upload = multer({ dest: 'uploads/' })

var app = express();
if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').config(); 
}
var port = process.env.PORT || 3000;
    
app.get('/', function (req, res) {
  res.send("App is running successfully. Please browse <a href='/convertor'>here</a> to upload and transform image.");
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
app.get('/convertor', function (req, res) {
  res.send(template);
});
app.post('/submit', upload.single('attachment'), function (req, res, next) {
  fs.unlink("output.svg", function(){});
  const result = convertor(req.file.path);
  result.then(function(output){
    res.status(201).send(output);
    fs.unlink(req.file.path, function(){});
    next();
  }).catch(function(err){
    res.status(500).send(err.message);
    fs.unlink(req.file.path, function(){});
    next();
  });
});