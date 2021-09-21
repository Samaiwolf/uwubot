const Discord = require('discord.js');

module.exports = {
  name: "help",
  alias: [],

execute (client, message, args){
    message.channel.send("Esta es la lista de comandos")
    message.channel.send("/ping")


 }

}