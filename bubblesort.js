var unsortedarray = [];

function populatearray(lengthofarray) {
    for (i = 1; i <= lengthofarray ; i++) {
        unsortedarray.push((Math.floor((Math.random() * (i * 1000)))));
    }
}

populatearray(11)

console.log(unsortedarray)

function BubbleSort(array) {
    for (j = 1; j <= array.length; j++) {
        for (i = 0; i < array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log(array)
}

BubbleSort(unsortedarray)