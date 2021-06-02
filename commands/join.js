module.exports = {
	name: 'join',
	description: 'To be used when a game has started, to enter the game as a participant.',
	execute(message, args, game, players, totalP, day, arr, host) {
		message.channel.send('Pong.');
	},
};