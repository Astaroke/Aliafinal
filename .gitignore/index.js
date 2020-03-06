const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Dofus, !help");
    console.log("Bonjour maitre");
});

bot.login("Njg1MjQzODUwNTQ1Mjk5NDc5.XmIwZg.xlmdPfb2OMPEXxkn7lCcOTU8Hw8");
