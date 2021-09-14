const { MessageAttachment, MessageEmbed, Message } = require('discord.js');

module.exports = async function (msg, args)
{
    const baseFilePath = process.env.BASE_IMG_PATH;
    const fileParam = process.env.FILE_PARAM;
    const fileExt = '.png';
    const imgName = args[0];

    const file = new MessageAttachment(baseFilePath + imgName + fileExt + fileParam );

    if (imgName === undefined)
        msg.reply("Please include a name")
    else
        msg.channel.send( { files: [file] } );
}