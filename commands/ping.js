module.exports = {
    name: 'ping',
    description: "replys pong!",
    execute(message, args){
        message.channel.send('pong!');
    }
}