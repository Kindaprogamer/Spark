const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const suggestionSchema = mongoose.Schema({
    //guildId
    _id: reqString,
    channelId: reqString
})

module.exports = mongoose.model('suggestions', suggestionSchema)