const syntax = '/mute <target\'s @> <duration> <durationType: m, d, y, perm'
const key = 'muted-'

const redis = require('../../redis')
module.exports = {
    requiredPermissions: ['KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: async ({ message, args, text }) => {
        const { member, channel, content, mentions } = message

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

        const seconds = duration * durations[durationType]

        const target = mentions.first()

        if(!target) {
            channel.send('Please tag a user you would like to mute ' + syntax)
            return
        }

        const {id} = target

        const redisClient = await redis()
        try {
            const redisKey = `${key}${id}`

            if(seconds > 0) {
                redisClient.set(redisKey, 'true', 'EX', seconds)
            } else {
                redisClient.set(redisKey, 'true')
            }

        } finally {
            redisClient.quit()
        }

    }
}
