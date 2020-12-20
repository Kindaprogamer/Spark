const docs = require('djsdocs')
module.exports = {
    callback: (message, args, text) => {
        docs.get(args.join(' '), message)
    }
}