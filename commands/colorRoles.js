const { MessageEmbed } = require('discord.js')

module.exports = {
    ownerOnly: true,
    category: 'Help',
    hidden: true,
    description: 'yes',
    callback: ({ message }) => {
        if(message.guild.id !== '760415479537074206') {
            return
        }
        let embed = new MessageEmbed()
        .setTitle('Colour Roles')
        .setDescription('become coloured')
        .setColor(0xffffff)
        .addFields(
            { name: '\u200b', value: ':red_circle: <@&793765765185798184>'},
            { name: '\u200b', value: ':orange_circle: <@&793765769263579146>'},
            { name: '\u200b', value: ':green_circle: <@&793766353609818122>'},
            { name: '\u200b', value: ':black_circle: <@&793765771243028513>'},
            { name: '\u200b', value: ':purple_circle: <@&793765773516603393>'},
            { name: '\u200b', value: ':yellow_circle: <@&793766744296652801>'},
            { name: '\u200b', value: ':blue_circle: <@&793765761281032212>'},
            // { name: '\u200b', value: ':red_circle: <@&793765765185798184>'},
            // { name: '\u200b', value: ':red_circle: <@&793765765185798184>'},

            )

        message.channel.send(embed)
    }
}