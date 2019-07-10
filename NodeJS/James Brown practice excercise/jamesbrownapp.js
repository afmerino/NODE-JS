
var {about} = require('./about.js');
var {contact} = require("./contact.js")
var {notFound} = require("./404.js")
var index = require


var James = "54";

console.log ("Welcome to our application. This is our James Brown application.");

if (James === "tall"){
    console.log(about);

} else if (James === "short"){
    console.log(contact);
}
else {
    console.log(notFound);
}
