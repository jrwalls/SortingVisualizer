export function bubbleSort(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    let sorted = false;
    while (sorted === false) {
        sorted = true;
        for (let i = 0; i < auxiliaryArray.length; i++) {
            if (auxiliaryArray[i] > auxiliaryArray[i + 1]) {
                const temp = auxiliaryArray[i + 1];
                auxiliaryArray[i + 1] = auxiliaryArray[i];
                auxiliaryArray[i] = temp;
                animations.push([i, i + 1]);
                sorted = false;
            }
        }
    }
    return animations;
}

