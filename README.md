# value-accessor

![test: passed](https://raw.githubusercontent.com/PavelDymkov/value-accessor/main/badges/test.svg)
![license: MIT](https://raw.githubusercontent.com/PavelDymkov/value-accessor/main/badges/license.svg)

## Table of Contents

<!-- toc -->

- [Usage](#usage)
  * [A Value accessor](#a-value-accessor)

<!-- tocstop -->

## Usage

### A Value accessor

```ts
import { ValueAccessor } from "value-accessor";

const store = new ValueAccessor<number>();

if (store.hasValue) console.log(store.value);
// nothing

store.value = 42;

if (store.hasValue) console.log(store.value);
// log: 42
```
