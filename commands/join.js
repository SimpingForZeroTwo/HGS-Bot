module.exports = {
	name: 'join',
	description: 'To be used when a game has started, to enter the game as a participant.',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};