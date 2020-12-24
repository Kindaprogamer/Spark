const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {
    const showStartupWarnings = false
    const messagesPath = ''

    const dbOptions = {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifieldTopology: true,
        useFindAndModify: false
    }

    new WOKCommands(client, 'commands', {
        commandsDir: 'commands',
        featureDir: 'features',
        messagesPath,
        showWarns: showStartupWarnings,
        dbOptions
    })
    .setDefaultPrefix('/')
    .setMongoPath(process.env.MONGO_URI)
    .setDisplayName(`Spark's`)
    .setColor(`0xff0000`)
    // .setCategoryEmoji('Moderation', '👮‍♂️')
    // .setCategoryEmoji('Layout', '📜')
    // .setCategoryEmoji('Suggestion', '🚧')
    .setCategorySettings([
        {
            name: 'Moderation',
            emoji: '👮‍♂️',
        },
        {
           name: 'Layout',
           emoji: '📜',
        },
        {
            name: 'Suggestion',
            emoji: '🚧',
        },
    ])

    .setBotOwner('608387913256009739')

    console.log(`Logged in as: ${client.user.tag}`)
})

client.login(process.env.TOKEN)

module.exports.client = client