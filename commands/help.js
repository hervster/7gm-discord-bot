const { MessageEmbed, Message } = require('discord.js');

const helpEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('List of Commands')
    .setURL('https://github.com/hervster/7gm-discord-bot/blob/main/commands.js')
    .setAuthor('Herve Nyemeck (Aleph)', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
    .setDescription('Command list for the Good Man Bot in the 7 Good Men (With Families) Discord Server')
    .setThumbnail('./Resources/Images/2Face.png')
    .addFields(
        { name: 'Commands', value: 'All Available Commands' },
        { name: '\u200B', value: '\u200B' },
        { name: '!vid {name}', value: 'Retrieve a video with the given name', inline: true },
        { name: '!gif {name}', value: 'Retrieve a gif with the given name', inline: true },
        { name: '!img {name}', value: 'Retrieve an image with the given name', inline: true },
        { name: '!list {name}', value: 'Retrieve a list of all files for a given command', inline: true },
    )
    .setImage('./Resources/Images/Gifs/Sas.gif')
    .setTimestamp()
    .setFooter('Personal Use Only', 'https://i.imgur.com/AfFp7pu.png');


module.exports = async function (msg, args)
{
    console.log("Im helpful");
    msg.channel.send( { embeds: [helpEmbed] } );
}