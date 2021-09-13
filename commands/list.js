const { MessageEmbed, Message } = require('discord.js');

const tempEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('List of Commands')
    .setURL('https://github.com/hervster/7gm-discord-bot/blob/main/commands.js')
    .setAuthor('Herve Nyemeck (Aleph)', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
    .setDescription('List of commands for using the Good Man Bot in the Seven Good Men (With Families) Discord Channel')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');


module.exports = function (msg)
{
    console.log("Im a list");
    msg.channel.send( { embeds: [tempEmbed] } );
}