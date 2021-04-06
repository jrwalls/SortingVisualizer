import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

let bubbleSortDescription = "Bubble Sort works by stepping through the array and repeatedly swapping the adjacent elements if they are in the wrong order.";
let mergeSortDescription = "Merge Sort works on the principle of divide and conquer by repeatedly dividing the array into several subarrays, then merging the subarrays resulting in a sorted array.";
let sortingAlgorithmDescription = "A sorting algorithm is a type of computer algorithm that puts elements of an array in a certain order. Select an algorithm then click me again to learn more!";
let selectionSortDescription = "Selection Sort works by finding the smallest element in an array and putting it at the beginning until the array is sorted.";

class InfoIcon extends React.Component {
    render() {
        //if this.props is empty (no algorithm selected), set default tooltip values
        let algorithmType = !this.props.ALGORITHMTYPE ? "Sorting Algorithms" : this.props.ALGORITHMTYPE;

        //set the default algorithm tooltip value
        let algorithmInfo = sortingAlgorithmDescription;
        let algorithmWikiURL = "https://en.wikipedia.org/wiki/Sorting_algorithm";

        if (algorithmType === "Bubble Sort") {
            algorithmInfo = bubbleSortDescription;
            algorithmWikiURL = "https://en.wikipedia.org/wiki/Bubble_sort";
        }
        if (algorithmType === "Merge Sort") {
            algorithmInfo = mergeSortDescription;
            algorithmWikiURL = "https://en.wikipedia.org/wiki/Merge_sort";
        }
        if (algorithmType === "Selection Sort") {
            algorithmInfo = selectionSortDescription;
            algorithmWikiURL = "https://en.wikipedia.org/wiki/Selection_sort";
        }

        const popover = (
            <Popover id="popover-basic">
            <Popover.Title as="h3">{algorithmType} Information</Popover.Title>
            <Popover.Content>
            <p>{algorithmInfo}</p>
            <b>Read more:</b> <a href={algorithmWikiURL} target="_blank" rel="noreferrer">Wiki/{algorithmType}</a> 
            </Popover.Content>
            </Popover>
        );
        return(
            <div className="info-icon">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <h3>🛈</h3>
            </OverlayTrigger>
            </div>
        );
    }
}

export default InfoIcon;