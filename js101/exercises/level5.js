function lvl5exercise1 () {
  // Push the string "hello" into the array and return it.
  var arr = [1, 'adam']
arr.push("hello");
return arr
} 

function lvl5exercise2 () {
  // Remove the last element from the array and return it
  var arr = [1, 'adam']
arr.pop()
return arr
}

function lvl5exercise3 () {
  // Return the length of the array
  var arr = [1, 'adam']
 return arr.length;
}

function lvl5exercise4 () {
  // Return the index of "adam" in the array
  var arr = [1, 'ant', 'adam']
return arr.indexOf('adam');
}

console.log(lvl5exercise1())
console.log(lvl5exercise2()) 
console.log(lvl5exercise3())
console.log(lvl5exercise4())
