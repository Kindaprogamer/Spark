const { MessageEmbed } = require('discord.js')

module.exports = {
    ownerOnly: true,
    callback: ({ message }) => {
        let embed = new MessageEmbed()
        .setTitle('Rules')
        .setDescription('Follow these or ded')
        .setColor('RANDOM')
        .addFields(
            { name: 'Rule 1', value: 'Be respectful to all members. This includes no: Racism, Sexism or and discrimination of any time' },
            { name: 'Rule 2', value: 'nO ADVERTISING OUTSIDE OF <#761240390715047946> THAT CAN BE ACCESSED BY BOOSTING SERVER' },
            { name: 'Rule 3', value: 'Follow [Discord TOS](https://discordapp.com/terms)' },
            { name: 'Rule 4', value: 'No encoraging harmful activity. People talking of Ddos attacks will be banned' },
            { name: 'Rule 5', value: 'No impersonating staff' },
            { name: 'Rule 6', value: '' },
            { name: 'Rule 7', value: '' },
            { name: 'Rule 8', value: '' },
            { name: 'Rule 9', value: '' },
            { name: 'Rule 10', value: '' },
            { name: 'Rule 11', value: '' },
            { name: 'Rule 12', value: '' },
        )
    }
}