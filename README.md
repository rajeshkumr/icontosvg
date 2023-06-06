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

# How to implement package in code
1. Install package `npm i icontosvg`
2. Add this line to get promise based instance `var convertor = require("icontosvg")`;
Note: `convertor` is promise based and use promise based success and error chaining to get output
3. example:
`var convertor = require("icontosvg")`
`convertor(<VALID_IMAGE_PATH>).then(function(result){`
  `console.log("SVG image", result)`
`}).catch(function(err){`
  `console.error("Error", err);`
  `throw err;`
`})`