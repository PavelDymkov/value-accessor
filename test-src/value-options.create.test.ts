import { createValueOptions, ValueOptions } from "../package/value-options";

const defaultOptions: ValueOptions = {
    strict: true,
};

describe("value-options: createValueOptions", () => {
    test("test-01", () => {
        expect(createValueOptions()).toEqual(defaultOptions);
    });

    test("test-02", () => {
        expect(createValueOptions({})).toEqual(defaultOptions);
    });

    test("test-03", () => {
        const strict = false;
        const options = createValueOptions({ strict });

        expect(options.strict).toBe(strict);
    });
});
