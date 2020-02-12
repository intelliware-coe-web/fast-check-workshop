export type NonEmptyString = string;

export function nonEmptyString(input: string): NonEmptyString {
  if (input && input.length) {
    return input as NonEmptyString;
  } else {
    throw new Error("Non-empty string cannot be empty");
  }
}

export type NaturalNumber = number;

export function naturalNumber(value: number): NaturalNumber {
  if (Number(value) === value && value % 1 === 0 && value >= 0) {
    return value as NaturalNumber;
  } else {
    throw new Error("Value must be a natural number")
  }
}