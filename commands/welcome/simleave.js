module.exports ={
    category: 'Layout',
    hidden: true,
    description: 'Simulate someone leaving to test the welcome.png',
    ownerOnly: true,
    callback: ({ message, args, text, client }) => {
        client.emit('guildMemberRemove', message.member)
    }
}