


export function getMergeSortAnimations(array) {
  const animations=[];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
 
  return [animations,array];
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  //const auxiliaryArray = array.slice();
  bblSort(array, animations)
  return animations;
}

// Bubble sort Implementation using Javascript


// Creating the bblSort function
function bblSort(array,animations){
	
  for(var i = 0; i < array.length; i++){
    
  // Last i elements are already in place
  for(var j = 0; j < ( array.length - i -1 ); j++){
    
    // Checking if the item at present iteration
    // is greater than the next iteration
    //animations.push([array[j],array[j+1]]);
    animations.push([j,j+1]);
    animations.push([j,j+1]);

    //animations.push([j,j+1]);

    if(array[j] > array[j+1]){
    // If the condition is true then swap them
    
    var temp = array[j]
    array[j] = array[j + 1]
    array[j+1] = temp
    //animations.push([j,j+1]);
    animations.push([j,array[j]]);
    animations.push([j+1,array[j+1]]);


    }
    else{
      animations.push([j,array[j]]);
    animations.push([j+1,array[j+1]]);
    }
  }
  }
  // Print the sorted array
  console.log(array);
  }
  
  
  // This is our unsorted array
  //var arr = [234, 43, 55, 63, 5, 6, 235, 547];
  
  
  // Now pass this array to the bblSort() function
  
  
export function getInsertionSortAnimations(array) {
  const animations=[];
  if (array.length <= 1) return array;
  //const auxiliaryArray = array.slice();
  insertionSort(array, animations);
 
  return animations;
}
function insertionSort(inputArr,animations) {
  let n = inputArr.length;
      //animations.push([0,inputArr[0]]);
      for (let i = 1; i < n; i++) {

          // Choosing the first element in our unsorted subarray
          animations.push([i,inputArr[i]]);
          let current = inputArr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < inputArr[j])) {
            animations.push([j,inputArr[j],j+1,inputArr[j+1]]);

              inputArr[j+1] = inputArr[j];
              j--;
          }
          inputArr[j+1] = current;
          animations.push([j+1,inputArr[j+1]]);

      }
  return inputArr;
  
}

