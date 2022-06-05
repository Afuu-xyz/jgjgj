module.exports = {
	name: 'clear',
	aliases: ['cl', 'delete'],
    ownerOnly: true,
    permissions: ['MANAGE_MESSAGES'],
    type: 'Utils',
	description: 'Effacer des messages. Pas plus que 100',
	async execute(message, args) {
		if(!args[0]) return message.reply("S'il vous plaît, mettez le nombre de message que vous voulez supprimer !");
        if(isNaN(args[0])) return message.reply("Mettez un vrai nombre !");

        if(args[0] > 100) return message.reply("Vous ne pouvez pas supprimer plus de \`100\` messages");
        if(args[0] < 1) return message.reply("Vous devez supprimer au moins \`1\` message");

		await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
			message.channel.bulkDelete(messages);
		});
	},
};