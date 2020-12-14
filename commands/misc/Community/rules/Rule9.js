const { MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Rules', 
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Rule 9 for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: `Rule 9`, value: 'Look after <@759742470493569093> and call cute'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}