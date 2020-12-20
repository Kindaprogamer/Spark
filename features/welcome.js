const Canvas = require('canvas')
const  { MessageAttachment } = require(`discord.js`)
const path = require('path')
const { getChannelId } = require(`../commands/welcome/setwelcome`)

module.exports = client => {

    client.on('guildMemberRemove', async member => {
        const  { guild } = member

        const channelId = getChannelId(guild.id)
        if(!channelId) {
            return
        }

        const channel = guild.channels.cache.get(channelId)
        if(!channel) {
            return
        }

        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage(
            path.join(__dirname, '../background.png')
        )
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)

        const pfp = await Canvas.loadImage(
            member.user.displayAvatarURL({
                format: `png`
            })
        )
        x = canvas.width / 2 - pfp.width / 0.39
        y = 25
        ctx.drawImage(pfp, x, y)

        ctx.fillStyle = '#ffffff'
        ctx.font = '27px sans-serif'
        let text = `${member.user.tag}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2.55
        ctx.fillText(text, x, -10 + pfp.height)

        ctx.font = `33px sans-serif`
        text = `We are now at ${guild.memberCount} members`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 40 + pfp.height)

        ctx.font = `55px sans-serif`
        text = `Goodbye`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, -60 + pfp.height)

        const aAttachment = new MessageAttachment(canvas.toBuffer())
        channel.send('', aAttachment)
    })

    client.on(`guildMemberAdd`, async member => {
        const  { guild } = member

        const channelId = getChannelId(guild.id)
        if(!channelId) {
            return
        }

        const channel = guild.channels.cache.get(channelId)
        if(!channel) {
            return
        }

        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage(
            path.join(__dirname, '../background.png')
        )
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)

        const pfp = await Canvas.loadImage(
            member.user.displayAvatarURL({
                format: `png`
            })
        )
        x = canvas.width / 2 - pfp.width / 0.39
        y = 25
        ctx.drawImage(pfp, x, y)

        ctx.fillStyle = '#ffffff'
        ctx.font = '27px sans-serif'
        let text = `${member.user.tag}`
        x = canvas.width / 1.89 - ctx.measureText(text).width / 2.55
        ctx.fillText(text, x, -10 + pfp.height)

        ctx.font = `33px sans-serif`
        text = `Member #${guild.memberCount}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 40 + pfp.height)

        ctx.font = `55px sans-serif`
        text = `Welcome`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, -60 + pfp.height)

        const Attachment = new MessageAttachment(canvas.toBuffer())
        channel.send('', Attachment)

    })
}