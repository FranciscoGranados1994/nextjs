/* Types for use validation */

export type KeyType = string;

export interface stateDataInterface {
  value: string;
  error: string;
}

interface validatorInterface {
  regexp: RegExp;
  error: string;
}

export interface validationInterface {
  required: boolean;
  validator: validatorInterface;
}
