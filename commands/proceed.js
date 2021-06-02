module.exports = {
	name: 'proceed',
	description: "To simulate the events of the next day. Can only be used by the host. Please **Don't** spam this command.",
	execute(message, args) {
		message.channel.send('Pong.');
	},
};