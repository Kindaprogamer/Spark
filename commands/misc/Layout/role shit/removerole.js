module.exports = {
    requiredPermissions: ['MANAGE_ROLES'],
    category: 'Moderation', 
    aliases: ['rr'],
    description: 'Remove a role from someone',
    callback: ({ message, args }) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            message.reply(`Please specify a member you want to remove a role from`)
            return
        }

        args.shift()

        const roleName = args.join(` `)
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