import { createValueSetter, ValueGetter, ValueSetter } from "./value-getter";
import { ValueOptions } from "./value-options";

export class ValueAccessor<T> extends ValueGetter<T> {
    get value(): T {
        return super.value;
    }

    set value(value: T) {
        this.#valueSetter.setValue(value);
    }

    #valueSetter: ValueSetter<T>;

    constructor(options?: Partial<ValueOptions>) {
        const valueSetter = createValueSetter<T>();

        super(valueSetter, options);

        this.#valueSetter = valueSetter;
    }
}
