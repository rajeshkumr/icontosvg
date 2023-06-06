# This project is used to convert image files into svg

# Dependencies
| Tools | Version 
|------ | ------- 
| nodeJS | 14.x LTS

# How to run and transform image into SVG
1. Clone project
2. Run command `npm install` to install all dependencies
2. Run command `npm start` to run the project
3. Open `localhost:<port number>` and go to `/convertor` page.
4. Upload file and hit submit to get the svg format.

# How to run use in code
Add code `var convertor = require("icontosvg")`;
`convertor` is promise based and use promise based success and error chaining to get output
example:
`var convertor = require("icontosvg")`
`convertor(<path of the image>).then(function(result){
  console.log("SVG image", result)
}).catch(function(err){
  console.error("Error", err);
  throw err;
})`