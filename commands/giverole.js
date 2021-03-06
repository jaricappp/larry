const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.author.id !== '320255429080776707') return message.reply("Nice try.");
    
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("You must provide a role to give.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role.");

  if(rMember.roles.has(gRole.id)) return message.reply("This user already has that role.");
  rMember.addRole(gRole.id);
    message.reply("User has been given the role.");
}

module.exports.help = {
  name: "giverole"
}
