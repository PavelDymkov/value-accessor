import { not } from "logical-not";

import { createValueOptions, ValueOptions } from "./value-options";

export class ValueGetter<T> {
    get hasValue(): boolean {
        return this.#hasValue;
    }

    get value(): T {
        if (this.#options.strict && not(this.#hasValue))
            throw new Error(`The value hasn't been setted.`);

        return this.#value;
    }

    #value!: T;
    #hasValue = false;
    #options: ValueOptions;

    constructor(valueSetter: ValueSetter<T>, options?: Partial<ValueOptions>) {
        this.#options = createValueOptions(options);

        valueSetter.setValue = (value: T) => {
            this.#value = value;
            this.#hasValue = true;
        };
    }

    clear(): void {
        this.#value = void 0 as any;
        this.#hasValue = false;
    }
}

export interface ValueSetter<T> {
    setValue(value: T): void;
}

export function createValueSetter<T>(): ValueSetter<T> {
    return { setValue() {} };
}
