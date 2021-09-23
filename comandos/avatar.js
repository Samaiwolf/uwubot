const Discord = require('discord.js');

module.exports = {
  name: "avatar",
  alias: [],

execute (client, message, args){
   /* console.log("Se ejecuta el comando !avatar")
    const usuario = message.mentions.members.first() || message.member

    const embed = new Discord.MessageEmbed()
    .setTitle(`avatar de usuario: ${usuario.user.username}`)
    .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
    .setFooter(`Solicitado por: ${message.author.tag}`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
    console.log("Se termino de ejecutar el comando !avatar") */
    message.channel.send("Este comando esta inabilitado para esta vercion de prueba :ok_hand:")
 }

}