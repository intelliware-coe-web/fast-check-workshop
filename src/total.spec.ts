import * as test from 'tape';
import * as fc from 'fast-check';
import { total } from './total';
import { itemPriceCatalogGen } from './item-price-catalog.generator';

test("Given regular purchases", (assert: test.Test) => {
  assert.plan(1);
  assert.doesNotThrow(() => 
    fc.assert(
      fc.property(
        itemPriceCatalogGen(), ([priceCatalog, purchases])=> {
          const purchaseList = purchases.map(item => item.name);
          const expected = purchases.map(item => item.price).reduce(sum, 0);
          return total(priceCatalog, purchaseList) === expected;
        })
    ), 'should calculate the total from the sum of the prices of the purchases');
});


function sum(a: number, b: number): number {
  return a + b;
}
