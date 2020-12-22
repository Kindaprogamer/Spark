const docs = require('djsdocs')
module.exports = {
    category: 'Help',
    callback: (message, args, text) => {
        docs.get(args.join(' '), message)
    }
}