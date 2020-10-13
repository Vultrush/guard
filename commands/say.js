const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    const codare = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`Say Sistemi CODARE`)
        .addField("Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status === "offline").size)
        .addField("Seslideki üye sayısı", count)
    message.channel.send(codare);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say'}