export class ValueAccessor<T> {
    get hasValue(): boolean {
        return this.#hasValue;
    }

    get value(): T {
        if (this.#hasValue) return this.#value;

        throw new Error(`The value hasn't been setted.`);
    }

    set value(value: T) {
        this.#value = value;
        this.#hasValue = true;
    }

    #value!: T;
    #hasValue = false;

    clear(): void {
        this.#value = void 0 as any;
        this.#hasValue = false;
    }
}
