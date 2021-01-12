const redis = require(redis)
require('dotenv').config()
const { redisPath } = require(process.env.REDIS_PATH)

module.exports = async () => {
    return await new Promise((resolve, reject) => {
        const client = redis.createClient({
            url: redisPath
        })

        client.on('error', (err) => {
            console.error('redis error ', err)
            client.quit()
            reject(err)
        })

        client.on('ready', () => {
            resolve(client)
        })
    })
}