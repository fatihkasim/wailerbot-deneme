const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('https://www.facebook.com/fatihkasimguney37')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['fb']
};

exports.help = {
  name: 'facebook',
  description: 'Facebook adresimizi paylaşır.',
  usage: 'facebook'
};