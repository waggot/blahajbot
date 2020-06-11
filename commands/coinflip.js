module.exports = {
    name: 'coinflip',
    description: 'coinflip, heads or tails',
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');
        function coinfliper() {
            var rand = ['Heads!', 'Tails!'];

            return rand[Math.floor(Math.random()*rand.length)];
        }

        const embed = new MessageEmbed()
            .setAuthor("Coinflip result")
            .setTitle(`Here is the winner:`)
            .setDescription(coinfliper())
            .setColor(0x4396d1);
        message.channel.send(embed);
    }
}