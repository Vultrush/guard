const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor("2. Yardım Menüsünü Görmek İçin  .Yardım2  ",client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField('> .istatistik ',' Botun İstatiğini Atar')
.addField('> .kanal-koruma ',' Kanal koruması sağlar, ayrıntılı bilgi için komudu kullanın.')
.addField('> .rol-koruma ',' Rol koruması sağlar, ayrıntılı bilgi için komudu kullanın.')
.addField('> .emoji-koruma ',' Emoji koruması sağlar ayrıntılı bilgi için komudu kullanın.')
.addField('> .bot-koruma ',' Botlara karşı koruma sağlar ayrıntılı bilgi için komudu kullanın.')
.addField('> .mesaj-log ',' Silinen ve düzenlenen mesajları kanala gönderir. Ayrıntılı bilgi için komudu kullanın.')
.addField('> .sohbet-aç ',' Sohbeti Açmanızı sağlar.')
.addField('> .unban ',' Ban Kaldırır.')
.addField('> .mute ',' Etiketlediğiniz Kişiyi Süreli Susturmanızı Sağlar.')
.addField('> .öneri-sistem ',' Öneri Sisteminin Yardım Menüsü.')
.addField('> .isimdeğiştir ',' Herhangi Birinin İsmini Değiştirmenizi Sağlar.')
.addField('> .üyedurum ',' Sunucuda Kaç Kişi Olduğunu Gösterir')
.addField('> .tümkomutlar ',' Tüm Komutları Gösterir')
.addField('> .kanalid ',' Etiketlediğiniz Kanalın İdsini Gösterir')
.addField('> .çıkma-teklifi-et ',' Eğlence komutu herkes Kullanabilir.')
.addField('> .reklam-engel ','Reklam Engelini Açar Veya Kapatır.')
.addField('> .Reklam-log ',' Reklam Yapan Kimler İse Onlar Bu Kanala Düşer.')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter(" Zyronx Moderasyon | 1. Yardım Menüsü | ")
.setImage("")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help', 'y'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardımx',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};