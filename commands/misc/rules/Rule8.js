const { MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Rules', 
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Rule 8 for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: `Rule 8`, value: 'Tell <@441151947148623877> he looks good every day'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}