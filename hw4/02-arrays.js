let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);        //pushing data into an array
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  for (let i = 0; i < result.length; i++) {
    if (result[i] == item) {
      result.splice(i, 1);  // remove at a specific index with only one item. 
      break;                // end the loop since removing the 1st occurrence required.
    }
  }
  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  let item = result[index];
  if (item != undefined) { // not underfined, we found it
    deleteItem(item);      // remove the obtain item
    return item;           
  }
  return null;            // null when we could not find any item matching
                          // at a specific index to delete the obtained item
};


const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  return result.join(", ");
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
