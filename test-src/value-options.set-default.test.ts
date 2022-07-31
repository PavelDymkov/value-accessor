import { setDefaultOptions, ValueAccessor } from "../package/index";

describe("value-options: setDefaultOptions", () => {
    test("test-01", () => {
        setDefaultOptions({ strict: false });

        const test = () => {
            const store = new ValueAccessor<unknown>();

            store.value;
        };

        expect(test).not.toThrow();
    });
});
