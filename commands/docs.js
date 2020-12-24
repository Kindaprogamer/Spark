const docs = require('djsdocs')
module.exports = {
    category: 'Help',
    description: 'Get coding help directly from the DJS docs',
    callback: ({ message, args, text }) => {
        docs.get(args.join(' '), message)
    }
}