module.exports ={ 
    callback: (message, args, text, client) => {
        client.emit('guildMemberRemove', message.member)
    }
}