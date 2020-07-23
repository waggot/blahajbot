module.exports = {
    name: "poll",
    description: "its a yes or no poll",
    execute(message, args){
        const { Client, MessageEmbed } = require('discord.js');

        const embed = new MessageEmbed()
            .setTitle("Poll")
            .setDescription(" Yes or No ")
            .setColor(0x4396d1)


            message.channel.send(embed).then(async Message => {
                // waits for message to be sent before reacting to message
                await Message.react('👍')
                await Message.react('👎')
            })
    }
}