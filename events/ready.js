module.exports = {
    data: {
        name: 'ready',
        once: true
    },
    async run(bot) {
        console.log(`${bot.user.username} is ready!`);
    }
};