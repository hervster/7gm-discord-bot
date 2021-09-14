const { MessageAttachment, MessageEmbed, Message } = require('discord.js');

module.exports = async function (msg, args)
{   
    const baseFilePath = process.env.BASE_WEBM_PATH;
    const fileParam = process.env.FILE_PARAM;
    const fileExt = '.webm';
    const webmName = args[0];

    const file = new MessageAttachment(baseFilePath + webmName + fileExt + fileParam );

    if (webmName === undefined)
        msg.reply("Please include a name")
    else
        msg.channel.send( { files: [file] } );
}