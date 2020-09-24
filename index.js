const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

const prefix = '€'

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'arf') {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Arf Arf!     Time Taken:${timeTaken}ms`)
  }
})