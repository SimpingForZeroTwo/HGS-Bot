module.exports = {
	name: 'status',
	description: 'Can be used at any time by anyone to check the status of all tributes during a game.',
	execute(message, args) {
		if(game == 0 || game == 2)
		{
			const playersEmbed = new Discord.MessageEmbed()
			.setColor('#ff5555')
			.addFields(
				{ name: players[0][1]==="Dead"?"~~`"+players[0][0]+"`~~":players[0][0], value: "```diff\n"+(players[0][1]==="Dead"?"-"+players[0][1]:"+"+players[0][1])+"\n"+players[0][2]+"\nKills: "+players[0][3]+"\n```", inline: true },
				{ name: players[1][1]==="Dead"?"~~`"+players[1][0]+"`~~":players[1][0], value: "```diff\n"+(players[1][1]==="Dead"?"-"+players[1][1]:"+"+players[1][1])+"\n"+players[1][2]+"\nKills: "+players[1][3]+"\n```", inline: true },
				{ name: players[2][1]==="Dead"?"~~`"+players[2][0]+"`~~":players[2][0], value: "```diff\n"+(players[2][1]==="Dead"?"-"+players[2][1]:"+"+players[2][1])+"\n"+players[2][2]+"\nKills: "+players[2][3]+"\n```", inline: true },
				{ name: players[3][1]==="Dead"?"~~`"+players[3][0]+"`~~":players[3][0], value: "```diff\n"+(players[3][1]==="Dead"?"-"+players[3][1]:"+"+players[3][1])+"\n"+players[3][2]+"\nKills: "+players[3][3]+"\n```", inline: true },
				{ name: players[4][1]==="Dead"?"~~`"+players[4][0]+"`~~":players[4][0], value: "```diff\n"+(players[4][1]==="Dead"?"-"+players[4][1]:"+"+players[4][1])+"\n"+players[4][2]+"\nKills: "+players[4][3]+"\n```", inline: true },
				{ name: players[5][1]==="Dead"?"~~`"+players[5][0]+"`~~":players[5][0], value: "```diff\n"+(players[5][1]==="Dead"?"-"+players[5][1]:"+"+players[5][1])+"\n"+players[5][2]+"\nKills: "+players[5][3]+"\n```", inline: true },
				{ name: players[6][1]==="Dead"?"~~`"+players[6][0]+"`~~":players[6][0], value: "```diff\n"+(players[6][1]==="Dead"?"-"+players[6][1]:"+"+players[6][1])+"\n"+players[6][2]+"\nKills: "+players[6][3]+"\n```", inline: true },
				{ name: players[7][1]==="Dead"?"~~`"+players[7][0]+"`~~":players[7][0], value: "```diff\n"+(players[7][1]==="Dead"?"-"+players[7][1]:"+"+players[7][1])+"\n"+players[7][2]+"\nKills: "+players[7][3]+"\n```", inline: true },
				{ name: players[8][1]==="Dead"?"~~`"+players[8][0]+"`~~":players[8][0], value: "```diff\n"+(players[8][1]==="Dead"?"-"+players[8][1]:"+"+players[8][1])+"\n"+players[8][2]+"\nKills: "+players[8][3]+"\n```", inline: true },
				{ name: players[9][1]==="Dead"?"~~`"+players[9][0]+"`~~":players[9][0], value: "```diff\n"+(players[9][1]==="Dead"?"-"+players[9][1]:"+"+players[9][1])+"\n"+players[9][2]+"\nKills: "+players[9][3]+"\n```", inline: true },
				{ name: players[10][1]==="Dead"?"~~`"+players[10][0]+"`~~":players[10][0], value: "```diff\n"+(players[10][1]==="Dead"?"-"+players[10][1]:"+"+players[10][1])+"\n"+players[10][2]+"\nKills: "+players[10][3]+"\n```", inline: true },
				{ name: players[11][1]==="Dead"?"~~`"+players[11][0]+"`~~":players[11][0], value: "```diff\n"+(players[11][1]==="Dead"?"-"+players[11][1]:"+"+players[11][1])+"\n"+players[11][2]+"\nKills: "+players[11][3]+"\n```", inline: true },
				{ name: players[12][1]==="Dead"?"~~`"+players[12][0]+"`~~":players[12][0], value: "```diff\n"+(players[12][1]==="Dead"?"-"+players[12][1]:"+"+players[12][1])+"\n"+players[12][2]+"\nKills: "+players[12][3]+"\n```", inline: true },
				{ name: players[13][1]==="Dead"?"~~`"+players[13][0]+"`~~":players[13][0], value: "```diff\n"+(players[13][1]==="Dead"?"-"+players[13][1]:"+"+players[13][1])+"\n"+players[13][2]+"\nKills: "+players[13][3]+"\n```", inline: true },
				{ name: players[14][1]==="Dead"?"~~`"+players[14][0]+"`~~":players[14][0], value: "```diff\n"+(players[14][1]==="Dead"?"-"+players[14][1]:"+"+players[14][1])+"\n"+players[14][2]+"\nKills: "+players[14][3]+"\n```", inline: true },
				{ name: players[15][1]==="Dead"?"~~`"+players[15][0]+"`~~":players[15][0], value: "```diff\n"+(players[15][1]==="Dead"?"-"+players[15][1]:"+"+players[15][1])+"\n"+players[15][2]+"\nKills: "+players[15][3]+"\n```", inline: true },
				{ name: players[16][1]==="Dead"?"~~`"+players[16][0]+"`~~":players[16][0], value: "```diff\n"+(players[16][1]==="Dead"?"-"+players[16][1]:"+"+players[16][1])+"\n"+players[16][2]+"\nKills: "+players[16][3]+"\n```", inline: true },
				{ name: players[17][1]==="Dead"?"~~`"+players[17][0]+"`~~":players[17][0], value: "```diff\n"+(players[17][1]==="Dead"?"-"+players[17][1]:"+"+players[17][1])+"\n"+players[17][2]+"\nKills: "+players[17][3]+"\n```", inline: true },
				{ name: players[18][1]==="Dead"?"~~`"+players[18][0]+"`~~":players[18][0], value: "```diff\n"+(players[18][1]==="Dead"?"-"+players[18][1]:"+"+players[18][1])+"\n"+players[18][2]+"\nKills: "+players[18][3]+"\n```", inline: true },
				{ name: players[19][1]==="Dead"?"~~`"+players[19][0]+"`~~":players[19][0], value: "```diff\n"+(players[19][1]==="Dead"?"-"+players[19][1]:"+"+players[19][1])+"\n"+players[19][2]+"\nKills: "+players[19][3]+"\n```", inline: true },
				{ name: players[20][1]==="Dead"?"~~`"+players[20][0]+"`~~":players[20][0], value: "```diff\n"+(players[20][1]==="Dead"?"-"+players[20][1]:"+"+players[20][1])+"\n"+players[20][2]+"\nKills: "+players[20][3]+"\n```", inline: true },
				{ name: players[21][1]==="Dead"?"~~`"+players[21][0]+"`~~":players[21][0], value: "```diff\n"+(players[21][1]==="Dead"?"-"+players[21][1]:"+"+players[21][1])+"\n"+players[21][2]+"\nKills: "+players[21][3]+"\n```", inline: true },
				{ name: players[22][1]==="Dead"?"~~`"+players[22][0]+"`~~":players[22][0], value: "```diff\n"+(players[22][1]==="Dead"?"-"+players[22][1]:"+"+players[22][1])+"\n"+players[22][2]+"\nKills: "+players[22][3]+"\n```", inline: true },
				{ name: players[23][1]==="Dead"?"~~`"+players[23][0]+"`~~":players[23][0], value: "```diff\n"+(players[23][1]==="Dead"?"-"+players[23][1]:"+"+players[23][1])+"\n"+players[23][2]+"\nKills: "+players[23][3]+"\n```", inline: true },
			)
			.setTimestamp()
			.setFooter('May the strongest tribute survive');
			message.channel.send(playersEmbed);
		}
	},
};