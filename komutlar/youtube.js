const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('https://www.youtube.com/channel/UCpRc1hGOPDTIR73dMOAv2RQ?view_as=subscriber')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yt']
};

exports.help = {
  name: 'youtube',
  description: 'Youtube adresimizi paylaşır.',
  usage: 'youtube'
};