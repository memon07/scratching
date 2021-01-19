let array = [9,8,1,5,3]

function insertionSort(array) {
	for(let i = 0; i< array.length;i++){
	    let current = array[i];
	    while(i > 0 && current < array[i -1 ]){
	      array[i] = array[i -1]
	      i = i - 1;
	    }
	    array[i] = current
	  }
  return array
}


insertionSort(array)
console.log(array);
