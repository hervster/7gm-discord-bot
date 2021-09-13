// Main code
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const commandHandler = require('./commands');

client.login(process.env.BOT_TOKEN);

client.once('ready', ()=> {console.log('We Outchea Boyo') } );

// client.user.setPresence({ activities: [{ name: 'Popped a modi'}], status: 'dnd' });

// Route to command handler file
client.on('message', commandHandler);