const random = require('rrees-js-random');

const pathfinderData = require('../data/pathfinder.js');
const personality = require('../data/personality');

function core() {
	const characterData =  {
		class: random.choose(pathfinderData.classes),
		personality: random.choose(personality.personalities),
		race: random.choose(pathfinderData.races),
	};
	return {
		data: characterData,
		description: `A ${characterData.personality} ${characterData.race} ${characterData.class}`
	}
};

module.exports = {
	core: core,
}