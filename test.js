
const charGenerators = require('./index');

 test('result has data', () => {
 	expect(charGenerators.dnd()).toHaveProperty('data');
 })