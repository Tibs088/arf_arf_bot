const { MessageAttachment } = require('discord.js');
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
  const attachment = new MessageAttachment('https://media.giphy.com/media/QgejSvXmwpvnW/giphy.gif');
  message.reply(`Oh my god, who the hell cares`, attachment);
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

exports.onlyGame = (isReady, message) => {
  !isReady;
  const attachment = new MessageAttachment('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f3/f31aeda808207d3277b17f3ed572aa7f89981488_full.jpg');
  message.reply(`Is only game`, attachment);
  let voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection => {
    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=xzpndHtdl9A'));
    dispatcher.on('end', end => {
      voiceChannel.leave();
    })
  }).catch((err) => {
    console.log(err)
  })
  isReady;
}