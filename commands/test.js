const DiscordJS = require(`discord.js`)

module.exports = {
    callback: (message) => {
        const questions = [
            `Why`,
            `why am i here`,
            `please kill me`
        ]
        let counter = 0

        const filter = m => m.author.id === message.author.id

        const collector = new DiscordJS.MessageCollector(message.channel, filter, {
            max: questions.length,
            time: 1000 * 15
        })

        message.channel.send(questions[counter++])
        collector.on(`collect`, m => {
            if(counter < questions.length) {
                m.channel.send(questions[counter++])
            }
        })

        collector.on(`end`, collected => {
            console.log(`COLLECTED ${collected.size} messages`)

            let counter = 0
            collected.forEach((value) => {
                console.log(questions[counter++], value.content)
                message.channel.send('Question timed out, please restart using `/test`')
            })
        })
    }
}