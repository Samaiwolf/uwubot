const Discord = require('discord.js');

module.exports = {
  name: "help",
  alias: [],

execute (client, message, args){
  
  console.log("Se ejecuto el comando !help")

  message.channel.send("Esta es la lista de comandos:\n !play -- es para reproducir musica \n !pause -- pone en pausa el tema actual\n !continue -- reanuda el tema actual que este en pausa\n !stop -- desconecta el bot de musica\n !ping -- el bot dira pong.\n !say -- El bot dira lo mismo que escribiste.\n !avatar -- mostrara la imagen del usuario solisitado.")

  console.log("Se termino de ejecutar el comando !help")


 }

}