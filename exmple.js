const { ValueAccessor } = require("./package/value-accessor");

const store = new ValueAccessor();

debugger;
store.value = 42;

console.log(store.hasValue);
console.log(store.value);
