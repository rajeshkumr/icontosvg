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

var homePage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Status</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .container {
      text-align: center;
      background: #fff;
      padding: 20px 40px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .container h1 {
      color: #4CAF50;
      margin: 0 0 10px;
      font-size: 24px;
    }

    .container p {
      margin: 0 0 15px;
      font-size: 18px;
      color: #666;
    }

    .container a {
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      background: #4CAF50;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .container a:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Icon to SVG convertor</h1>
    <p>Please browse <a href="/convertor">here</a> to upload and transform an image.</p>
  </div>
</body>
</html>
`;
    
app.get('/', function (req, res) {
  res.send(homePage);
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