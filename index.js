const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {
    const channelId = '777981067108810763'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('760415479537074206')
    updateMembers(guild)
})

client.on('ready', () => {

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix('/')
    .setSyntaxError(`Incorrect syntax please use {PREFIX}{COMMAND} {ARGUMENTS}`)
    .setMongoPath(process.env.MONGO_URI)
    .setDisplayName(`Trump`)
    .setColor(`0xff0000`)
    .setCategoryEmoji('Moderation', '📌')
    .setCategoryEmoji('Rules', '📜')

    console.log(`Logged in as: ${client.user.tag}`)
})

const bot = require('discord-rich-presence')('784852899633168425')

bot.on('connected', () => {

    bot.updatePresence({
        details: 'Bootleg Trump',
        state: 'Coding Line whatever of whatever',
        startTimestamp: new Date(),
        largeImageKey: 'javascript',
        smallImageKey: 'vscode',
        largeImageText: 'JavaScript',
        smallImageText: 'Visual Studio Code',
        instance: true,
    });

    process.on('unhandledRejection', console.log)
    console.log('CONNECTED')
})

client.login(process.env.TOKEN)
