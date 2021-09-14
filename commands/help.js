const { MessageEmbed, Message } = require('discord.js');

const helpEmbed = new MessageEmbed()
    .setColor('#CCCCFF')
    .setTitle('List of Commands')
    .setURL('https://github.com/hervster/7gm-discord-bot/blob/main/commands.js')
    .setAuthor('Herve Nyemeck (Aleph)', 'https://github.com/hervster/7gm-discord-bot/blob/main/Resources/Images/KiryuTechTips.png?raw=true', 'https://discord.js.org')
    .setDescription('Command list for the Good Man Bot in the 7 Good Men (With Families) Discord Server')
    .setThumbnail('https://github.com/hervster/7gm-discord-bot/blob/main/Resources/Images/2Face.png?raw=true')
    .addFields(
        { name: 'Commands', value: 'All Available Commands (ALL NAMES ARE CASE SENSITIVE)' },
        // { name: '\u200B', value: '\u200B' }, // Extra space if needed
        { name: '!vid {name}', value: 'Grab a video with the given name', inline: false },
        { name: '!gif {name}', value: 'Grab a gif with the given name', inline: false },
        { name: '!img {name}', value: 'Grab an image with the given name', inline: false },
        { name: '!webm {name}', value: 'Grab a webm with the given name', inline: false },
        { name: '!list {name}', value: 'Grab a list of all files for a given command', inline: false },
    )
    .setImage('https://github.com/hervster/7gm-discord-bot/blob/main/Resources/Images/Gifs/KawhiConfused.gif?raw=true')
    .setTimestamp()
    .setFooter('Have Fun', 'https://github.com/hervster/7gm-discord-bot/blob/main/Resources/Images/2Face.png?raw=true');


module.exports = async function (msg, args)
{
    msg.channel.send( { embeds: [helpEmbed] } );
}