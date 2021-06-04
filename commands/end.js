module.exports = {
	name: 'end',
	description: 'Command used to end the game pre-maturely.',
	execute(message, args, prefix, game, players, totalP, day, arr, host) {
		if ((game == 2 || game == 1) && message.author.username === host) 
        {
            message.channel.send('Game has ended due to unforeseen circumstances');
            game = 0
        }
	},
};