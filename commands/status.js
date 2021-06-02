module.exports = {
	name: 'status',
	description: 'Can be used at any time by anyone to check the status of all tributes during a game.',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};