// find duplicate elements in array 

function findUniqueDuplicates(arr) {
    let observed = {};
    let duplicates = new Set(); // Here we are using Set

    for (let i = 0; i < arr.length; i++) {
        if (observed[arr[i]]) {
            duplicates.add(arr[i]); // Once added to Set, it won’t be added again
        } else {
            observed[arr[i]] = true;
        }
    }
    return Array.from(duplicates); // Converting Set back into an array
}

console.log(findUniqueDuplicates([10, 10, 10, 20, 20, 30])); 
// Output will be: [10, 20] 
