const { MessageEmbed } = require('discord.js')

module.exports = {
    ownerOnly: true,
    category: 'Help',
    hidden: true,
    description: 'yes',
    callback: ({ message }) => {
        if(message.guild.id !== '760415479537074206') {
            console.log('someone is stupid')
            return
        }
        let embed = new MessageEmbed()
        .setTitle('Get roles')
        .setDescription('Remember, you can always opt out of roles')
        .setColor(0xffea00)
        .addFields({
            name: 'Announcements',
            value: 'React with a :white_check_mark: to get <@&764863298524807238> role'
        })

        message.channel.send(embed)
    }
}