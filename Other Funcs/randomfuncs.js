const Discord = require('discord.js');
const bot = new Discord.Client();

exports.quickMaths = (isReady, message) => {
  !isReady;
  const numArgs = args.map(x => parseFloat(x));
  const sum = numArgs.reduce((counter, x) => counter += x);
  message.reply(`2 + 2 is 4... but you got ${sum}`);
  isReady;
}

exports.sendImg = (isReady, message) => {
  !isReady;
  message.reply()
}