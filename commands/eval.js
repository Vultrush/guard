const Discord = require('discord.js');
const client = new Discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
const { stripIndents } = require('common-tags');
const { Client, Util } = require('discord.js');
exports.run = async (client, bot, message, args) => {
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let Embed = new Discord.MessageEmbed()
    .setDescription("```js\n" + clean(evaled) + "```")

if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send(Embed)
    } catch (err) {
      message.channel.send("```${err}```");
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};
 
exports.help = {
  name: "eval"
};