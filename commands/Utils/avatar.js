module.exports = {
	name: 'avatar',
	description: 'Reçois l\'URL de l\'avatar de qqn ',
    usage: '<username>',
    type: 'Utils',
    cooldown: 3,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Ton avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `L\'avatar de ${user.username}: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};