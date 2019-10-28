const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "382204454067240979";
	var channelID = "527853262557282304";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **?öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"]
};

exports.help = {
  name: 'isteköneri', 
  description: "İstek ve şikayetlerinizi istek-öneri odasına gönderir", 
  usage: 'isteköneri <mesaj>' 
};