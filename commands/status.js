module.exports = {
	name: 'status',
	description: 'Can be used at any time by anyone to check the status of all tributes during a game.',
	execute(message, args, game, players, totalP, day, arr, host) {
		message.channel.send('Pong.');
	},
};