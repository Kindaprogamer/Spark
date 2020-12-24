module.exports = {
    category: 'Moderation',   
    description: 'To temporarily get rid of someone',
    callback: ({ message }) => {
        const { member, mentions } = message
        const target = mentions.users.first()
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`<@${member.id}> Member kicked`)
        } else {
            message.channel.send(`<@${member.id}> Please state someone to kick`)
        }
    }
}