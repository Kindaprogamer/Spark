const { MessageEmbed } = require('discord.js')

module.exports = {
    requiredPermissions: ['KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: ({ message, args, text }) => {
        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!mutee) {
            return message.channel.send('You need to specify someone to mute')
        }

        let reason = args.slice(1).join(" ")
        if(!reason) {
            reason = "No reason given"
        }

        const muteRole = message.guild.roles.cache.find(r => r.name === 'Muted')
        if(!muteRole) {
            return message.channel.send('Please make sure the mute role is named `Muted`')
        }

        mutee.roles.add(muteRole.id).then(() => {
            message.delete()
            message.channel.send(`<@${mutee.user.id}> was sucessfully muted `).then(m => m.delete({timeout: 3000}))
        })
    }
}
