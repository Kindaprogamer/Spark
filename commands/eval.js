const { callback } = require("wokcommands/commands/help")

module.exports = client = {
    ownerOnly: true,
    callback: (message) => {
        const { member, channel, content } = message
            const result = eval(content.replace('/eval ', ''))
            message.channel.send(result)
    }
}