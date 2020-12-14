const { MessageEmbed } = require('discord.js')
module.exports = {
    callback: (message, arguments, text) => {
        const Embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Inability to see channels`)
        .addFields(
            { name: 'How to get role', value: 'Go to <#760828345394003998> and reac to message sent by <@159985870458322944>'},
            { name: `Reason`, value: 'We are making it so you need the <@&787713897280307201> role so moderating is simpler'},
        )
        .setFooter('Do not dm us, this is simple react too message in <#760828345394003998>')
        message.channel.send(Embed)
    }
}