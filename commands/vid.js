const { MessageAttachment, MessageEmbed, Message } = require('discord.js');

module.exports = async function (msg, args)
{
    console.log("Im a vid");
    // const file = new MessageAttachment('./TestFiles/yugi.mp4');
    const file = new MessageAttachment('E:\\CODE\\DiscordBots\\7GM\\TestFiles\\yugi.mp4');
    const file2 = new MessageAttachment('./TestFiles/yugi.mp4');
    const file3 = new MessageAttachment('./TestFiles/bing.webm');

    msg.channel.send( { files: [file3] } );
}