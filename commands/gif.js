const { MessageAttachment, MessageEmbed, Message } = require('discord.js');

module.exports = async function (msg, args)
{
    const baseFilePath = process.env.BASE_GIF_PATH;
    const fileParam = process.env.FILE_PARAM;
    const fileExt = '.gif';
    const gifName = args[0];

    const file = new MessageAttachment(baseFilePath + gifName + fileExt + fileParam );

    if (gifName === undefined)
        msg.reply("Include a fucking name")
    else
        msg.channel.send( { files: [file] } );
}