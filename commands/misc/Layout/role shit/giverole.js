module.exports = {
    category: 'Moderation', 
    aliases: ['gr'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            message.reply(`Please specify a member you want to give a role to`)
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
        member.roles.add(role)
        
        message.reply(`User now has the "${roleName}" role`)
    }
}