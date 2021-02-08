const { MessageEmbed }  = require('discord.js')

module.exports = {
    category: 'Moderation',
    description: 'To clear a number of messages upto 100',
    callback: async ({ message, args }) => {
        if(!args[0]) {

            let msgEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please specify the amount of messages you want cleared')
            .setColor('random')
            .setFooter(`Message requested by ${message.author.tag}`)
            message.delete()

            message.reply(msgEmbed).then(m => m.delete({timeout: 3000}))
            return
        }

        if(isNaN(args[0])) {
            let NaNEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please specify an actual number')
            .setColor('random')
            .setFooter(`Message requested by ${message.author.tag}`)
            message.delete()

            message.reply(NaNEmbed).then(m => m.delete({timeout: 3000}))
            return
        }
        if(args[0] > 100) {
            let TMMEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('You can only clear upto 100 messages at a time')
            .setColor('random')
            .setFooter(`Message requested by ${message.author.tag}`)
            message.delete()

            message.reply(TMMEmbed).then(m => m.delete({timeout: 3000}))
        }

        if(args[0] < 1) {
            let LMCEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please specify at least one message to clear')
            .setColor('random')
            .setFooter(`Message requested by ${message.author.tag}`)
            message.delete()

            message.reply(LMCEmbed).then(m => m.delete({timeout: 3000}))
        }

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
            let ClearEmbed = new MessageEmbed()
            .setTitle('SUCCESS')
            .setDescription(`Cleared a total of ${args[0]} messages`)
            .setColor('random')
            .setFooter(`Message requested by ${message.author.tag}`)
            message.delete()

            message.channel.send(ClearEmbed).then(m => m.delete({timeout: 3000}))
        })
    }
}