const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (message.author.id !== '320255429080776707') return message.reply("I'm not saying that.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
