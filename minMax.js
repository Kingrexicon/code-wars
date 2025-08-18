// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}


let min = minMax([1,4,75,34])
console.log(min)

// The spread operator (...) unpacks the array elements as individual arguments to Math.max().