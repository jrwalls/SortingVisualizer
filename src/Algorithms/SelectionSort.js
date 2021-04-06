export function selectionSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    array = auxillaryArray;
    const arrayLength = auxillaryArray.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        //find smallest element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < arrayLength; j++) {
            animations.push(["firstComparison", j, minIndex]);
            animations.push(["secondComparison", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);
        // Swap the minimum element with the first element
        let temp = auxillaryArray[minIndex];
        auxillaryArray[minIndex] = auxillaryArray[i];
        auxillaryArray[i] = temp;
    }
    return [animations, array];
}