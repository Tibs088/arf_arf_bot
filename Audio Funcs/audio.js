//const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.arfArf = (isReady, message) => {
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
  isReady;
}

exports.omg = (isReady, message) => {
  !isReady;
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Oh my god, who the hell cares     Time Taken:${timeTaken}ms`);
  let voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection => {
    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=RAA1xgTTw9w'));
    dispatcher.on('end', end => {
      voiceChannel.leave()
    })
  }).catch((err) => {
    console.log(err);
  })
  isReady;
}

exports.avengers = (isReady, message) => {
  !isReady;
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Tony Stark is shit     Time Taken:${timeTaken}ms`);
  let voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection => {
    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=FOabQZHT4qY'));
    dispatcher.on('end', end => {
      voiceChannel.leave();
    })
  }).catch((err) => {
    console.log(err);
  })
  isReady;
}