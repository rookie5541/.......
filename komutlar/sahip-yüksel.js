const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();

    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('RANDOM')
      embed.setTitle('Sunucular')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var !`)
    }
    message.channel.send({embed: embed});
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yükselaaassdassdasdawewdawadsdas..a'],
  permLevel: 4,
};

exports.help = {
  name: "yükseawqeweqweqqweqewqweqweqewweqsasddas..l",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};