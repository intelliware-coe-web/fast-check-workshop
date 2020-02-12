import { NonEmpty, GreaterEqual, greaterEqualThan, isNotEmpty } from 'taghiro';

export type NonEmptyString = string & NonEmpty;

export type NaturalNumber = number & GreaterEqual<0>

export function nonEmptyString(value: string): NonEmptyString {
  if (isNotEmpty(value)) {
    return value as NonEmptyString;
  } else {
    throw new Error("Value must not be a non-empty string")
  }
}

export function naturalNumber(value: number): NaturalNumber {
  if (greaterEqualThan(value, 0)) {
    return value as NaturalNumber;
  } else {
    throw new Error("Value must be a natural number")
  }
}