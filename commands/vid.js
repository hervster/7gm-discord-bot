const { MessageAttachment, MessageEmbed, Message } = require('discord.js');

module.exports = async function (msg, args)
{   
    const baseFilePath = process.env.BASE_VID_PATH;
    const fileParam = process.env.FILE_PARAM;
    const fileExt = '.mp4';
    const vidName = args[0];

    const file = new MessageAttachment(baseFilePath + vidName + fileExt + fileParam );

    if (vidName === undefined)
        msg.reply("Please include a name")
    else
        msg.channel.send( { files: [file] } );
}