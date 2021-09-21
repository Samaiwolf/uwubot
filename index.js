const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let{readdirSync} = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"));

for(const file of commandFiles) {
  const command = require("./comandos/${file}");
  client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("Estoy lista Sempai UwU");
    function presence(){
      client.user.setPresence({
        status: "online",
        activity: {
          name:"como de escapar del sotano de Samai",
          type:"WATCHING"
        }
      })
    }
    presence();
});
client.on("message", (message) => {
    let prefix = config.prefix;
  
    if (message.author.bot)return;
    
    if (!message.content.startsWith(prefix))return;
    
    let usuario = message.mentions.members.first() || message.author;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    /*
    if (message.content.startsWith("hola")) {
         message.channel.send("Holi UwU");
    }
    */

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
      cmd.execute(client, message, args)
    }

  })
client.login(config.TOKEN);
