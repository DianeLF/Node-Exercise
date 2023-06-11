const cowsay = require("cowsay");
const info = require("./information.js");

console.log(cowsay.say({
    text: `Hi I'm ${info.name} and based in ${info.campus} !`,
    e: "oO",
    T: "U"
}));