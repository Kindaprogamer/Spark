const txtgen = require('txtgen')
const ms = require('ms')
const { toLocaleLowerCase } = require('ffmpeg-static')
const { id } = require('common-tags')
const inGame = new Set()

module.exports = {
    category: 'Fun',
    callback: async  ({message}) => {
        const filter = m => m.author.id === message.author.id
        if(inGame.has(message.author.id)) return
        inGame.add(message.author.id)
        for(i = 0; i < 25; i++) {
            const time = Date.now()
            let sentence = ''
            let ogSentence = txtgen.sentence().toLowerCase().split('.').join('').split(',').join('')
            ogSentence.split(' ').forEach(argument => {
                sentence += ' ' + argument.split('').join(' ') + ' '
            })

            message.channel.send('Type "Cancel" or "end" to stop the game.')
            message.reply(`**Type the following message (You have 20 seconds!)**:\n${sentence}`)
            try {
                msg = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                })
            } catch (ex) {  
                message.reply(`Time is up, Your score is: **${i}**`)
                inGame.delete(message.author.id)
                break
            }
            if(['cancel', 'end'].includes(msg.first().content.toLowerCase().trim())) {
                message.channel.send(`Game ended. your final score was: **${i}**`)
                inGame.delete(message.author.id)
                break
            } else if(msg.first().content.toLowerCase().trim() === ogSentence.toLowerCase()) {
                message.channel.send(`Good job. Thanks for playing. your final score was: **${i}**`)
            } else {
                message.channel.send(`You failed. thanks for playing. you ended with a score of: **${i}**`)
                inGame.delete(message.author.id)
                break
            }

            if(i === 25) {
                message.reply('Congratulations, you win')
                inGame.delete(message.author.id)
                break
            }
        } 
    }
}