const random = require('rrees-js-random');

const dndData = require('../data/dnd.js');
const personality = require('../data/personality');
const motivations = require('../data/motivations');

function dndGenerator() {
	const characterData =  {
		class: random.choose(dndData.classes),
		personality: random.choose(personality.personalities),
		race: random.choose(dndData.races),
		motivation: random.choose(motivations.motivations),
	};
	return {
		data: characterData,
		description: `A ${characterData.personality} ${characterData.race} ${characterData.class} who is ${characterData.motivation}`
	}
};

module.exports = {
	generator: dndGenerator,
}