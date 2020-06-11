const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');

const bot = new Discord.Client();
const token = "YOUR TOKEN";
const PREFIX = "b!";
 
const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("Bot is online!");
    bot.user.setActivity('b!help', { type: 'LISTENING'});
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "ping":
            bot.commands.get('ping').execute(message, args);
        break;

        case "invite":
            bot.commands.get('invite').execute(message, args);
        break;

        case "help":
            bot.commands.get('help').execute(message, args);
        break;

        case "blahaj":
            image(message);
        break;

        case "avatar":
            bot.commands.get('avatar').execute(message, args);
        break;

        case "coinflip":
            bot.commands.get('coinflip').execute(message, args);
        break;

        case "serverinfo":
            bot.commands.get('serverinfo').execute(message, args);
        break;

        case "botinfo":
            bot.commands.get('botinfo').execute(message, args);
        break;

        case "info":
            bot.commands.get('info').execute(message, args);
        break;

        case "dice":
            bot.commands.get('dice').execute(message, args);
        break;
    };
});

// server greeting 
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find( ch => ch.name === 'general');
    const embed = new MessageEmbed()
    .setDescription(`Welcome to the server, ${member}, we have been expecting you.`)
    .setTimestamp();
    if(!channel) return;
    channel.send(embed);
})

// image
function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "blahaj",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);

       
    });
 
 
 
 
 
 
 
 
}

bot.login(token);