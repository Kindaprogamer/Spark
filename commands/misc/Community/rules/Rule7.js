const { MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Rules', 
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Rule 7 for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: `Rule 7`, value: 'Do not argue with staff, their desicons are final, if you don\'t like what happend. To bad'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}