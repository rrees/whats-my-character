const charGenerators = require('./index');

const genType = process.argv[2];

switch (genType) {
	case 'dnd': 
		console.log(charGenerators.dnd().description);
		break;
	case 'pathfinder':
		console.log(charGenerators.pathfinder().description);
		break;
}
