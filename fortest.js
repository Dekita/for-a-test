/**
* groupArrayElements(array, n)
* @param array {Array}
* @param n {Number} 
* @return An array containing smaller array groups.
* Groups array elements into smaller arrays of upto n elements. 
* Last element may contain less than n elements.
* Example: 
* groupArrayElements([1,2,3,4], 2)
* => [[1,2],[3,4]]
* groupArrayElements([1,2,3,4], 3)
* => [[1,2,3],[4]]
*/
function groupArrayElements(array, n){
    // create array to contain array element groups 
    let return_object = [];
    // slice current array to clone it ~ dont want to modify origonal
    let temp_array = array.slice();
    // while we have elements in the array...
    while(temp_array[0]){
        // ... push as many as n to return object
        return_object.push(temp_array.splice(0,n));
    }
    // return the new array containing array groups
    return return_object;
}

/**
* groupArrayElementsToObject(array, n)
* same as groupArrayElements(array, n)
* with the difference that an object is returned, not an array.
* Example: 
* groupArrayElementsToObject([1,2,3,4], 2)
* => {0:[1,2], 1:[3,4], length: 2}
* groupArrayElementsToObject([1,2,3,4], 3)
* => {0:[1,2,3], 1:[4], length: 2}
*/
function groupArrayElementsToObject(array, n){
    // store temp index for object
    let new_object_id = 0;
    // create object to contain array element groups
    let return_object = {};
    // slice current array to clone it ~ same as before
    let temp_array = array.slice();
    // while we have elements in the array...
    while(temp_array[0]) {
        // set the return object with new_object_id to
        // contain the array element group, then increase new_object_id.
        return_object[new_object_id++] = temp_array.splice(0,n);
    }
    // store the length like we do with arrays (length 1 more than last element index)
    return_object.length = new_object_id;
    // return the new object containing array groups
    return return_object;
}
