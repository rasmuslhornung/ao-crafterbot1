const discord = require('discord.js');

var client = new discord.Client();
const fs = require("fs");
const config = require("./config.json")
const token = "Njg2NTE4MDM2ODk4OTA2MTIy.XmYX7g.0yvvjQpuvc4K5p-Wwvkx4qol9l8";



// Rich embed for return !v who command




client.on("ready", () => {
	console.log("ready.");

	client.msgs = require("./msgs.json");
	data = require("./data.json");


});


const prefix = "v!"
client.on("message", (message) => {


	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();





	if (message.author.bot) return;

	if (message.content.startsWith(prefix + " hello")) {

		message.reply("Hello!");
		message.content.toLowerCase.startsWith
	}
	if(message.content.startsWith(prefix + " craft")) {
		let editedmessage = message.content.slice(prefix.length + 1);
		let skill = message.content.slice(9);
	
		if(!client.msgs[skill]) {
			client.msgs[skill] = [message.author.id]
		} else {
			if(!client.msgs[skill].includes(message.author.id)) client.msgs[skill].push(message.author.id)

			message.reply("You can now " + editedmessage)
		}
	}


	/* if (message.content.startsWith(prefix + " craft")) {
		editedmessage = message.content.slice(prefix.length + 1);
		skill = message.content.slice(9);

		if (!client.msgs[skill]) client.msgs[skill] = [];
		client.msgs[skill].push(message.author.id);

		message.reply("You can now " + editedmessage)
	} */
	fs.writeFile("./msgs.json", JSON.stringify(client.msgs, null, 4), err => {
		if (err) throw err;

		{

			return console.log(err);
		}

		

	})

	if (message.content.startsWith (prefix + " who")) { 
		let filter = message.content.slice(prefix.length + 5) 
		let item = message.content.slice(7) 
		let _skill = client.msgs[filter]
		if(!_skill) return message.reply('I cant find that skill')
		const whoEmbed = new discord.MessageEmbed() 
			.setColor('#0099ff') 
			.setTitle('These players can craft ' + item) 
			.setAuthor('VINDICTIVE CRAFTER BOT', 'https://i.imgur.com/uz8xDax.jpg') 
			.setDescription(`${_skill.map(user => `<@${user}>`).join('\n')}`) 
			.setFooter('This bot was created by BigTibbies'); 
		message.channel.send(whoEmbed); 




	
	
		 
	 }});


	 client.login("Njg2NTE4MDM2ODk4OTA2MTIy.XmbfNg.nDRwIWtHXuDmqJno9Mqbfqq3_70");
// client.login(process.env.BOT_TOKEN);
