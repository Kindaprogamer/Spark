const { statusMessages, suggestionCache } = require('../../../../features/suggestions')
const { MessageEmbed } = require('discord.js')
const syntax = 'Please use correct format `/suggest <message id> <status(ACCEPTDED, DENIED)> <optional reason>`'

module.exports = {
    category: 'Suggestion', 
    callback: async (message, args) => {
        const { guild } = message

        const messageId = args.shift()
        const status = args.shift().toUpperCase()
        const reason = args.join(' ')


        message.delete()
        message.channel.send(`Suggestion status has been updated to ${status}`)

        const newStatus = statusMessages[status]

        if(!newStatus) {
            message.reply(`Unknown status: \`"${status}", please use ${Object.keys(statusMessages)}\n${syntax}`)
            return
        }

        const channelId = suggestionCache()[guild.id]

        if(!channelId) {
            message.reply('An error occured,please contact <@608387913256009739>')
        }

        const channel = guild.channels.cache.get(channelId)
        if(!channel) {
            message.reply('the suggestion channel no longer exists')
        }

        const targetMessage = await channel.messages.fetch(messageId, false, true)
        if(!targetMessage) {
            message.reply('That message no longer exists, but *HOW* is the question')
            return
        }

        const oldEmbed = targetMessage.embeds[0]
        const embed = new MessageEmbed()
        .setAuthor(oldEmbed.author.name)
        .setDescription(oldEmbed.description)
        .setColor(newStatus.color)
        .setFooter('Want to suggest something, just type in this channel')

        if(oldEmbed.fields.length === 2) {
            embed.addFields(oldEmbed.fields[0], {
                name: 'Status',
                value: `${newStatus.text}${reason ? ` Reason: ${reason}` : ''}`
            })
        } else {
            embed.addFields({
                name: 'Status',
                value: `${newStatus.text}${reason ? ` Reason: ${reason}` : ''}`
            })
        }

        targetMessage.edit(embed)
    }
}