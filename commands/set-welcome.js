const welcomeSchema = require(`../models/welcome-schema`)

module.exports = {
    aliases: ['welcomeset'],
    requiredPermissions: ['ADMINISTRATOR'],
    callback: async (message) => {
        const { guild, channel } = message

        await welcomeSchema.findOneAndUpdate({
           _id: guild.id 
        }, {
            _id: guild.id,
            channelId: channel.id
        }, {
            upsert: true
        })

        message.reply(`Welcome channel set`)
    },
}