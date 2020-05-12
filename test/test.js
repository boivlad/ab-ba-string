const { performance } = require('perf_hooks');
const assert = require('assert');
const { subString } = require('../src/index');
const { first, second, third } = require('./strings');
describe('sub-string AB-BA', function() {
  const times = 100000;
  it('Test case First should return true', function() {
    let numbers = [];
    for (let i = 0; i < times; i++) {
      let time = performance.now();
      subString(first);
      numbers.push(performance.now() - time);
    }
    console.log('Median time', median(numbers));
    let result = subString(first);
    assert.equal(result, true);
  });
  it('Test case Second should return false', function() {
    let numbers = [];
    for (let i = 0; i < times; i++) {
      let time = performance.now();
      subString(second);
      numbers.push(performance.now() - time);
    }
    console.log('Median time', median(numbers));
    const result = subString(second);
    assert.equal(result, false);
  });
  it('Test case Third should return true', function() {
    let numbers = [];
    for (let i = 0; i < times; i++) {
      let time = performance.now();
      subString(third);
      numbers.push(performance.now() - time);
    }
    console.log('Median time', median(numbers));
    const result = subString(third);
    assert.equal(result, true);
  });
});
function median(sequence) {
  sequence.sort();  // note that direction doesn't matter
  return sequence[Math.ceil(sequence.length / 2)];
}
