const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

module.exports = {
    commands: ['play', 'p'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You need to be in a voice channel to play music!", message.channel);

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return message.channel.send("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
        if (!permissions.has("SPEAK")) return message.channel.send("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);

        var searchString = args.join(" ");
        if (!searchString) return message.channel.send("Please tell me what you want to play. (Youtube links might not work)", message.channel);

        var serverQueue = message.client.queue.get(message.guild.id);

        var searched = await yts.search(searchString)
        if (searched.videos.length === 0) return message.channel.send("Looks like i was unable to find the song on YouTube. Please make sure you entered a valid query.", message.channel)
        var songInfo = searched.videos[0]

        const song = {
            id: songInfo.videoId,
            title: Util.escapeMarkdown(songInfo.title),
            views: String(songInfo.views).padStart(10, ' '),
            url: songInfo.url,
            ago: songInfo.ago,
            duration: songInfo.duration.toString(),
            img: songInfo.image,
            req: message.author
        };

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
                .setAuthor("Song has been added to queue", song.req.displayAvatarURL({ dynamic: true }))
                .setThumbnail(song.img)
                .setColor("YELLOW")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField("Requested by", song.req.tag, true)
                .setFooter(`Views: ${song.views} | ${song.ago}`)
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 2,
            playing: true,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async (song) => {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                message.client.queue.delete(message.guild.id);
                return;
            }

            const dispatcher = queue.connection
                .play(ytdl(song.url, { quality: 'highestaudio', highWaterMark: 1 << 25 }))
                .on("finish", () => {
                    queue.songs.shift();
                    play(queue.songs[0]);
                })
                .on("error", (error) => console.error(error));
            dispatcher.setVolumeLogarithmic(queue.volume / 5);
            let thing = new MessageEmbed()
                .setAuthor("Started Playing Music!", song.req.displayAvatarURL({ dynamic: true }))
                .setThumbnail(song.img)
                .setColor("BLUE")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField("Requested by", song.req.tag, true)
                .setFooter(`Views: ${song.views} | Ago: ${song.ago}`)
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            channel.guild.voice.setSelfDeaf(true)
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return message.channel.send(`I could not join the voice channel: ${error}`, message.channel);
        }
    },
}