const random = require('rrees-js-random');

const dndData = require('../data/dnd.js');
const personality = require('../data/personality');

function dndGenerator() {
	const characterData =  {
		class: random.choose(dndData.classes),
		personality: random.choose(personality.personalities),
		race: random.choose(dndData.races),
	};
	return {
		data: characterData,
		description: `A ${characterData.personality} ${characterData.race} ${characterData.class}`
	}
};

module.exports = {
	generator: dndGenerator,
}