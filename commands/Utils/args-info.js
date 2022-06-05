module.exports = {
	name: 'args-info',
	description: 'Infos à propos des infos écrites',
    args: true,
	cooldown: 3,
	type: 'Utils',
	usage: '<user> <role>',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nLongueur de l\'arguments: ${args.length}`);
	},
};