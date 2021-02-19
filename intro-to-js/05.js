arr = [1, 2, 3, 4, 50];
console.log(arr.length);
arr.map(function(item, index, array){console.log(array[index]); return item;})
