const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix('/')
    .setMongoPath(process.env.MONGO_URI)
    .setDisplayName(`Trump`)
    .setColor(`0xff0000`)
    .setCategoryEmoji('Moderation', '📌')
    .setCategoryEmoji('Rules', '📜')
    .setBotOwner(['608387913256009739', '441151947148623877'])

    console.log(`Logged in as: ${client.user.tag}`)
})

client.login(process.env.TOKEN)
