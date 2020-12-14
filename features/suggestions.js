const suggestionSchema = require('../models/suggestions-schema')
const { MessageEmbed } = require('discord.js')
const statusMessages = {
    WAITING: {
        text: '📊 Waiting for community feedback, please vote!',
        color: 0xffea00
    },
    ACCEPTED: {
        text: '✅ This idea has been accepted, expect this soon',
        color: 0x3feb5b
    },
    DENIED: {
        text: '❌ Thank you for the suggestion but we aren\'t intrested in it at this time',
        color: 0xc20808
    }
}

let suggestionCache = {} //{ guildId: channelId }

const fetchSuggestionChannels = async (guildId) => {
    let query = {}

    if(guildId) {
        query._id = guildId
    }

    const results = await suggestionSchema.find(query)
    for(const result of results) {
        const { _id, channelId } = result
        suggestionCache[_id] = channelId
    }
}

module.exports = client => {
    fetchSuggestionChannels()

    client.on('message', message => {
        const { guild, channel, content, member } = message

        const cachedChannelId = suggestionCache[guild.id]
        if(cachedChannelId && cachedChannelId === channel.id && !member.user.bot) {
            message.delete()

            const status = statusMessages.WAITING

            const embed = new MessageEmbed()
            .setColor(status.color)
            .setAuthor(member.displayName)
            .setDescription(content)
            .addFields({
                name: 'status',
                value: status.text
            })
            .setFooter('Want to suggest something, just type in this channel')

            channel.send(embed)
            .then(message => {
                message.react('👍')
                .then(() => {
                    message.react('👎')
                })
            })
        }
    })
}

module.exports.fetchSuggestionChannels = fetchSuggestionChannels

module.exports.statusMessages = statusMessages

module.exports.suggestionCache = () => {
    return suggestionCache
}