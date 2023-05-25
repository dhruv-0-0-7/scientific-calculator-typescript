import { KEYS, SYMBOL_TABLE } from "./constants";

export type FakeThis = {
    getAttribute: () => string,
    getAttributeNames: () => string[]
};

export type OperatorsKeys = keyof typeof KEYS.operators
export type OperationsKeys = keyof typeof KEYS.operations
export type SymbolKeys = keyof typeof SYMBOL_TABLE