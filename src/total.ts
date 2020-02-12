import { NonEmptyString, NaturalNumber, naturalNumber } from "./generic-models";

export function total(listOfItems: Item[]): NaturalNumber {
  return naturalNumber(0);
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