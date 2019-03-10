const random = require('rrees-js-random');

const dndData = require('../data/dnd.js');
const personality = require('../data/personality');

function dndGenerator() {
	const characterData =  {
		class: random.choose(dndData.classes),
		personality: random.choose(personality.personalities),
	};
	return {
		data: characterData,
		description: `A ${characterData.personality} ${characterData.class}`
	}
};

module.exports = {
	generator: dndGenerator,
}