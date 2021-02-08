const warnSchema = require('../../../models/warn-schema')

module.exports = {
    description: 'Set a channels slowmode',
    category: 'Moderation', 
    callback: async ({ message, args }) => {
        message.delete()
        const target = message.mentions.users.first()
        if(!target) {
            message.reply('Please specify someone to warn').then(m => m.delete({timeout: 3000}))
            return
        }

        args.shift()

        const guildId = message.guild.id
        const userId = target.id
        const reason = args.join(' ')

        const warning = {
            author: message.member.user.tag,
            timestamp: new Date().getTime(),
            reason
        }

        await warnSchema.findOneAndUpdate({
            guildId,
            userId,
        }, {
            guildId,
            userId,
            $push: {
                warnings: warning
            }
        }, {
            upsert: true
        })
        message.channel.send(`Successfuly warned <@${userId}> for: "${reason}"`).then(m => m.delete({timeout: 4000}))
    }
}