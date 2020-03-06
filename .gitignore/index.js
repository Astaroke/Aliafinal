const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Dofus, !help");
    console.log("Bonjour maitre");
});

bot.login("Njg1MjM3Njg0NjYyNTY3MDc1.XmGrpA.9PYm82mg4libAys-ei2U_akjAgY");
