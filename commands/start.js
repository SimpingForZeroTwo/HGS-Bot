module.exports = {
	name: 'start',
	description: 'Used to start a game of Hunger Games. Whoever uses this command becomes the host.',
	execute(message, args, game, players, totalP, day, arr, host) {
		if(game == 0)
        {
            host = message.author.username
            message.channel.send("IKUZO!!!")
            message.channel.send("All tributes, get ready by using the 'join' command.")
            message.channel.send("Use the 'commence' command when everyone is ready.")
            totalP = 0
            for(var i =0;i<24;i++)
            {
                players[i]= []
            }
            game = 1;
            console.log("Game Start!")
        }
        else
        {
            message.reply(" a game is already underway.");
        }
	},
};