const { MessageEmbed } = require("discord.js")

module.exports = {
    requiredPermissions: ['KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: async ({ message, args, text }) => {
        const { mentions, guild } = message 
        const target = mentions.users.first()
        const { id } = target

        const embed = new MessageEmbed()
        .setTitle('UNMUTE')
        .setDescription(`Sucessfully unmuted <@${id}>`)
        .setFooter(`Message requested by ${message.author.tag}`)

        const getRole = (guild) => {
            return guild.roles.cache.find((role) => role.name === 'Muted')
        }
        const removeRole = (member) => {
            const role = getRole(member.guild)
            if(role) {
                member.roles.remove(role)
                console.log('unmuted', id)
            }
        }

        const targetMember = guild.members.cache.get(id)
        removeRole(targetMember)

        message.reply(embed).then(m => m.delete({timeout: 6000}))
    }
}   