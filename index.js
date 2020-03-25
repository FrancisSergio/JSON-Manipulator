// const express = require('express')
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World! !!!')
// });

// app.listen(8000, () => {
//   console.log('Example app listening on port 8000!')
// });

var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("data.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
//console.log(jsonContent)

for (var exKey in jsonContent) {

    for (var ex2Key in jsonContent[exKey]) {

        for (var ex3Key in jsonContent[exKey][ex2Key]) {
            let h = 50;
            let g = 100;
            let jahre = 20;
            delete jsonContent[exKey][ex2Key]['B']
            delete jsonContent[exKey][ex2Key]['R']

            for (let jahre = 10; jahre < 101; jahre = jahre + 10) {
                let stahlF = ((jsonContent[exKey][ex2Key]['F']) / 2.0833333333) + (Math.ceil((jsonContent[exKey][ex2Key]['G'] / 1000) * 0.04651851852) * 25) + ((jsonContent[exKey][ex2Key]['G']/1000) * 18.8981481481) + ((jsonContent[exKey][ex2Key]['F']) * 0.2) * (Math.floor(jahre / 10) - 1) * 6 + (405 * (Math.ceil(jahre / 80))) + (jsonContent[exKey][ex2Key]['F']) * 0.25 * (Math.floor(jahre / 10) - 1) * 3;
                let holzF = (240.3 * (Math.ceil(jahre / 40))) + ((Math.floor(jahre / 10) - 1) * (jsonContent[exKey][ex2Key]['F']) * 0.75) + ((jsonContent[exKey][ex2Key]['F']) * (Math.floor(jahre / 10) - 1) * 1.2) + ((jsonContent[exKey][ex2Key]['G'] / 1000) * 12.740740740) + (Math.ceil((jsonContent[exKey][ex2Key]['G'] / 1000) * 0.05096296296) * 25) + ((jsonContent[exKey][ex2Key]['G'] / 1000) * 11.85185111042205) + 120;
                let alu = 750 + (Math.ceil((jsonContent[exKey][ex2Key]['G'] / 1000) / 25) * 25) + ((jsonContent[exKey][ex2Key]['G'] / 1000) * 15);

                
                jsonContent[exKey][ex2Key]['S'+jahre] = Math.round(100 * (stahlF / alu)) / 100;
                jsonContent[exKey][ex2Key]['H' + jahre] = Math.round(100 * (holzF / alu)) / 100;
                
            }
            console.log(jsonContent)
         
        }
        
    }
}


var jsonString = JSON.stringify(jsonContent);

 
fs.writeFile("output.json", jsonString, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    //console.log("JSON file has been saved.");
});




