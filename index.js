const {prefix,token,s_d_lines,s_lines_day,s_lines_night,d_lines,weapons,supplies,characters} = require('./config.json')
const Discord = require('discord.js');
const client = new Discord.Client();
let game = 0;
let players = new Array(24);
let totalP = 0;
let day = 0;
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var host = ""


client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    client.user.setActivity(prefix+"help")
})
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command==='ping') 
    {
        message.channel.send('Pong'+prefix);
    }
    else if (command==='end' && game == 2 && message.author.username === host) 
    {
        message.channel.send('Game has ended due to unforeseen circumstances');
        game = 0
    }
    else if (command==='help') 
    {
        const playersEmbed = new Discord.MessageEmbed()
        .setColor('#ff5555')
        .setTitle('List of Commands :')
        .addFields(
            { name: "Ping", value: "Ping to check the availability of the bot."},
            { name: "Start", value: "Used to start a game of Hunger Games. Whoever uses this command becomes the host."},
            { name: "Ikuzo", value: "To be used when a game has started, to enter the game as a participant."},
            { name: "Commence", value: "Use once all players have entered the game, and are ready. Can only be used by the host."},
            { name: "Status", value: "Can be used at any time by anyone to check the status of all tributes during a game."},
            { name: "Proceed", value: "To simulate the events of the next day. Can only be used by the host. Please **Don't** spam this command."},
            { name: "Help", value: "You are already here."},
            { name: "End", value: "Command used to end the game pre-maturely."},
            { name: '\u200B', value: '\u200B' },
            { name: "Patch Notes:", value: "```yaml\nThe bot is still in Alpha so it is just a working-skeleton.\nThe Status window needs to be reworked, for better readability.\nThe Daily events need to be tweaked/formatted, so they look more readable.\nDay-end Cannons for the deceased are still unavailable.\nA sorted post-game result page is still unavailable.\n```"},
            
        )
        .setTimestamp()
        .setFooter('May the strongest tribute survive');

        message.channel.send(playersEmbed);
    } 
    //START!!!!
    else if (command==='start')
    {
        if(game == 0)
        {
            host = message.author.username
            message.channel.send("IKUZO!!!")
            message.channel.send("All tributes, get ready by using the 'ikuzo' command.")
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
            message.channel.send("A game is already underway");
        }
    }
    //IKUZO!!!
    else if(command==='ikuzo' && game==1)
    {
        if(totalP==24)
        {
            message.reply(" take your seat, the hunger games are about to begin.");
            return;
        }
        message.reply("is ready!");
        players[totalP][0] = message.author.username;
        players[totalP][1] = "Alive";
        players[totalP][2] = "District ";
        players[totalP][3] = 0;
        totalP++;
        console.log(message.author.username);
    }
    //COMMENCE!!!
    else if(command==="commence" && game==1 && message.author.username === host)
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
        message.channel.send("Use the 'proceed' command to continue.")
        message.channel.send("Use the 'status' command to check the players' status.")
    }
    else if(command==="status" && game==2)
    {
        const playersEmbed = new Discord.MessageEmbed()
        .setColor('#ff5555')
        .addFields(
            { name: players[0][1]==="Dead"?"``~~"+players[0][0]+"``~~":players[0][0], value: players[0][1]+"\n"+players[0][2]+"\nKills: "+players[0][3], inline: true },
            { name: players[1][1]==="Dead"?"``~~"+players[1][0]+"``~~":players[1][0], value: players[1][1]+"\n"+players[1][2]+"\nKills: "+players[1][3], inline: true },
            { name: players[2][1]==="Dead"?"``~~"+players[2][0]+"``~~":players[2][0], value: players[2][1]+"\n"+players[2][2]+"\nKills: "+players[2][3], inline: true },
            { name: players[3][1]==="Dead"?"``~~"+players[3][0]+"``~~":players[3][0], value: players[3][1]+"\n"+players[3][2]+"\nKills: "+players[3][3], inline: true },
            { name: players[4][1]==="Dead"?"``~~"+players[4][0]+"``~~":players[4][0], value: players[4][1]+"\n"+players[4][2]+"\nKills: "+players[4][3], inline: true },
            { name: players[5][1]==="Dead"?"``~~"+players[5][0]+"``~~":players[5][0], value: players[5][1]+"\n"+players[5][2]+"\nKills: "+players[5][3], inline: true },
            { name: players[6][1]==="Dead"?"``~~"+players[6][0]+"``~~":players[6][0], value: players[6][1]+"\n"+players[6][2]+"\nKills: "+players[6][3], inline: true },
            { name: players[7][1]==="Dead"?"``~~"+players[7][0]+"``~~":players[7][0], value: players[7][1]+"\n"+players[7][2]+"\nKills: "+players[7][3], inline: true },
            { name: players[8][1]==="Dead"?"``~~"+players[8][0]+"``~~":players[8][0], value: players[8][1]+"\n"+players[8][2]+"\nKills: "+players[8][3], inline: true },
            { name: players[9][1]==="Dead"?"``~~"+players[9][0]+"``~~":players[9][0], value: players[9][1]+"\n"+players[9][2]+"\nKills: "+players[9][3], inline: true },
            { name: players[10][1]==="Dead"?"``~~"+players[10][0]+"``~~":players[10][0], value: players[10][1]+"\n"+players[10][2]+"\nKills: "+players[10][3], inline: true },
            { name: players[11][1]==="Dead"?"``~~"+players[11][0]+"``~~":players[11][0], value: players[11][1]+"\n"+players[11][2]+"\nKills: "+players[11][3], inline: true },
            { name: players[12][1]==="Dead"?"``~~"+players[12][0]+"``~~":players[12][0], value: players[12][1]+"\n"+players[12][2]+"\nKills: "+players[12][3], inline: true },
            { name: players[13][1]==="Dead"?"``~~"+players[13][0]+"``~~":players[13][0], value: players[13][1]+"\n"+players[13][2]+"\nKills: "+players[13][3], inline: true },
            { name: players[14][1]==="Dead"?"``~~"+players[14][0]+"``~~":players[14][0], value: players[14][1]+"\n"+players[14][2]+"\nKills: "+players[14][3], inline: true },
            { name: players[15][1]==="Dead"?"``~~"+players[15][0]+"``~~":players[15][0], value: players[15][1]+"\n"+players[15][2]+"\nKills: "+players[15][3], inline: true },
            { name: players[16][1]==="Dead"?"``~~"+players[16][0]+"``~~":players[16][0], value: players[16][1]+"\n"+players[16][2]+"\nKills: "+players[16][3], inline: true },
            { name: players[17][1]==="Dead"?"``~~"+players[17][0]+"``~~":players[17][0], value: players[17][1]+"\n"+players[17][2]+"\nKills: "+players[17][3], inline: true },
            { name: players[18][1]==="Dead"?"``~~"+players[18][0]+"``~~":players[18][0], value: players[18][1]+"\n"+players[18][2]+"\nKills: "+players[18][3], inline: true },
            { name: players[19][1]==="Dead"?"``~~"+players[19][0]+"``~~":players[19][0], value: players[19][1]+"\n"+players[19][2]+"\nKills: "+players[19][3], inline: true },
            { name: players[20][1]==="Dead"?"``~~"+players[20][0]+"``~~":players[20][0], value: players[20][1]+"\n"+players[20][2]+"\nKills: "+players[20][3], inline: true },
            { name: players[21][1]==="Dead"?"``~~"+players[21][0]+"``~~":players[21][0], value: players[21][1]+"\n"+players[21][2]+"\nKills: "+players[21][3], inline: true },
            { name: players[22][1]==="Dead"?"``~~"+players[22][0]+"``~~":players[22][0], value: players[22][1]+"\n"+players[22][2]+"\nKills: "+players[22][3], inline: true },
            { name: players[23][1]==="Dead"?"``~~"+players[23][0]+"``~~":players[23][0], value: players[23][1]+"\n"+players[23][2]+"\nKills: "+players[23][3], inline: true },
        )
        .setTimestamp()
        .setFooter('May the strongest tribute survive');
        message.channel.send(playersEmbed);
    }
    else if(command==="proceed" && game==2 && message.author.username === host)
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
                    if(k<0.3 && f==0)
                    message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"`"+d_lines[Math.floor(Math.random()*3)])
                    else if(k<0.4)
                    message.channel.send("`"+players[arr[i]][0]+"` attacks `"+players[arr[i+1]][0]+"`, but `"+players[arr[i+1]][0]+"` manages to escape")
                    else if(k<0.5 && f==0)
                    message.channel.send("`"+players[arr[i]][0]+"` defeats `"+players[arr[i+1]][0]+"` in a fight, but spares their life.")
                    else if(k<0.6)
                    message.channel.send("`"+players[arr[i]][0]+"` stalks `"+players[arr[i+1]][0]+"`")
                    else if(k<0.65)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` stabs `"+players[arr[i+1]][0]+"` while his back is turned")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.7)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` while he is resting")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.75)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` strangles `"+players[arr[i+1]][0]+"` with a rope")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.8)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` catches `"+players[arr[i+1]][0]+"` off guard and kills him")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.85)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` tracks down and kills `"+players[arr[i+1]][0]+"`")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.9)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` sets `"+players[arr[i+1]][0]+"` on fire with a molotov")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.95)
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
                    if(k<0.3 && f==0)
                    message.channel.send("`"+players[arr[i]][0]+"` and `"+players[arr[i+1]][0]+"`"+d_lines[Math.floor(Math.random()*3)])
                    else if(k<0.4)
                    message.channel.send("`"+players[arr[i]][0]+"` attacks `"+players[arr[i+1]][0]+"`, but `"+players[arr[i+1]][0]+"` manages to escape")
                    else if(k<0.5 && f==0)
                    message.channel.send("`"+players[arr[i]][0]+"` defeats `"+players[arr[i+1]][0]+"` in a fight, but spares their life.")
                    else if(k<0.6)
                    message.channel.send("`"+players[arr[i]][0]+"` stalks `"+players[arr[i+1]][0]+"`")
                    else if(k<0.65)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` stabs `"+players[arr[i+1]][0]+"` while his back is turned")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.7)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` kills `"+players[arr[i+1]][0]+"` while he is resting")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.75)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` strangles `"+players[arr[i+1]][0]+"` with a rope")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.8)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` catches `"+players[arr[i+1]][0]+"` off guard and kills him")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.85)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` tracks down and kills `"+players[arr[i+1]][0]+"`")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.9)
                    {
                        message.channel.send("`"+players[arr[i]][0]+"` sets `"+players[arr[i+1]][0]+"` on fire with a molotov")
                        players[arr[i]][3]++
                        players[arr[i+1]][1]="Dead"
                        arr.splice(i+1,1)
                        i--
                        console.log(arr)
                    }
                    else if(k<0.95)
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
});

client.login(token);
