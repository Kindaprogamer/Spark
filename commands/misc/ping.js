module.exports = {
    ownerOnly: true,
    cooldown: '10s',
    callback: (message) => {
    message.channel.send( `pong`)
    }
}