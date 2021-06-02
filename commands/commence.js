module.exports = {
	name: 'commence',
	description: 'Use once all players have entered the game, and are ready. Can only be used by the host.',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};