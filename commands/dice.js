const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const messageArray = message.content.split(' ');
  const rollFlavor = messageArray.slice(2).join(' ');
    if (messageArray.length === 1) {
    
      return message.reply(
        (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor);
    }

    let sides = messageArray[1]; // !roll 20
    let dice = 1;
    if (!isNaN(messageArray[1][0] / 1) && messageArray[1].includes('d')) {
      // !roll 4d20
      dice = messageArray[1].split('d')[0] / 1;
      sides = messageArray[1].split('d')[1];
    } else if (messageArray[1][0] == 'd') {
      // !roll d20
      sides = sides.slice(1);
    }
    sides = sides / 1; // convert to number
    if (isNaN(sides) || isNaN(dice)) {
      return;
    }
    if (dice > 1) {
      const rollResults = [];
      for (let i = 0; i < dice; i++) {
        rollResults.push(Math.floor(Math.random()*sides)+1);
      }
      const sum = rollResults.reduce((a,b) => a + b);
      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);
    } else {
      return message.channel.send((Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor);
  }
};

module.exports.help = {
  name: "dice"
}
