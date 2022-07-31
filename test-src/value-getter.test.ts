import { createValueSetter, ValueGetter } from "../package/value-getter";

const value = 42;

describe("value-getter", () => {
    test("test-01", () => {
        const store = new ValueGetter<number>(createValueSetter<number>());

        expect(store.hasValue).toBe(false);
    });

    test("test-02", () => {
        const valueSetter = createValueSetter<number>();
        const store = new ValueGetter<number>(valueSetter);

        valueSetter.setValue(value);

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });

    test("test-03", () => {
        const valueSetter = createValueSetter<number>();
        const store = new ValueGetter<number>(valueSetter);

        valueSetter.setValue(1);
        valueSetter.setValue(value);

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });

    test("test-04", () => {
        const valueSetter = createValueSetter<number>();
        const store = new ValueGetter<number>(valueSetter);

        valueSetter.setValue(value);

        store.clear();

        expect(store.hasValue).toBe(false);
    });

    test("test-05", () => {
        const valueSetter = createValueSetter<number>();
        const store = new ValueGetter<number>(valueSetter);

        valueSetter.setValue(1);

        store.clear();

        valueSetter.setValue(value);

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });
});
