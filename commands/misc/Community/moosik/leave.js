module.exports = {
    aliases: ['die', 'leave', 'dc', 'disconnect'],
    callback: async ({message, args}) => {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) {
            return message.reply("You need to be in a vc to stop the music")        
        } else {
            await voiceChannel.leave();
            await message.react('✅')
            await message.channel.send('Goodbye!')
        }
    }
}