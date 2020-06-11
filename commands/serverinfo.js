module.exports = {
    name:'serverinfo',
    description:'sends server information',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setDescription('Server Information')
        .addField('Server Name:', message.guild.name)
        .addField('Member Count:', message.guild.memberCount)
        .setThumbnail(message.guild.iconURL())
        .addField('Created on:', message.guild.createdAt)
        .setFooter('server information by blahaj')
        .setColor(0x4396d1);
        message.channel.send(embed);

    }
}