module.exports ={ 
    ownerOnly: true,
    callback: (message, args, text, client) => {
        client.emit('guildMemberRemove', message.member)
    }
}