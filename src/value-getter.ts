export class ValueGetter<T> {
    get hasValue(): boolean {
        return this.#hasValue;
    }

    get value(): T {
        if (this.#hasValue) return this.#value;

        throw new Error(`The value hasn't been setted.`);
    }

    #value!: T;
    #hasValue = false;

    constructor(valueSetter: ValueSetter<T>) {
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
