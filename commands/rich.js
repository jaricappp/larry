const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (message.author.id !== '320255429080776707') return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");

    let embed = new Discord.RichEmbed ()
        .setColor('#0964f7')
        .setDescription(sayMessage)
        message.delete().catch(O_o=>{}); 
        message.channel.send(embed);
}

module.exports.help = {
  name: "rich"
}
