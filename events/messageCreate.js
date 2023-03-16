const config = require('../config.json');

module.exports = {
    data: {
        name: 'messageCreate',
        once: false
    },
    async run(message, bot, commands) {
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;

        const commandName = message.content.replace(config.prefix, '').split(' ')[0];
        const command = commands.get(commandName);
    
        if (!command) return;
    
        try {
            await command.run(message, bot);
        } catch (error) {
            console.log(error);
            bot.createMessage(message.channel.id, `There was an error trying to execute this command!\n${error.name}: ${error.message}`);
        };
    }
};