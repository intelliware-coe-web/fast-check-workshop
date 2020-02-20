import { NaturalNumber, naturalNumber, PositiveNumber } from "./generic-models";

/*
 Given a list of items, calculates the total price of all the items in the list. Special Prices provide
 the rebate total for the quantity and can be applied multiple times.

  Given ["A", "A", "A"], when the Special Price for "A" is { rebateQuantity: 3, rebateTotal: 130 },
    then the total is 130.

  Given ["A", "A", "A"], when the Unit Price is 50 and there is no special price, 
    then the total is 150.
 */
export function total(purchaseList: Item[], priceCatalog: PriceCatalog): NaturalNumber {
  return naturalNumber(0);
}

export type PriceCatalog = {
  [item: string]: Price;
};

export type Item = keyof PriceCatalog;

export type Price = {
  unitPrice: NaturalNumber;
  specialPrice?: SpecialPrice;
}

export type SpecialPrice = {
  rebateQuantity: PositiveNumber;
  rebateTotal: NaturalNumber;
}