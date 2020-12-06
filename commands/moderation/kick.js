module.exports = {
    category: 'Moderation',   
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: `<Target user's @>`,
    callback: (message, arguments, text) => {
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