const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`)

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix('/')
    .setSyntaxError(`Incorrect syntax please use {PREFIX}{COMMAND} {ARGUMENTS}`)
    .setMongoPath(process.env.MONGO_URI)
})

client.login(process.env.TOKEN)

//ffGaZBi9s7GPMyt
//mongodb+srv://Concorde:ffGaZBi9s7GPMyt@cluster0.pupmz.mongodb.net/Concorde?retryWrites=true&w=majority