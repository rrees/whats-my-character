
const charGenerators = require('./index');

 test('result has data', () => {
 	const data = charGenerators.dnd().data;
 	expect(data).toHaveProperty('class');
 	expect(data).toHaveProperty('personality');
 	expect(data).toHaveProperty('race');
 })