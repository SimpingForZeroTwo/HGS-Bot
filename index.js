const {prefix,s_d_lines,invite,s_lines_day,s_lines_night,d_lines,weapons,supplies,characters} = require('./config.json')
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

let game = 0;
let players = new Array(24);
let totalP = 0;
let day = 0;
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var host = ""
token = process.env.token

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

    if (!client.commands.has(command)) return;

	try 
    {
		client.commands.get(command).execute(message, args, game, players, totalP, day, arr, host);
	} 
    catch (error) 
    {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
