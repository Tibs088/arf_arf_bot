const Discord = require('discord.js');
const config = require("./config.json");
const ytdl = require('ytdl-core');
const { arfArf, omg, avengers } = require('./Audio Funcs/audio');

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

const prefix = '€'

client.once('ready', () => {
  console.log('Ready!');
});
client.once('reconnecting', () => {
  console.log('Reconnecting!');
});
client.once('disconnect', () => {
  console.log('Disconnect!');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let isReady = true;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'arf' && isReady) {
    arfArf(isReady, message);
  }
  if (command === 'assemble' && isReady) {
    avengers(isReady, message);
  }
  if (command == 'omg' && isReady) {
    omg(isReady, message);
  }
})