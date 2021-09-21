const { MessageAttachment, MessageEmbed, Message } = require('discord.js');
// const fetch = require('fetch');
const fs = require('fs');

let listEmbed = new MessageEmbed();

module.exports = async function (msg, args)
{
    const command = args[0];

    // List command is dependent on local directory, how does this work when it's deployed?
        // Figure that out later? lol
        // Could read from a text file instead of scanning dirs, update text file with names whenever a vid is added

    switch (command){
        case 'gif':
            // const gifs = fs.readdirSync(process.env.BASE_GIF_PATH)
            const gifs = fs.readdirSync('./Resources/Images/Gifs/');
            // const gifs = fs.readFile('./Resources/Images/Gifs/GifList.txt');
            // gifs.forEach( listEmbed.addField(1, gifs) );

            msg.channel.send("List of Gifs");

            gifs.forEach( 
                function(item, index, array) 
            {
                if ( item.substring(item.length-4, item.length) === '.gif' )
                {
                    listEmbed.addField( "GIF", item.substring( 0, item.length-4), true ) 
                } 
            } 
            )
            
            msg.channel.send( { embeds: [listEmbed] } );
            listEmbed = new MessageEmbed();

            break;

        case 'vid':
            //const vids = fs.readdirSync(process.env.BASE_VID_PATH);
            const vids = fs.readdirSync('./Resources/Vids/');
            msg.channel.send("List of Vids");

            vids.forEach( 
                function(item, index, array) 
            {
                if ( item.substring(item.length-4, item.length) === '.mp4' )
                {
                    listEmbed.addField( "VID", item.substring( 0, item.length-4), true ) 
                } 
            } 
            )
            msg.channel.send( { embeds: [listEmbed] } );
            listEmbed = new MessageEmbed();

            break;

        case 'img':
            //const imgs = fs.readdirSync(process.env.BASE_IMG_PATH);

            const imgs = fs.readdirSync('./Resources/Images/');
            msg.channel.send("List of Images");

            imgs.forEach( 
                function(item, index, array) 
            {
                if ( item.substring(item.length-4, item.length) === '.png' )
                {
                    listEmbed.addField( "IMG", item.substring( 0, item.length-4), true ) 
                } 
            } 
            )

            msg.channel.send( { embeds: [listEmbed] } );
            listEmbed = new MessageEmbed();

            break;

        case 'webm':

            //const webms = fs.readdirSync(process.env.BASE_WEBM_PATH);

            const webms = fs.readdirSync('./Resources/Images/Webms');
            msg.channel.send("List of Webms");

            webms.forEach( 
                function(item, index, array) 
            {
                if ( item.substring(item.length-5, item.length) === '.webm' )
                {
                    listEmbed.addField( "WEBM", item.substring( 0, item.length-5), true ) 
                } 
            } 
            )

            msg.channel.send( { embeds: [listEmbed] } );
            listEmbed = new MessageEmbed();
            
            break;

        default:
            msg.reply("Please include a valid command");
    }
        


}