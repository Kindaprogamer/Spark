const warnSchema = require('../../../models/warn-schema')

module.exports = {
    aliases: ['infractions', 'lw', 'listwarn'],
    description: 'Set a channels slowmode',
    category: 'Moderation', 
    callback: async ({ message, args }) => {
        message.delete()
        const target = message.mentions.users.first()
        if(!target) {
            message.reply('Please specify a member to show warnings for').then(m => m.delete({timeout: 3000}))
            return
        }

        const guildId = message.guild.id
        const userId = target.id

        const results = await warnSchema.findOne({
            guildId,
            userId
        })

        let reply = `Previous warnings for <@${userId}>:\n\n`

        for(const warning of results.warnings) {
            const { author, timestamp, reason } = warning

            reply += `By  ${ author } on ${ new Date(
                timestamp
                ).toLocaleDateString()} for "${ reason }"\n\n`

            message.reply(reply)

        }
    }
}