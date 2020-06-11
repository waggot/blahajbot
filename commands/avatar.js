module.exports = {
    name: 'avatar',
    description: 'sends avatar of mentioned user',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setAuthor(message.member.displayName)
        .setImage(message.author.displayAvatarURL())
        .setColor(0x4396d1);
        message.channel.send(embed);
    }
}