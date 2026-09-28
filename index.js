// Main code
require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], presence: {status: 'invisible'}});
const commandHandler = require('./commands');

client.login(process.env.BOT_TOKEN);

client.once(Events.ClientReady, ()=> {console.log('We Outchea Boyo (and going ghost)') } );

// client.user.setPresence({ activities: [{ name: 'Popped a modi'}], status: 'dnd' });

// Route to command handler file
client.on('messageCreate', commandHandler);