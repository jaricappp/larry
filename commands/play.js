
module.exports.help = {
  name: "play"
}

exports.run = (client, message, args) => {
        const watchmessage = args.join(" ");
    if (message.author.id !== '320255429080776707') return message.reply("Nice try.");
    
    client.user.setActivity(watchmessage, {type: 1});
}
