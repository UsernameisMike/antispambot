const discord = require("discord.js")
const client = new discord.Client();
const config = require("./config.json")
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3,
	kickThreshold: 7,
	banThreshold: 7,
	muteThreshold: 5, 
	maxInterval: 2000, 
	warnMessage: '{@user}, Prosím přestaň spamovat.', 
	kickMessage: '**{user_tag}** Byl vykopnut za spamování.',
	banMessage: '**{user_tag}** Byl zabanován za spamování.',
	muteMessage: '**{user_tag}** Byl umlčen za spamování.',
	maxDuplicatesWarning: 7,
	maxDuplicatesKick: 10,
	maxDuplicatesBan: 12,
	maxDuplicatesMute: 9,
	exemptPermissions: [ 'ADMINISTRATOR'],
	ignoreBots: true,
	verbose: true,
	ignoredUsers: [],
});

client.on('ready', () => console.log(`Přihlášen za ${client.user.tag}.\nTvůj bot je připravený!`));

client.on('message', (message) => antiSpam.message(message));

client.login(config.token);