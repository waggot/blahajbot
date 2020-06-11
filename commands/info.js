module.exports = {
    name: 'info',
    description: 'sends user info',
    execute( message, args){
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setDescription('User Info')
        .addField('Username:', message.author.username, true) 
        .addField('Display name:', message.member.displayName, true)
        .addField('User tag:', message.member.user.tag, true)
        .addField('ID:', message.member.user.id, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor(0x4396d1)
        .addField('Joined at:', message.guild.joinedAt);
        message.channel.send(embed);
    }
}