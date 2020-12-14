// const Discord = require('discord.js')
// const bot = new Discord.Client()

// module.exports = bot => {
//     const channelId = `777981067108810763`

//     const updateMembers = guild => {
//         const channel = guild.channels.cache.get(channelId)
//         channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
//     }

//     bot.on(`guildMemberAdd`, (member) => updateMembers(member.guild))
//     bot.on(`guildMemberRemove`, (member) => updateMembers(member.guild))

//     const guild = bot.guilds.cache.get(`760415479537074206`)
//     updateMembers(guild)
// }