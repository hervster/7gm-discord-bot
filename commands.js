const vid = require("./commands/vid.js");
const img = require("./commands/img.js");
const gif = require("./commands/gif.js");
const webm = require("./commands/webm.js");
const list = require("./commands/list.js");
const help = require("./commands/help.js");


const commands = { vid, gif, img, list, help, webm };

module.exports = async function (msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    if (command.charAt(0) === "!"){
        command = command.substring(1);

        if ( (command in commands) ){
            commands[command](msg, tokens);
        } else {
            msg.reply("Please format your command correctly, or ensure you're using an available command");
        }
    }
}