module.exports = {
	name: 'ping',
	description: 'Ping to check the availability of the bot.',
	execute(message, args, prefix, game, players, totalP, day, arr, host) {
		message.channel.send('Pong'+prefix);
	},
};