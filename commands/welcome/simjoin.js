module.exports ={ 
    category: 'Layout',
    hidden: true,
    description: 'Simulate someone joining to test the welcome.png',
    ownerOnly: true,
    callback: ({ message, args, text, client }) => {
        client.emit('guildMemberAdd', message.member)
    }
}
