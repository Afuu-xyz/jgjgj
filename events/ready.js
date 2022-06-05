module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}, in ${client.guilds.cache.size} server(s) ! `);
		client.user.setPresence({ activity: { name: 'with ur mum | ,help' }, status: 'idle' });
	},
};