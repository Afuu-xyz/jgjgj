const Discord = require('discord.js');
const { color } = require('../../config.json');

module.exports = {
    name: 'mbn',
    type: 'Utils',
    description: 'Te ramène vers le site de Mon Bureau Numérique', 
    cooldown: 0,
    execute(message) {
        const Embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('Clique ici pour être rediriger vers MBN')
        .setURL('https://monbureaunumerique.com')
        .setTimestamp();

        message.channel.send(Embed);
    }

}