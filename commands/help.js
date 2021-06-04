module.exports = {
	name: 'help',
	description: 'You are already here.',
	execute(message, args, message, args, prefix, game, players, totalP, day, arr, host) {
		const playersEmbed = new Discord.MessageEmbed()
        .setColor('#ff5555')
        .setTitle('List of Commands :')
        .addFields(
            { name: "Ping", value: "Ping to check the availability of the bot."},
            { name: "Start", value: "Used to start a game of Hunger Games. Whoever uses this command becomes the host."},
            { name: "Join", value: "To be used when a game has started, to enter the game as a participant."},
            { name: "Commence", value: "Use once all players have entered the game, and are ready. Can only be used by the host."},
            { name: "Status", value: "Can be used at any time by anyone to check the status of all tributes during a game."},
            { name: "Proceed", value: "To simulate the events of the next day. Can only be used by the host. Please **Don't** spam this command."},
            { name: "Help", value: "You are already here."},
            { name: "End", value: "Command used to end the game pre-maturely."},
            { name: "Invite Link", value: "[Link.]("+invite+")"},
            { name: '\u200B', value: '\u200B' },
            { name: "Patch Notes:", value: "```yaml\nThe bot is still in Alpha so it is just a working-skeleton.\nThe Status window needs to be reworked, for better readability.\nThe Daily events need to be tweaked/formatted, so they look more readable.\nDay-end Cannons for the deceased are still unavailable.\nA sorted post-game result page is still unavailable.\nE1nst31n\n```"},
            
        )
        .setTimestamp()
        .setFooter('May the strongest tribute survive');

        message.channel.send(playersEmbed);
	},
};