const roleSizeSchema = require('../../../../models/role-size-schema')
const { fetchChannelData } = require('../../../../features/role-size-channel')
const { MessageEmbed } = require('discord.js')

module.exports = {
  requiredPermissions: ['MANAGE_CHANNELS'],
  category: 'Layout',
  description: 'Set up a role counter channelto see how many members are in a certain role',
    callback: async ({ message, args }) => {

    const { guild } = message
    const syntax = `${guild.commandPrefix}roleCounter <Voice Channel ID> <Role ID or "all"> <Text>`

    if (args.length < 3) {        
      let syntaxEmbed = new MessageEmbed()
      .setTitle('ERROR')
      .setDescription(`Please use the correct syntax: ${syntax}`)
      .setFooter(`Message requested by ${message.author.tag}`)
      message.reply(syntaxEmbed)
      return
    }

    const channelId = args.shift()
    const channel = guild.channels.cache.get(channelId)
    if (!channel || channel.type !== 'voice') {
      let voiceEmbed = new MessageEmbed()
      .setTitle('ERROR')
      .setDescription(`You must specift a voice channel id:\n${syntax}`)
      .setFooter(`Message requested by ${message.author.tag}`)
      message.reply(voiceEmbed)
      return
    }

    const roleId = args.shift().toLowerCase()
    if (roleId !== 'all') {
      const role = guild.roles.cache.get(roleId)
      if (!role) {
        let validEmbed = new MessageEmbed()
        .setTitle('ERROR')
        .setDescription(`You must provide either a valid role Id or the word "all" for all guild members: ${syntax}`)
        .setFooter(`Message requested by ${message.author.tag}`)
        message.reply(validEmbed)
        return
      }
    }

    const text = args.join(' ')

    await roleSizeSchema.findOneAndUpdate(
      {
        guildId: guild.id,
        channelId,
      },
      {
        guildId: guild.id,
        channelId,
        roleId,
        text,
      },
      {
        upsert: true,
      }
    )

    let setEmbed = new MessageEmbed()
    .setTitle('SUCCESS')
    .setDescription(`Voice channel counter set to <#${channelId}>`)
    .setFooter(`Message requested by ${message.author.tag}`)

    message.reply(setEmbed)

    fetchChannelData()
  }
}