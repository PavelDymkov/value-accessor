import { ValueAccessor } from "../package/value-accessor";

const value = 42;

describe("value-accessor", () => {
    test("test-01", () => {
        const store = new ValueAccessor<number>();

        expect(store.hasValue).toBe(false);
    });

    test("test-02", () => {
        const store = new ValueAccessor<number>();

        store.value = value;

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });

    test("test-03", () => {
        const store = new ValueAccessor<number>();

        store.value = 1;
        store.value = value;

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });

    test("test-04", () => {
        const store = new ValueAccessor<number>();

        store.value = value;

        store.clear();

        expect(store.hasValue).toBe(false);
    });

    test("test-05", () => {
        const store = new ValueAccessor<number>();

        store.value = 1;

        store.clear();

        store.value = value;

        expect(store.hasValue).toBe(true);
        expect(store.value).toBe(value);
    });
});
