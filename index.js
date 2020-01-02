const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("data.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
//console.log(jsonContent)

for (var exKey in jsonContent) {

    for (var ex2Key in jsonContent[exKey]) {
        //console.log("key:"+ex2Key+", value:"+jsonContent[exKey]);

        //console.log( JSON.stringify(ex2Key, null, 2) ); 

        for (var ex3Key in jsonContent[exKey][ex2Key]) {
           console.log( JSON.stringify(jsonContent[exKey][ex2Key][ex3Key], null, 2) ); 
           let h = 50;
           let g = 100;
           delete jsonContent[exKey][ex2Key]['B']
           delete jsonContent[exKey][ex2Key]['R']
           jsonContent[exKey][ex2Key]['LCS'] = jsonContent[exKey][ex2Key]['G'] + jsonContent[exKey][ex2Key]['F'] * g / 100 - h
           console.log(jsonContent)
         
        }
        
    }
}

//delete jsonContent['3']['9']['B']
//console.log(jsonContent)



// stringify JSON Object
var jsonString = JSON.stringify(jsonContent);
//console.log(jsonString);
 
fs.writeFile("output.json", jsonString, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    //console.log("JSON file has been saved.");
});




