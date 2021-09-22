const Discord = require('discord.js');
const distube = require('distube');

module.exports = {
  name: "continuar",
  alias: ["continue"],

execute (client, message, args){

    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
    return message.channel.send("Debes estar en el mismo canal que yo")

    const serverQueue = client.distube.getQueue(message)

    if(!serverQueue) return message.channel.send("No hay canción reproduciendose ahora")

    if(!serverQueue.pause) return message.channel.send("Ya la canción no esta en pausa")

    client.distube.resume(message)
    message.channel.send("La cancion se reanudó de nuevo")
 }

}