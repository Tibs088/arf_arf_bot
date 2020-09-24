const Discord = require('discord.js');
const config = require("./config.json");
const ytdl = require('ytdl-core')

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

function arfArf(guild) {

}

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let isReady = true;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'arf' && isReady) {
    !isReady;
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Arf Arf!     Time Taken:${timeTaken}ms`);
    let voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
      const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=DTMvh4hFeA4'));
      dispatcher.on('end', end => {
        voiceChannel.leave();
      })
    }).catch((err) => {
      console.log(err);
    })

    //arfArf();
    isReady;
  }
  if (command === 'omg' && isReady) {
    !isReady;
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Oh my god, who the hell cares     Time Taken:${timeTaken}ms`);
    let voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
      const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=RAA1xgTTw9w'));
      dispatcher.on('end', end => {
        voiceChannel.leave();
      })
    }).catch((err) => {
      console.log(err);
    })

    //arfArf();
    isReady;
  }
})