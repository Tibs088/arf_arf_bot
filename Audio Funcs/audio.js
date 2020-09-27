const { MessageAttachment } = require('discord.js');
const ytdl = require('ytdl-core');

exports.soundEffect = (isReady, message, link, text, img) => {
  !isReady;
  const attachment = new MessageAttachment(img);
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(text, attachment);
  let voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection => {
    const dispatcher = connection.play(ytdl(link));
    dispatcher.on('end', end => {
      voiceChannel.leave();
    })
  }).catch((err) => {
    console.log(err);
  })
}
