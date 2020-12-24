module.exports = {
    description: 'Set a channels slowmode',
    category: 'Moderation', 
    callback: ({ message, args }) => {
        const { channel } = message

        // if(args.length < 2) {
        //     message.reply('Please reply a duration + reason')
        //     return
        // }

        let duration = args.shift().toLowerCase()
        if(duration === 'off')
        duration = 0


        if(isNaN(duration)) {
            message.reply('Please provide a a number(in seconds) or "off" ')
            return
        }

        channel.setRateLimitPerUser(duration, args.join(' '))
        message.reply(`Slowmode set for ${duration} seconds`)
    }

}