const vid = require("./commands/vid.js");
const img = require("./commands/img.js");
const gif = require("./commands/gif.js");
const list = require("./commands/list.js");
const help = require("./commands/help.js");

/*
module.exports = async function (msg) {
    if (msg.content === "Yo Yo")
            msg.reply("ayooooo");
}
*/

const commands = { vid, gif, img, list, help };

module.exports = async function (msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    if (command.charAt(0) === "!"){
        command = command.substring(1);

        // Try catch for non commands, type error exception
        // Commands const is like lookup
        commands[command](msg, tokens);
    }
}