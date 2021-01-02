const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('guildCreate', guild =>{
        const channelId = '794630005040742430';
        const channel = client.channels.cache.get(channelId); //This Gets That Channel
        const sowner = guild.owner.user; //This Gets The Guild Owner
        if(!channel) return; //If the channel is invalid it returns
        const embed = new MessageEmbed()
            .setTitle('I Joined A Guild!')
            .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
            .setTimestamp()
            .setColor('RANDOM')
            .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`);
        channel.send(embed);
    });
}

