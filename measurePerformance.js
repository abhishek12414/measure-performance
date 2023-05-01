const ENABLE_LOG = true;

function measurePerformance(func) {
  return function () {
    if (process.env.NODE_ENV === 'development' && ENABLE_LOG) {
      const start = performance.now(); // start the timer
      const result = func.apply(this, arguments); // call the original function
      const end = performance.now(); // stop the timer

      // console.log(`Execution time of ${func.name}: ${end - start} milliseconds`);
      console.log(`Execution time of ${func.name}: ${(end - start) / 1000} seconds`);

      return result; // return the result of the original function
    } else {
      return func.apply(this, arguments); // call the original function
    }
  };
}

export default measurePerformance;

/*
example to use
const sum = (a,b) => a + b;
const result = measurePerformance(sum)(4, 5)
*/
