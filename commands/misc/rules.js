const { MessageEmbed } = require('discord.js')
module.exports = {
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`#0099ff`)
        .setTitle(`Rules for Gamers Guild`)
        .setURL(`https://pcpilotscrew.com`)
        .addFields(
            { name: 'Rule 1', value: 'No triggering topics such as: racism, sexism, homophobia or death threats(Unless obvious joke)'},
            { name: 'Rule 2', value: 'No advertising outside of <#761240390715047946>'},
            { name: 'Rule 3', value: 'Follow Discord Tos'},
            { name: `Rule 4`, value: `Do not encorage people to break the rules`},
            { name: `Rule 5`, value: 'Do not impersonate staff'},
            { name: `Rule 6`, value: 'No spamming in any chats'},
            { name: `Rule 7`, value: 'Do not argue with staff, their desicons are final, if you don\'t like what happend, to bad'},
            { name: `Rule 8`, value: 'Tell <@441151947148623877> he looks good every day'},
            { name: `Rule 9`, value: 'Look after <@759742470493569093> and call cute'},
            { name: `Rule 10`, value: 'No calling the rules gay'},
            { name: `Rule 11`, value: 'no dissing <@770164450132885534>'},
        )
        .setFooter(`Created by [PCPI] BAe Systems Concorde#9710 (this is the best thing you will ever get)`)
        message.channel.send(Embed)
    }
}