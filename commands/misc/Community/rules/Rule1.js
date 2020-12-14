const { MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Rules', 
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Rule 1 for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: 'Rule 1', value: 'No triggering topics such as: racism, sexism, homophobia or death threats(Unless obvious joke)'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}