const Discord = require('discord.js');

module.exports = {
  name: "ping",
  alias: [],

execute (client, message, args){
    
  console.log("Se ejecuto el comando !ping")

  message.channel.send("pong!")

  console.log("Se ejecuto el comando !ping")

 }

}