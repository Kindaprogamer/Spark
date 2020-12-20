module.exports = {
    category: 'Moderation', 
    aliases: ['rr'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            message.reply(`Please specify a member you want to remove a role from`)
            return
        }

        arguments.shift()

        const roleName = arguments.join(` `)
        const { guild } = message
        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if(!role) {
            message.reply(`The role "${roleName}" doesnt exist `)
            return
        }

        const member = guild.members.cache.get(targetUser.id)
        
        if(member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.reply(`That user no longer has the role: ${roleName}`)
        } else {
            message.reply(`User doesnt have the role: "${roleName}`)
        }
    }
}