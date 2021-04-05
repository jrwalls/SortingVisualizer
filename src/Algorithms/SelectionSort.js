export function selectionSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    array = auxillaryArray;
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        //find smallest element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);
        // Swap the found minimum element with the first element
        let temp = auxillaryArray[minIndex];
        auxillaryArray[minIndex] = auxillaryArray[i];
        auxillaryArray[i] = temp;
    }
    return [animations, array];
}