import { GreaterEqual, greaterEqualThan } from 'taghiro';

export type NaturalNumber = number & GreaterEqual<0>

export function naturalNumber(value: number): NaturalNumber {
  if (greaterEqualThan(value, 0)) {
    return value as NaturalNumber;
  } else {
    throw new Error("Value must be a natural number");
  }
}

export type PositiveNumber = number & GreaterEqual<1>

export function positiveNumber(value: number): PositiveNumber {
  if (greaterEqualThan(value, 1)) {
    return value as PositiveNumber;
  } else {
    throw new Error("Value must be greater than 1");
  }
}