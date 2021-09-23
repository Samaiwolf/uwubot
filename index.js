const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let{readdirSync} = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"));

for(const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("Lista para el servicio UwU");
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

    if (message.author.bot || !message.content.startsWith(prefix))return;
    
    //if (!message.content.startsWith(prefix))return;
    
    let usuario = message.mentions.members.first() || message.author;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
      cmd.execute(client, message, args)
     }

  })
// Distube // 
const Distube = require('distube');
client.distube = new Distube(client,{
  emitNewSongOnly: true,
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true,
  autoplay:false,
});

client.distube.on("addList", (message, queue, playlist) => message.channel.send(`Playlist:\n **${playlist.name}** ***${message.author}*** `))

client.distube.on("addSong", (message, queue, song) => message.channel.send(`Añadido a la cola, **${song.name}** **${song.formattedDuration}** **${message.author}**`))

client.distube.on("playSong", (message, queue, playsong) => message.channel.send(`Reproduciendo ahora, **${playsong.name}** **${playsong.formattedDuration}** **${message.author}**`))

client.distube.on("playList", (message, queue, playlist) => message.channel.send(`Reproduciendo playlist:\n **${playlist.name}** **${message.author}`))

client.distube.on('intiQueue', (queue) => {
  queue.autoplay = false;
  queue.volume = 100
})

// Distube //
client.login(config.TOKEN);
