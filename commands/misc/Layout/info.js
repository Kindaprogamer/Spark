const { MessageEmbed, Message, Channel } = require('discord.js')
const { link } = require('ffmpeg-static')

module.exports = client = {
    category: 'help',
    hidden: true,
    ownerOnly: true,
    description: 'evaluate code typed in channel',
    callback: ({ message }) => {
        message.delete()
        let embed = new MessageEmbed()
        .setURL('https://discordapp.com/terms')
        .setTitle('INFO!')
        .setDescription('Hello, welcome to the Gamers Guild')
        .addFields(
            { name: 'About', value: 'Hi, hope you are well, the purpose of this server is for people to get to know, bond over games and more!'},
            { name: 'Channels', value: 'to begin with the channels: • <#766035996314697759> are all the members joining. • <#760828345394003998> the rules for the server, follow these or be punished'}
        )
        .setFooter('We hope you have a nice time here :)')

        message.channel.send(embed).then(message => message.delete({timeout: 6000}))
    }
}