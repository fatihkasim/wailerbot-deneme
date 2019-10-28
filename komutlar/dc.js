const Discord = require('discord.js');


exports.run = function(client, message) {
    message.reply('https://discord.gg/ZKcnBuJ')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['discord'],
  permLevel: 0 
};

exports.help = {
  name: 'dc',
  description: 'Discord bağlantımızı sunucuya atar',
  usage: 'dc'
};