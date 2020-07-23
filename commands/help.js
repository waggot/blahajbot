module.exports = {
    name: 'help',
    description: 'sends help command list',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setTitle('Blahåj Bot')
        .setThumbnail('https://i.pinimg.com/736x/8f/27/8a/8f278ab914c5061948fafeb8f63a8190.jpg')
        .setColor(0x4396d1)
        .setFooter('Blahåj thanks you for spending time with him :)')
        .setDescription('Here is a list of commands that i respond to')
        .addField('b!help', 'sends a list of commands that the bot responds to')
        .addField('b!ping', 'replys the with pong!')
        .addField('b!avatar', 'sends an image of your avatar to the channel')
        .addField('b!coinflip', 'Blahåj will flip a coin and decide your fate')
        .addField('b!dice', 'Blahaj will roll a dice for you')
        .addField('b!invite', 'sends the invite link of Blåhaj bot for you to invite to your servers')
        .addField('b!blahaj', 'sends images of Blåhaj')
        .addField('b!info', 'sends information on the user')
        .addField('b!serverinfo', 'sends information on the discord server')
        .addField('b!botinfo', 'sends information of the bot')
        .addField('b!poll', 'sends a reactable embed message with thumbs up and down to have a poll')
        .addField('Features', 'Server Greeting/welcome')
        .addField('Easter Eggs', 'Theres only 1 so far but can you find it?');
        message.channel.send(embed);
    }
}