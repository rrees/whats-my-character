const random = require('rrees-js-random');

const dndData = require('./data/dnd.js');

function dndGenerator() {
	const characterData =  {
		class: random.choose(dndData.classes),
	};
	return {
		data: characterData,
		description: `A ${characterData.class}`
	}
};

module.exports = {
	dnd: dndGenerator,
}