import { NonEmptyString, NaturalNumber } from "./generic-models";

export function total(listOfItems: Item[]): NaturalNumber {
  return 0;
}

export interface Item {
  name: NonEmptyString;
  price: NaturalNumber;
  specialPrice?: SpecialPrice;
}

export interface SpecialPrice {
  rebateQuantity: NaturalNumber;
  rebateTotal: NaturalNumber;
}
