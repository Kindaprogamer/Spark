const { MessageEmbed } = require('discord.js');
const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    'Don\'t ask me this ever again.',
    'Don\'t worry about it.',
];
module.exports = {
    category: 'Fun',
    callback: ({message, args}) => {

        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
        .setFooter("This command was made possible by OblivionGhoul and you can find their Github repo"+" [here](https://github.com/OblivionGhoul/KannaKamuiBot)")

        let err = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`Please provide a question.`)
        .setColor('RED')
        .setFooter("This command was made possible by OblivionGhoul and you can find their Github repo"+" [here](https://github.com/OblivionGhoul/KannaKamuiBot)")
        let arguments = args[0]

        if(!arguments) return message.reply(err)

        message.reply(embed)


    }
}