const v8 = require('v8');
console.log("\nv8 Heap Statistics\n")
console.log(v8.getHeapStatistics());
console.log("\nv8 Heap Space Statistics\n")
console.log(v8.getHeapSpaceStatistics());