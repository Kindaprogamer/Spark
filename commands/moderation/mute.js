const syntax = '/mute <target\'s @> <duration> <durationType: m, d, y, perm'

const redis = require('../../redis')
module.exports = {
    requiredPermissions: ['KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: ({ message, args, text }) => {
        const { member, channel, content } = message

        const split = content.split(' ')

        if(split.length !== 4) {
            channel.send('Please use correct format ' + syntax)
        }

        const duration = split[2]
        const durationType = split[3]

        if(isNaN(duration)) {
            channel.send('Please provide a number for the duration ' + syntax)
            return
        }

        const durations = {
            m: 60,
            h: 60 * 60,
            d: 60* 60* 24,
            perm: -1,
        }

        if(!durations[durationType]) {
            channel.send('Please provi;e a valid durationType ' + syntax)
            return
        }

    }
}
