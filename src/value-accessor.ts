import { createValueSetter, ValueGetter, ValueSetter } from "./value-getter";

export class ValueAccessor<T> extends ValueGetter<T> {
    get value(): T {
        return super.value;
    }

    set value(value: T) {
        this.#valueSetter.setValue(value);
    }

    #valueSetter: ValueSetter<T>;

    constructor() {
        const valueSetter = createValueSetter<T>();

        super(valueSetter);

        this.#valueSetter = valueSetter;
    }
}
