const configs = require("./configs.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

fs.readdir("./wrights/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./wrights/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });

});


client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  //bot.user.setGame("on SourceCade!");
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
    
  let prefix = configs.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args);

    if(message.content.indexOf(prefix) !== 0) return;
    if(!cmd) return message.channel.send("Please use an actual command.")
});


client.login('NTYxMzQ3NTYyODE3NDU0MTMy.XLJbZA.AM-FogEV_dC2xwE_lGxZsnbTLJY');