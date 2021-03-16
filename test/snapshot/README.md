## Snapshot Testing Guide

Using `testComponent` requires three props:

- The component under test
- The component name (AComponent)
- A map of formatted prop map

### Prop Map

```js
const propMap = {
  [propType]: {
    [propName]: [...listOfValidValues],
  },
};
```
