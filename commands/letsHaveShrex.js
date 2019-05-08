const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage("https://media.discordapp.net/attachments/560252415324979211/575819470023688203/t29pa09kghf11.png?width=290&height=300")
  .setColor('#275BF0')
    message.channel.send(embed)
};
    module.exports.help = {
  name: "letsHaveShrex"
}
