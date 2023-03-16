module.exports = {
    data: {
        name: 'ping',
        description: 'Pong!',
        category: 'misc'
    },
    async run(message, bot) {
        bot.createMessage(message.channel.id, 'Pong!');
    }
};