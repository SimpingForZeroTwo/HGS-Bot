module.exports = {
	name: 'ping',
	description: 'Ping to check the availability of the bot.',
	execute(message, args) {
		message.channel.send('Pong'+prefix);
	},
};