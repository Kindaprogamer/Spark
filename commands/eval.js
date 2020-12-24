module.exports = client = {
    category: 'help',
    hidden: true,
    ownerOnly: true,
    description: 'evaluate code typed in channel',
    callback: ({ message }) => {
        const { member, channel, content } = message
            const result = eval(content.replace('/eval ', ''))
            message.channel.send(result)
    }
}