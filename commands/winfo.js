const { MessageEmbed } = require('discord.js')

module.exports = {
    aliases: ['info', 'i'],
    callback: ({ message }) => {
        message.delete()
        if(message.guild.id !== `760415479537074206`) {
            return;
        }
        if(message.author.id !== '608387913256009739') {
            return;
        }
        let embed = new MessageEmbed()

        .setTitle('CHANNEL INFORMATION')
        .addFields(
            { name: 'INFO CHANNELS', value: `
            <#766035996314697759> - Where all new people are shown.\n
            <#760828345394003998> - Make sure to read the rules to not get banned.\n
            <#760925442906521680> - Important server announcements or similar.\n
            <#796855909901008916> - Go vote for the server here so we can become a larger community.\n
            <#800796167528251422> and <#797136232571207740> - Get roles for access to different channels.
            `},
            { name: 'TEXT CHANNELS', value: `
            <#760415479537074208> - Talk with people.\n
            <#760415479537074210> - Post your bets gaming clips here.\n
            <#761223849860923393> - MEMES!!.\n
            <#761240390715047946> - Advertise your server(s) here.\n
            <#788092382876532766> - Give us suggestions on how to improve the server.\n
            ` },
            { name: 'BOT COMMANDS', value: `
            <#761151400829779968> - The only place where <@234395307759108106> can be used.\n
            <#761243585110081578> - Used for <@270904126974590976> commands.\n
            <#761566996520894464> - Used also for <@270904126974590976> pet commands.\n
            <#761243631532376064> - For all bot commands.
            ` },
            { name: 'FUN/BOT-GAME COMMANDS', value: `
            <#801459838034378822> - have fun with akinator with the \`/aki\` command.\n
            <#801460057442484275> - Challange your friends to a game of connect 4 with the \`/connect4\` command.\n
            <#800497897518137394> - Count. it is as simple as that.\n
            <#779087907540959282> - Only avaliable for <@&780156247403134987> and <@&780160482832285726> to see.
            ` },
            { name: 'GAME CHAT CHANNELS', value: `
            <#801181359677636648> - Talk about GTA games\n
            <#801181419593662505> - Talk about Siege\n
            <#801181468520742934> - Talk about Overwatch\n
            <#801181525836169266> - Talk about CoD
            ` },
            { name: 'PLATFORM CHAT CHANNELS', value: `
            <#797173370369474560> - it is xbox\n
            <#797173422928429067> - It is computer related stuff\n
            <#797173470479253504> - For nintendo games and stuff\n
            <#797173523558039613> - For playstation talk
            ` }
        )
        .setFooter(`If this needs changing, ping Kindaprogamer#9710 in general`)
        .setThumbnail('https://cdn.discordapp.com/icons/760415479537074206/a2856f30fe95702f0e77c762fa7e6613.webp?size=128')
        .setURL('https://discordapp.com/terms')
        // .then(m => m.delete({ timeout: 4500 }))

        let eEmbed = new MessageEmbed()
        .setTitle('SEEVER INFO')
        .setColor('RANDOM')
        .setDescription('Hi there and welcome to the Gamers Guild')
        .addFields(
            { name: 'Welcome to the \*Gamers Guild\*', value: `` },
            { name: 'Info about the server', value: `So, since you are here, you may want some info on the server and staff so here you go` },
            { name: '**__STAFF TEAM__**', value: `
            **• Owner:**
            - danny boyo 3>#9061\n
            **• Head Admin:**
            - BrightKnight#0399\n
            **• Admins':**
            - F*ck you#9562
            - Kindaprogamer#971\n
            **• Moderators:**
            - iiEv4ns#6969
            - smeloise#5155\n
            ` },
            { name: '', value: `` }
        )

        // message.channel.send(eEmbed).then(message.channel.send(embed))
        message.reply(eEmbed).then(m => m.delete({ timeout: 4000 }))
        
    }
}
        