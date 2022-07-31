# value-accessor

![test: passed](https://raw.githubusercontent.com/PavelDymkov/value-accessor/main/badges/test.svg)
![license: MIT](https://raw.githubusercontent.com/PavelDymkov/value-accessor/main/badges/license.svg)

## Table of Contents

<!-- toc -->

-   [Usage](#usage)
    -   [Common an Value accessor (public get; public set;)](#common-an-value-accessor-public-get-public-set)
    -   [A Value getter (public get; private set;)](#a-value-getter-public-get-private-set)
    -   [Options](#options)
        -   [strict (default true)](#strict-default-true)
    -   [Change a default options (global)](#change-a-default-options-global)

<!-- tocstop -->

## Usage

### A Value accessor (public get; public set;)

```ts
import { ValueAccessor } from "value-accessor";

const store = new ValueAccessor<number>();

if (store.hasValue) console.log(store.value);
// nothing

store.value = 42;

if (store.hasValue) console.log(store.value);
// log: 42
```

### A Value getter (public get; private set;)

```ts
import { createValueSetter, ValueGetter } from "value-accessor";

const valueSetter = createValueSetter<number>();

export const store = new ValueGetter(valueSetter);

export function setValue(value: any): void {
    if (typeof value === "number") {
        console.log(value);

        valueSetter.setValue(value);
    }
}
```

### Options

#### strict (default true)

```ts
import { ValueAccessor } from "value-accessor";

const store = new ValueAccessor<number>();

store.value; // throw an error
```

```ts
import { ValueAccessor } from "value-accessor";

const store = new ValueAccessor<number>({ strict: false });

store.value; // returns undefined
```

### Change a default options (global)

```ts
import { setDefaultOptions } from "value-accessor";

setDefaultOptions({ strict: false });
```
