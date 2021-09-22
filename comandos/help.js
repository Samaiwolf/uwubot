const Discord = require('discord.js');

module.exports = {
  name: "help",
  alias: [],

execute (client, message, args){
  
  console.log("Se ejecuto el comando !help")

  message.channel.send("Esta es la lista de comandos:\n !ping -- el bot dira pong.\n !say -- El bot dira lo mismo que escribiste.\n !avatar -- mostrara la imagen del usuario solisitado.")

  console.log("Se termino de ejecutar el comando !help")


 }

}