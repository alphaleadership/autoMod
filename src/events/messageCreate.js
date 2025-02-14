const emojis = require('./../utils/emojis');

module.exports = {
	name: 'messageCreate',
	once: false,

	execute: async (message) => {

		/* Suggestion Channel */
		if (message.channel.id == '821153396328366080') {
			await message.react(emojis.yes);
			await message.react(emojis.no);
		}

		/* Annoucement Channel */
		if (message.channel.id == '821153011890913310') {
			await message.react('👍');
			await message.react(emojis.tada);
		}

		/* Chain-message Channel */
		if (message.channel.id == '821162869709864961') {
			if (!message.content == emojis.agh) message.delete();
		}


	},
};
