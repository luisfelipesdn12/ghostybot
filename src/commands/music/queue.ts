import Command from "structures/Command";
import Bot from "structures/Bot";
import { Message } from "discord.js";

export default class QueueCommand extends Command {
  constructor(bot: Bot) {
    super(bot, {
      name: "queue",
      description: "Show top 20 songs in the queue",
      aliases: ["q"],
      category: "music",
    });
  }

  async execute(message: Message) {
    const lang = await this.bot.utils.getGuildLang(message.guild?.id);

    try {
      if (!message.member?.voice.channel) {
        return message.channel.send({ content: lang.MUSIC.MUST_BE_IN_VC });
      }

      const queue = this.bot.player.getQueue(message);

      if (!queue) {
        return message.channel.send({ content: lang.MUSIC.NO_QUEUE });
      }

      const tracks = queue.songs
        .map((track, idx) => {
          return `${idx === 0 ? `**${lang.MUSIC.NOW_PLAYING}**` : `**${idx}:**`} ${track.name}`;
        })
        .slice(0, 20)
        .join("\n");

      const embed = this.bot.utils
        .baseEmbed(message)
        .setTitle(`${message.guild?.name} ${lang.MUSIC.QUEUE}`)
        .setDescription(tracks);

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      this.bot.utils.sendErrorLog(err, "error");
      return message.channel.send({ content: lang.GLOBAL.ERROR });
    }
  }
}
