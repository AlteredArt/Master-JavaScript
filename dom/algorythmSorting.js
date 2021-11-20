console.log('sorting')
//bubble sorting works by comparing the first and second index 
//if the first index is larger, it swaps it with the second and moves on.
//not very efficient time  O(n^2)   space O(n1)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([2, 1, 56, 43, 7, 8]))


//selection sort still O (n^2)
//starts by finding the smallest item and replacing it for the first
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

//insertion sort can sometimes be O(N)
//starts with comparing the first 2 indexes, then takes the next index and compares it to those two
function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        for (j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                var temp = array.splice(i, 1);
                array.splice(j, 0, temp[0])
            }
        }
    }
    return array
}

console.log(insertionSort([4, 6, 12, 34, 25, 3, 2]))


//merge Sort O(N log N)
//using recursion we divide and conquer
//divide the list in half and so on
//then compare the pairs that were divided
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}
console.log(mergeSort([2, 56, 43, 25, 12, 3, 4]))

//quick sort best case O(N log N) worst case O(N^2) space O(log N)
//picks a pivot point and compares the indexes around it
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    const len = array.length;
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);


// heap sort in python
// def max_heapify(A, heap_size, i):
// left = 2 * i + 1
// right = 2 * i + 2
// largest = i
// if left < heap_size and A[left] > A[largest]:
// largest = left
// if right < heap_size and A[right] > A[largest]:
// largest = right
// if largest != i:
//     A[i], A[largest] = A[largest], A[i]
// max_heapify(A, heap_size, largest)

// def build_heap(A):
// heap_size = len(A)
// for i in range((heap_size / 2), -1, -1):
//     max_heapify(A, heap_size, i)

// def heapsort(A):
// heap_size = len(A)
// build_heap(A)
//     // #print A #uncomment this print to see the heap it builds
// for i in range(heap_size - 1, 0, -1):
//     A[0], A[i] = A[i], A[0]
// heap_size -= 1
// max_heapify(A, heap_size, 0)

// A = [2, 8, 1, 4, 14, 7, 16, 10, 9, 3]
// console.log(heapsort(A))

