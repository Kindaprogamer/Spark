const DiscordJS = require(`discord.js`)

module.exports = {
    callback: (message) => {
        const questions = [
            'Age: inc date of birth',
            'timezone',
            'Why do you think you wil be a good admin',
            'How active can you be,(be specific)'
        ]
        let counter = 0

       const filter = m => m.author.id === message.author.id
        const collector = new DiscordJS.MessageCollector(message.channel, filter, {
            max: questions.length,
            time: 1000 * 20 //20s
        })

        message.channel.send(questions[counter++])
        collector.on('collect', m => {
            if(counter < questions.length) {
                m.channel.send(questions[counter++])
            }
        })

        collector.on('end', collected => {
            console.log(`COLLECTED: ${collected.size} messages`)

            let counter = 0
            collected.forEach((value) => {
                console.log(questions[counter++], value.content)
            })
        })
    }
}