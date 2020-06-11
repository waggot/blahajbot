module.exports = {
    name: 'dice',
    description: 'rolls a dice',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        function diceroller() {
            var rand = ['1', '2', '3', '4', '5', '6'];

            return rand[Math.floor(Math.random()*rand.length)];
        }

        const embed = new MessageEmbed()
            .setAuthor("Dice result")
            .setTitle(`Here is the winner:`)
            .setDescription(diceroller())
            .setColor(0x4396d1);
        message.channel.send(embed);
    }
}