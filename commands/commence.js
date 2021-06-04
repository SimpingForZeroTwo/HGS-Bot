module.exports = {
	name: 'commence',
	description: 'Use once all players have entered the game, and are ready. Can only be used by the host.',
	execute(message, args) {
		if(game==1 && message.author.username === host)
		{
			console.log("Commenced!")
			game = 2
			day=0
			arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
			if(totalP<24)
			{
				characters.sort( ()=>Math.random()-0.5 );
				var j =0;
				while(totalP<24)
				{
					players[totalP] = [characters[j],"Alive","District ",0];
					totalP++;
					console.log(characters[j],totalP);
					j++;
				}
			}
			players.sort( ()=>Math.random()-0.5 );
			console.log(players)
			var k =0;
			while(k<24)
			{
				players[k][2] = players[k][2] + Math.floor(k/2 + 1);
				k++;
			}
			const playersEmbed = new Discord.MessageEmbed()
			.setColor('#ff5555')
			.setTitle('Let The Hunger Games Begin!')
			.addFields(
				{ name: players[0][0], value: players[0][1]+"\n"+players[0][2], inline: true },
				{ name: players[1][0], value: players[1][1]+"\n"+players[1][2], inline: true },
				{ name: players[2][0], value: players[2][1]+"\n"+players[2][2], inline: true },
				{ name: players[3][0], value: players[3][1]+"\n"+players[3][2], inline: true },
				{ name: players[4][0], value: players[4][1]+"\n"+players[4][2], inline: true },
				{ name: players[5][0], value: players[5][1]+"\n"+players[5][2], inline: true },
				{ name: players[6][0], value: players[6][1]+"\n"+players[6][2], inline: true },
				{ name: players[7][0], value: players[7][1]+"\n"+players[7][2], inline: true },
				{ name: players[8][0], value: players[8][1]+"\n"+players[8][2], inline: true },
				{ name: players[9][0], value: players[9][1]+"\n"+players[9][2], inline: true },
				{ name: players[10][0], value: players[10][1]+"\n"+players[10][2], inline: true },
				{ name: players[11][0], value: players[11][1]+"\n"+players[11][2], inline: true },
				{ name: players[12][0], value: players[12][1]+"\n"+players[12][2], inline: true },
				{ name: players[13][0], value: players[13][1]+"\n"+players[13][2], inline: true },
				{ name: players[14][0], value: players[14][1]+"\n"+players[14][2], inline: true },
				{ name: players[15][0], value: players[15][1]+"\n"+players[15][2], inline: true },
				{ name: players[16][0], value: players[16][1]+"\n"+players[16][2], inline: true },
				{ name: players[17][0], value: players[17][1]+"\n"+players[17][2], inline: true },
				{ name: players[18][0], value: players[18][1]+"\n"+players[18][2], inline: true },
				{ name: players[19][0], value: players[19][1]+"\n"+players[19][2], inline: true },
				{ name: players[20][0], value: players[20][1]+"\n"+players[20][2], inline: true },
				{ name: players[21][0], value: players[21][1]+"\n"+players[21][2], inline: true },
				{ name: players[22][0], value: players[22][1]+"\n"+players[22][2], inline: true },
				{ name: players[23][0], value: players[23][1]+"\n"+players[23][2], inline: true },
			)
			.setTimestamp()
			.setFooter('May the strongest tribute survive');

			message.channel.send(playersEmbed);
			message.channel.send("`The Tributes are ready, the Hunger Games are about to begin.\nThe crowd roars and cheers as the tributes enter the battlefield on their podiums. `");
			message.channel.send("Use the 'proceed' command to continue.")
			message.channel.send("Use the 'status' command to check the players' status.")
		}
	},
};