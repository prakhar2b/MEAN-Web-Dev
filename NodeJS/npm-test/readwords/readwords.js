var censor = require("censorify");

var app = censor();

console.log(app.getCensoredWords());
console.log(app.censor("Some very sad, bad, and mad text"));
app.addCensoredWords("gloomy");
console.log(app.addCensoredWords());
console.log(app.censor("A very gloomy day."));