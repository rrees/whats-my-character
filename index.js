const dndGenerators = require('./generators/dnd-generator');
const pathfinder = require('./generators/pathfinder');

module.exports = {
	dnd: dndGenerators.generator,
	pathfinder: pathfinder.core,
}