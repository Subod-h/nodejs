const { log } = require("console");
const { fs }= require("fs");
import { randomSuperhero } from "superheroes";

log(randomSuperhero());
// fs.writeFile("message1.txt", "Helllo From Subodh", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved successfully");
// })

fs.readFile("message1.txt", "utf8", (err, data) =>{
    if(err) throw err;
    log(data);
});

fs.readFile("message.txt", "utf8", (err, data)=>{
    if(err) throw err;
    else{
        log(data);
    }
})