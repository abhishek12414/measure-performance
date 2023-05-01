# Measure Performance for a function
This is a helper function to use anywhere to calculate the execution time of a function.

### how to use
```js
// example to use

const sum = (a,b) => a + b;

const result = measurePerformance(sum)(4, 5)
```