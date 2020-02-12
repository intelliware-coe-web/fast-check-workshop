import * as test from 'tape';
import * as fc from 'fast-check';

test("should pass", (assert: test.Test) => {
  assert.plan(1);
  assert.doesNotThrow(() => 
    fc.assert(
      fc.property(
        fc.integer(), value => {
          return true;
        })
    ), 'Property based test should pass');
});