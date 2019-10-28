const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('https://www.twitch.tv/wailerfaith')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tw']
};

exports.help = {
  name: 'twitch',
  description: 'Twitch Kanalımızı Paylaşır.',
  usage: 'twitch'
};