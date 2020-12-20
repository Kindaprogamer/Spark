module.exports ={ 
    callback: (message, args, text, client) => {
        client.emit('guildMemberAdd', message.member)
    }
}
