const Discord = require('discord.js');
const distube = require('distube');

module.exports = {
  name: "stop",
  alias: [],

execute (client, message, args){

    //if(!serverQueue) return message.channel.send("No hay canción reproduciendose ahora")

    client.distube.stop(message)
    message.channel.send("Paro el bot")
 }

}