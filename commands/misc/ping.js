const { MessageEmbed } = require('discord.js')

module.exports = {
    cooldown: '10s',
    description: 'To test the ping of the bot',
    callback: ({ message }) => {
        // let startTime = message.createdTimestamp
        // let endTime = new Date().getTime()
        // let embed = new MessageEmbed()
        // .setAuthor(`: ${message.author.tag}`,message.author.avatarURL)
        // .setTitle("**Here is your ping level send by your bot !**")
        // .addField("Order made on the Channel", message.channel)
        // .setColor("RANDOM")
        // .addField(":ping_pong: **PING: " + Math.round(endTime - startTime) + " ms.**", "**PONG !** :ping_pong: 😲")
        // .addField('The bot has been online for', (Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(client.uptime / 1000) % 60) + " seconds")
        // .setFooter("Order request by " + message.author.tag)
        // .setTimestamp()

        // message.channel.send(embed)
        let embed = new MessageEmbed()
        .setTitle('Pong')
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(`🏓 ${client.ws.ping} ms`)
        .setColor(RANDOM)
        .setTimestamp()
        message.channel.send(embed)
    }
}