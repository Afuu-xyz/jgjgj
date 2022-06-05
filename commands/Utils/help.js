const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'Liste de toutes les commandes',
    type: 'Utils',
	aliases: ['commandes'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Ici la liste de mes commandes');
	data.push(commands.map(command => command.name).join(', '));
	data.push(`\nTu peux envoyer \`${prefix}help [command name]\` pour avoir des infos sur la commande`);

	return message.author.send(data, { split: true })
		.then(() => {
			if (message.channel.type === 'dm') return;
			message.reply('Je t\'ai envoyer toutes mes commandes');
		})
		.catch(error => {
			console.error(`Je ne peux pas envoyer de DM à ${message.author.tag}.\n`, error);
			message.reply('Je vois que je ne peux pas t\'envoyer un DM ');
		});
		}

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
	        return message.reply('Ce n\'est pas une commande');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
        if (command.type) data.push(`**Type:** ${command.type}`);

        data.push(`**Cooldown:** ${command.cooldown} seconde(s)`);

        message.channel.send(data, { split: true });
	},
};