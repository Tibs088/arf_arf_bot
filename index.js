const { Client, MessageAttachment } = require('discord.js');
const config = require("./config.json");
const { soundEffect } = require('./Audio Funcs/audio');
const { quickMaths, sendImg } = require('./Other Funcs/randomfuncs')

const client = new Client();

client.login(config.BOT_TOKEN);

const prefix = '*';

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
    const link = 'https://www.youtube.com/watch?v=NNZcyK6gD2U'
    const text = 'arf arf'
    const img = 'https://media.giphy.com/media/xUNd9DHbXN17q9zbCE/giphy.gif'
    soundEffect(isReady, message, link, text, img);
  }
  if (command == 'omg' && isReady) {
    const img = 'https://media.giphy.com/media/QgejSvXmwpvnW/giphy.gif'
    const link = 'https://www.youtube.com/watch?v=RAA1xgTTw9w'
    const text = `Oh my god, who the hell cares`
    soundEffect(isReady, message, link, text, img)
  }
  if (command == 'onlygame' && isReady) {
    const link = "https://www.youtube.com/watch?v=xzpndHtdl9A"
    const text = 'Is only game'
    const img = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f3/f31aeda808207d3277b17f3ed572aa7f89981488_full.jpg'
    soundEffect(isReady, message, link, text, img);
  }
  if (command == 'sad' && isReady) {
    const link = 'https://www.youtube.com/watch?v=CQeezCdF4mk'
    const text = ':('
    const img = 'https://media.giphy.com/media/xT5LMFfQQJtiKQ2gCs/giphy.gif'
    soundEffect(isReady, message, link, text, img)
  }
  if (command == 'denys' && isReady) {
    const link = 'https://www.youtube.com/watch?v=PE0InPLkNMU'
    const text = 'The fuck is up Dennys!'
    const img = "https://media1.tenor.com/images/8c8bf3cedc28bd6a2fed6a14007a2e28/tenor.gif?itemid=15967110"
    soundEffect(isReady, message, link, text, img)
  }
  if (command === 'sure' && isReady) {
    const link = 'https://www.youtube.com/watch?v=pHF-4BVkxCQ'
    const text = 'Are you sure about that?'
    const img = 'https://media.tenor.com/images/cef1a8744cacba2677a74706175690b1/tenor.gif'
    soundEffect(isReady, message, link, text, img)
  }
  if (command === 'quickmaths' && isReady) {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`2 + 2 is 4...  ${sum}!`);
  }
})