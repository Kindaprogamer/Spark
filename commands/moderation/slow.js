module.exports = {
    description: 'Set a channels slowmode',
    category: 'Moderation', 
    callback: ({ message, args }) => {
        const { channel } = message

        // if(args.length < 2) {
        //     message.reply('Please reply a duration + reason')
        //     return
        // }

        let duration = args.shift()
        if(duration === 'off')
        duration = 0

        const { MessageEmbed } = require('discord.js')
            let NaNEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please provide a a number(in seconds) or "off" ')
            .setFooter(`Message issued by ${message.author.tag}`)

        if(isNaN(duration)) {
            message.reply(NaNEmbed)
            return
        }
        let slowEmbed = new MessageEmbed()
        .setTitle('SUCCESS')
        .setDescription(`Channel slowmode has been changed to ${duration} seconds`)
        .setFooter(`Message issued by ${message.author.tag}`)

        channel.setRateLimitPerUser(duration, args.join(' '))
        message.reply(slowEmbed)
    }

}