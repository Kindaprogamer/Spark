const { MessageEmbed } = require('discord.js')

module.exports = {
  category: '',
  aliases: ['AmongUs', 'AU'],
  minArgs: 2,
  maxArgs: 3,
  expectedArgs: "<Code> <Region>",
  callback: async ({ message, arguments, bot }) => { 
    const [code, region] = arguments

    //let specificChannel = message.mentions.channels.first();


    if (!code) {
        message.reply('Tell me the code')
        return
    }

    if (!region) {
        message.reply('Tell me the region (1 Word)')
        return
    }

    let Embed = new MessageEmbed()
    .setColor(0xFF8C00)
    .setTitle(`🔊 Join VC "AMONG US"`)

    //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .addFields(
        { name: '🔐CODE:', value: '🔑 ' + code },
        { name: '🌍REGION:', value: '🎮 ' + region},
    )
    .setFooter('Version: 0.15.27')

    //🌍REGION:\n🎮` + region https://discord.gg/EhneyQd
    message.channel.send(`<@608387913256009739>`)
    message.channel.send(Embed);
  }, 
}