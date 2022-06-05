const { invite } = require('../../config.json');

module.exports = {
    name: 'invite',
    description: 'Envoi un lien d\'invitation pour le serveur du bot',
    type: 'Utils',
    aliases: ['link'],
    cooldown: 0,
    execute(message) {
        message.channel.send('Tu savais que tu peux rejoindre notre serveur quand tu veux ?\nTu as juste à cliquer sur le lien en dessous');
        message.channel.send(invite);
    }
}