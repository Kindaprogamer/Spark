const { MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Rules', 
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Rule 6 for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: `Rule 6`, value: 'No spamming in any chats'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}