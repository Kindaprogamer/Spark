const { MessageEmbed } = require('discord.js')

module.exports = {
    requiredPermissions: ['BAN_MEMBERS', 'KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to kick a person not following the rules',
    callback: ({ message, arguments, text }) => {

        const { member, mentions } = message
        const target = mentions.users.first()
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()

            //Embed for ban issued
            let yEmbed = new MessageEmbed()
            .setTitle('KICKED')
            .setDescription(`<@${targetMember.id}> has been kicked`)
            .setFooter(`Kick isseued by ${message.author.tag}`)
            message.delete()

            message.reply(yEmbed).then(m => m.delete({timeout: 3000}))
        } else {

            let nEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please state someone to kick')
            .setFooter(`Kick message issued by ${message.author.tag}`)
            message.delete()

            message.channel.send(nEmbed).then(m => m.delete({timeout: 3000}))
        }
    }
}