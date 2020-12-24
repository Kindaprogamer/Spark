module.exports = {
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: ({ message, arguments, text }) => {
        const { member, mentions } = message
        const target = mentions.users.first()
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`<@${member.id}> Member banned`)
        } else {
            message.channel.send(`<@${member.id}> Please state someone to ban`)
        }
    }
}