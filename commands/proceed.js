module.exports = {
	name: 'proceed',
	description: "To simulate the events of the next day. Can only be used by the host. Please **Don't** spam this command.",
	execute(message, args, message, args, prefix, game, players, totalP, day, arr, host) {
		if(game==2 && message.author.username === host)
		{
			arr.sort( ()=>Math.random()-0.5 );
			console.log(arr)
			if(day==0)
			{
				message.channel.send("As the tributes stand on their podiums, the horn sounds!!!");
				for(var i=0;i<arr.length;i++)
				{
					if(players[arr[i]][1]==="Alive")
					{
						var j = Math.random()
						if(j<0.3)
						message.channel.send("`"+players[arr[i]][0]+"` runs away from the Cornucopia")
						else if(j<0.45)
						message.channel.send("`"+players[arr[i]][0]+"` runs into the Cornucopia and hides")
						else if(j<0.6)
						message.channel.send("`"+players[arr[i]][0]+"` finds a "+weapons[Math.floor(Math.random()*6)]+" and then runs away from the Cornucopia")
						else if(j<0.7)
						{
							if(i<(arr.length)-1)
							{
								message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` with a "+weapons[Math.floor(Math.random()*6)]+" and then runs away")
								players[arr[i]][3]++
								i++
								players[arr[i]][1]="Dead"
								arr.splice(i,1)
								i--
								console.log(arr)
							}
							else
							{
								message.channel.send("`"+players[arr[i]][0]+"` starts late due to nervousness, falls of the podium in a panic and lands on their neck... and meet their end quite early")
								players[arr[i]][1]="Dead"
								arr.splice(i,1)
								i--
								console.log(arr)
							}
						}
						else if(j<0.85)
						message.channel.send("`"+players[arr[i]][0]+"` finds a bag full of explosives")
						else
						message.channel.send("`"+players[arr[i]][0]+"` snatches a bottle of alcohol and a rag before running off")
					}
				}
				message.channel.send("Day 1 Starts!");
				message.channel.send("_ _ _ _ _ _ _");
				day++
				console.log(players)
				console.log(day)
			}
			else if(day%2 == 1)
			{
				message.channel.send("Day "+Math.ceil(day/2));
				var i = 0
				var f = 0
				while(i<arr.length)
				{
					var j = Math.ceil(Math.random()*3)
					if(j==0)
					{
						j=1
					}
					if(j>=arr.length)
					{
						f=1
						j=arr.length
					}
					if(j>(arr.length-i))
					{
						j=arr.length-i
					}

					if(j==1)
					{
						var k = Math.random()
						if(k>0.3)
						message.channel.send("`"+players[arr[i]][0]+"`"+s_lines_day[Math.floor(Math.random()*15)])
						else if(k>0.1)
						message.channel.send("`"+players[arr[i]][0]+"` receives "+supplies[Math.floor(Math.random()*5)]+" from an unknown sponsor")
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"`"+s_d_lines[Math.floor(Math.random()*3)])
							players[arr[i]][1]="Dead"
							arr.splice(i,1)
							i--
							console.log(arr)
						}
					}
					else if(j==2)
					{
						var k = Math.random()
						if(k<0.2 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"`"+d_lines[Math.floor(Math.random()*3)])
						else if(k<0.3)
						message.channel.send("`"+players[arr[i]][0]+"` ambushes `"+players[arr[i+1]][0]+"`, but `"+players[arr[i+1]][0]+"` manages to escape")
						else if(k<0.4 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"` defeats `"+players[arr[i+1]][0]+"` in a fight, but spares their life")
						else if(k<0.5)
						message.channel.send("`"+players[arr[i]][0]+"` secretly stalks `"+players[arr[i+1]][0]+"`")
						else if(k<0.55)
						{
							message.channel.send("`"+players[arr[i]][0]+"` smashes `"+players[arr[i+1]][0]+"'s` head with a bottle of vodka, *cyka blyat* style")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.6)
						{
							message.channel.send("`"+players[arr[i]][0]+"` stabs `"+players[arr[i+1]][0]+"` while his back is turned")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.65)
						{
							message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` while he is resting")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.7)
						{
							message.channel.send("`"+players[arr[i]][0]+"` strangles `"+players[arr[i+1]][0]+"` with a rope")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.75)
						{
							message.channel.send("`"+players[arr[i]][0]+"` catches `"+players[arr[i+1]][0]+"` off guard and kills him")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.8)
						{
							message.channel.send("`"+players[arr[i]][0]+"` tracks down and kills `"+players[arr[i+1]][0]+"`")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.85)
						{
							message.channel.send("`"+players[arr[i]][0]+"` sets `"+players[arr[i+1]][0]+"` on fire with a molotov")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.9)
						{
							message.channel.send("`"+players[arr[i]][0]+"` poisons `"+players[arr[i+1]][0]+"'s` food, killing him")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` with a "+weapons[Math.floor(Math.random()*6)])
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
					}
					else if(j==3)
					{
						var k = Math.random()
						if(k<0.2 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"`, `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"` hunt for other tributes")
						else if(k<0.45)
						{
							message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"` track down and kill `"+players[arr[i+2]][0]+"` together")
							players[arr[i]][3]++
							players[arr[i+1]][3]++
							players[arr[i+2]][1]="Dead"
							arr.splice(i+2,1)
							i--
							console.log(arr)
						}
						else if(k<0.65 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"`, `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"` hold hands together and cheerfully sing songs")
						
						else if(k<0.9)
						{
							message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"` work together to drown `"+players[arr[i+2]][0]+"`")
							players[arr[i]][3]++
							players[arr[i+1]][3]++
							players[arr[i+2]][1]="Dead"
							arr.splice(i+2,1)
							i--
							console.log(arr)
						}
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"` sets an explosive off, killing `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"`")
							players[arr[i]][3]= 2 + players[arr[i]][3]
							players[arr[i+1]][1]="Dead"
							players[arr[i+2]][1]="Dead"
							arr.splice(i+1,2)
							i=i-2
							console.log(arr)
						}
					}
					i=i+j
				}
				message.channel.send("Day "+Math.ceil(day/2)+" comes to an end!");
				message.channel.send("_ _ _ _ _ _ _");
				day++
				console.log(players)
				console.log(day)
			}
			else
			{
				message.channel.send("Night "+Math.floor(day/2));
				var i = 0
				var f = 0
				while(i<arr.length)
				{
					var j = Math.ceil(Math.random()*3)
					if(j==0)
					{
						j=1
					}
					if(j>=arr.length)
					{
						f=1
						j=arr.length
					}
					if(j>(arr.length-i))
					{
						j=arr.length-i
					}

					if(j==1)
					{
						var k = Math.random()
						if(k>0.3)
						message.channel.send("`"+players[arr[i]][0]+"`"+s_lines_night[Math.floor(Math.random()*9)])
						else if(k>0.1)
						message.channel.send("`"+players[arr[i]][0]+"` receives "+supplies[Math.floor(Math.random()*5)]+" from an unknown sponsor")
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"`"+s_d_lines[Math.floor(Math.random()*3)])
							players[arr[i]][1]="Dead"
							arr.splice(i,1)
							i--
							console.log(arr)
						}
					}
					else if(j==2)
					{
						var k = Math.random()
						if(k<0.2 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"`"+d_lines[Math.floor(Math.random()*3)])
						else if(k<0.3)
						message.channel.send("`"+players[arr[i]][0]+"` ambushes `"+players[arr[i+1]][0]+"`, but `"+players[arr[i+1]][0]+"` manages to escape")
						else if(k<0.4 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"` defeats `"+players[arr[i+1]][0]+"` in a fight, but spares their life.")
						else if(k<0.5)
						message.channel.send("`"+players[arr[i]][0]+"` secretly stalks `"+players[arr[i+1]][0]+"`")
						else if(k<0.55)
						{
							message.channel.send("`"+players[arr[i]][0]+"` smashes `"+players[arr[i+1]][0]+"'s` head with a bottle of vodka, *cyka blyat* style")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.6)
						{
							message.channel.send("`"+players[arr[i]][0]+"` stabs `"+players[arr[i+1]][0]+"` while his back is turned")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.65)
						{
							message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` while he is resting")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.7)
						{
							message.channel.send("`"+players[arr[i]][0]+"` strangles `"+players[arr[i+1]][0]+"` with a rope")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.75)
						{
							message.channel.send("`"+players[arr[i]][0]+"` catches `"+players[arr[i+1]][0]+"` off guard and kills him")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.8)
						{
							message.channel.send("`"+players[arr[i]][0]+"` tracks down and kills `"+players[arr[i+1]][0]+"`")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.85)
						{
							message.channel.send("`"+players[arr[i]][0]+"` sets `"+players[arr[i+1]][0]+"` on fire with a molotov")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else if(k<0.9)
						{
							message.channel.send("`"+players[arr[i]][0]+"` poisons `"+players[arr[i+1]][0]+"'s` food, killing him")
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` with a "+weapons[Math.floor(Math.random()*6)])
							players[arr[i]][3]++
							players[arr[i+1]][1]="Dead"
							arr.splice(i+1,1)
							i--
							console.log(arr)
						}
					}
					else if(j==3)
					{
						var k = Math.random()
						if(k<0.3 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"`, `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"` hunt for other tributes")
						else if(k<0.45)
						{
							message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"` track down and kill `"+players[arr[i+2]][0]+"` together")
							players[arr[i]][3]++
							players[arr[i+1]][3]++
							players[arr[i+2]][1]="Dead"
							arr.splice(i+2,1)
							i--
							console.log(arr)
						}
						else if(k<0.75 && f==0)
						message.channel.send("`"+players[arr[i]][0]+"`, `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"` hold hands together and cheerfully sing songs")
						
						else if(k<0.9)
						{
							message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"` work together to drown `"+players[arr[i+2]][0]+"`")
							players[arr[i]][3]++
							players[arr[i+1]][3]++
							players[arr[i+2]][1]="Dead"
							arr.splice(i+2,1)
							i--
							console.log(arr)
						}
						else
						{
							message.channel.send("`"+players[arr[i]][0]+"` sets an explosive off, killing `"+players[arr[i+1]][0]+"` and `"+players[arr[i+2]][0]+"`")
							players[arr[i]][3]= 2 + players[arr[i]][3]
							players[arr[i+1]][1]="Dead"
							players[arr[i+2]][1]="Dead"
							arr.splice(i+1,2)
							i=i-2
							console.log(arr)
						}
					}
					i=i+j
				}
				message.channel.send("Night "+Math.floor(day/2)+" comes to an end!");
				message.channel.send("_ _ _ _ _ _ _");
				day++
				console.log(players)
				console.log(day)
			}
			if(arr.length==1)
			{
				message.channel.send("_ _ _ _ _ _ _")
				message.channel.send("```fix\n"+players[arr[0]][0]+" is the winner\n"+players[arr[0]][2]+"    Kills: "+players[arr[0]][3]+"\n```")
				message.channel.send("_ _ _ _ _ _ _")
				game=0
			}
		}
	},
};