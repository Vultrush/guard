const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
	try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/burdurland.json?sort=new&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Güzel miimlerden kalmamış sonra tekrar bak knkm.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Paylaşan Kişi: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Diğer Bilgiler:", "Upvotelar: " + allowed[randomnumber].data.ups + " / Yorumlar: " + allowed[randomnumber].data.num_comments)
        .setFooter("Miimlerimiz r/burdurland dan :)")
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["meme", "miim", "burdur"],
  kategori: "Kategori Adı",
  permLevel: 0
};
exports.help = {
  name: "burdurland",
  description: "Açıklama",
  usage: "burdurland"
};