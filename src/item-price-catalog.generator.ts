import * as fc from 'fast-check';
import { Price, PriceCatalog } from './total';
import { Arbitrary } from 'fast-check';
import { NaturalNumber } from './generic-models';

export type ItemPriceCatalog = [PriceCatalog, ItemPrice[]];

export function itemPriceCatalogGen(): Arbitrary<ItemPriceCatalog> {
  return fc.tuple(priceCatalogGen(), fc.nat(30))
    .chain(([catalog, itemCount]) => fc.tuple(
      fc.constant(catalog), 
      fc.array(randomItemPrice(catalog), itemCount))
    );
}

function priceCatalogGen(): Arbitrary<PriceCatalog> {
  return fc.object({maxDepth: 0, maxKeys: 15, key: fc.string(1, 255), values: [priceGen()]})
    .filter(catalog => Object.keys(catalog).length > 0) as Arbitrary<PriceCatalog>;
}

function priceGen(): Arbitrary<Price> {
  return fc.nat(1000).map(unitPrice => ({ unitPrice } as Price));
}

type ItemPrice = { name: string, price: NaturalNumber };

function randomItemPrice(catalog: PriceCatalog): Arbitrary<ItemPrice> {
  return randomKey(catalog)
    .map(itemName => ({ 
      name: itemName, 
      price: catalog[itemName].unitPrice
    }));
}

function randomKey (json: any): Arbitrary<string> {
  return fc.constantFrom(...Object.keys(json));
}
