const DiscordJS = require(`discord.js`)
const modchann = '761566996520894464' 

module.exports = {
    catagory: 'Mod applications',
    callback: (message) => {
        const questions = ['Age & Date of Birth', 'Timezone', 'Hours active you can be', 'Why do you want to be admin', 'IRL K/D', 'How many inches can you fit in u', 'is age Tos friendly', 'Best alcohol drink in world']
        let counter = 0

       const filter = m => m.author.id === message.author.id
        const collector = new DiscordJS.MessageCollector(message.channel, filter, {
            max: questions.length,
            time: 1000 * 240 //20s
        })
        message.channel.send('You have 4 mins to complete all questions')
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
                console.log(questions[counter++],':', value.content)
            })
        })
    }
}