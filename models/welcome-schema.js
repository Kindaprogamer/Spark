const mongoose = require(`mongoose`)

const reqString = {
    type: String,
    required: true
}
const welcomeSchema = new mongoose.Schema({
    //guildid
    _id: reqString,
    channelId: reqString
})

module.exports = mongoose.model(`Welcome-canvas`, welcomeSchema)