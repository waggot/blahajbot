module.exports = {
    name: 'dice',
    description: 'rolls a dice',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');

        function diceroller() {
            
            return Math.floor(Math.random * 6) + 1;
        }

        const embed = new MessageEmbed()
            .setAuthor("Dice result")
            .setTitle(`Here is the result:`)
            .setDescription(diceroller())
            .setColor(0x4396d1);
        message.channel.send(embed);
    }
}