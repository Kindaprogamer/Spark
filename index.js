const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix('/')
    .setSyntaxError(`Incorrect syntax please use {PREFIX}{COMMAND} {ARGUMENTS}`)
    .setMongoPath(process.env.MONGO_URI)
    .setDisplayName(`Trump`)
    .setColor(`0xff0000`)
    .setCategoryEmoji('Testing', '☢')

    console.log(`Logged in as: ${client.user.tag}`)
})

client.login(process.env.TOKEN)
