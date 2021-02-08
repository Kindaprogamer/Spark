const { fetchSuggestionChannels } = require('../../../../features/suggestions')

const suggestionSchema = require('../../../../models/suggestions-schema')

module.exports = {
    category: 'Suggestion',
    description: 'Set a suggestion channel for your server',
    callback: async ({ message }) => {
        const { channel: { id: channelId }, guild: { id: guildId } } = message

        await suggestionSchema.findOneAndUpdate({
            _id: guildId
        }, {
            _id: guildId,
            channelId,
        }, {
            upsert: true
        })

        message.reply(`Suggestion channel sent to <#${channelId}>`)

        fetchSuggestionChannels(guildId)
    }
}