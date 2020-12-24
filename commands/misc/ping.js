module.exports = {
    ownerOnly: true,
    cooldown: '10s',
    description: 'For owner to test if the bot is working',
    callback: ({ message }) => {
    message.channel.send( `pong`)
    }
}