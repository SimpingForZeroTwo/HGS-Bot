module.exports = {
	name: 'join',
	description: 'To be used when a game has started, to enter the game as a participant.',
	execute(message, args, message, args, prefix, game, players, totalP, day, arr, host) {
		if(game==1)
    	{
        	if(totalP==24)
        	{
            	message.reply(" take your seat among the audience, the hunger games are about to begin.");
            	return;
        	}
        	players[totalP][0] = message.mentions.users.size>0?args.shift():message.author.username;
			message.reply(players[totalP][0]+" is ready!\nTributes in-game : "+(totalP+1));
			players[totalP][1] = "Alive";
			players[totalP][2] = "District ";
			players[totalP][3] = 0;
			totalP++;
			console.log(message.author.username);
    	}
		else if(game==0)
		{
			message.reply(" you should start a game before joining one.")
		}
		else
		{
			message.reply(" a game is already underway.")
		}
	},
};