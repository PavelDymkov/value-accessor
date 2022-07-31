let defaultOptions: ValueOptions = {
    strict: true,
};

export interface ValueOptions {
    strict: boolean;
}

export function createValueOptions(
    source?: Partial<ValueOptions>,
): ValueOptions {
    return {
        strict: source?.strict ?? defaultOptions.strict,
    };
}

export function setDefaultOptions(options: Partial<ValueOptions>): void {
    defaultOptions = createValueOptions(options);
}
