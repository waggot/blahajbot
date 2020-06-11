module.exports = {
    name:'botinfo',
    description:'sends bot information',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setDescription('Bot Information')
        .setThumbnail('https://i.redd.it/wkhleb8bu2q41.jpg')
        .addField('Bot Name:',  'Blåhaj')
        .addField('Creator:','Waggot#2111')
        .setColor(0x4396d1);
        message.channel.send(embed);
    }
}