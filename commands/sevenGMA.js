const { AttachmentBuilder } = require('discord.js');

module.exports = async function (msg, args)
{   
    const baseFilePath = process.env.SEVENGMA_PATH;
    const fileParam = process.env.FILE_PARAM;
    const fileExt = '.gif';
    const imgName = process.env.ASSEMBLE_IMG_PATH;

    const file = new AttachmentBuilder(baseFilePath + imgName + fileExt + fileParam );

    msg.channel.send( { files: [file] } );
}