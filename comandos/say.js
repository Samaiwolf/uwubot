const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){
    
    console.log("Se ejecuto el comando !say")

    const texto = args.join(' ')
    if(!texto) return message.channel.send("no hay mensaje")
    
    message.channel.send(texto)

    console.log("Se termino de ejecutar el comando !say")
 }

}