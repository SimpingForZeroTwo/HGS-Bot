module.exports = {
	name: 'ping',
	description: 'Ping to check the availability of the bot.',
	execute(message, args, prefix) {
		message.channel.send('Pong'+prefix);
	},
};