module.exports = {
    category: 'Moderation',
    callback: async (message, args) => {
        if(!args[0]) {
            message.reply('please specify the amount of messages you want cleared')
            return
        }

        if(isNaN(args[0])) {
            message.reply('Please specify an actual number')
            return
        }
        if(args[0] > 100) {
            message.reply('You can only clear up to 100 messages at one time')
        }

        if(args[0] < 1) {
            message.reply('You need to specift at least one message')
        }

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })
    }
}