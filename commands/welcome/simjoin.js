module.exports ={ 
    ownerOnly: true,
    callback: (message, args, text, client) => {
        client.emit('guildMemberAdd', message.member)
    }
}
