// Main code
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const commandHandler = require('./commands');

client.login(process.env.BOT_TOKEN);

client.once('ready', ()=> {console.log('We Outchea Boyo') } );

// client.user.setPresence({ activities: [{ name: 'Popped a modi'}], status: 'dnd' });

// Route to command handler file
client.on('messageCreate', commandHandler);