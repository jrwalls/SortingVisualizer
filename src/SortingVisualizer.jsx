import React from 'react';

//importing css and react-bootstrap components
import Loader from "react-loader-spinner"; 
import { Container, Row, Col } from 'react-bootstrap';

//importing sorting algorithms (to return the animation positions array of indexes)
import { bubbleSort } from './Algorithms/BubbleSort.js';
import { selectionSort } from './Algorithms/SelectionSort.js';
import { mergeSort } from './Algorithms/MergeSort.js';

//importing components
import ComplexityGraph from './Components/ComplexityGraph.jsx';
import StatusBar from './Components/StatusBar.jsx';
import ArrayBars from './Components/ArrayBars.jsx';
import ControlPanel from './Components/ControlPanel.jsx';

//parent component to components in "./Components/..."
class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            array: [], 
            size: 100, 
            animationSpeed: 2.5, 
            isDisabled: false,
            sortButtonName: "Sort!",
            ALGORITHMTYPE: "",
            status: "Select An Algorithm...",
            complexity: "O(?) Time | O(?) Space",
            isSorted: false,
        };
    }

    componentDidMount() {
        //generate and display array after component mounts
        this.resetArray();
    }

    changeAlgorithmType = (e) => {
        this.ALGORITHMTYPE = e;
        if (this.ALGORITHMTYPE === "Bubble Sort") {
            this.setState({ complexity: "O(n^2) Time | O(1) Space" });
            this.setState({ status: this.ALGORITHMTYPE + " Selected!"})
        }

        if (this.ALGORITHMTYPE === "Selection Sort") {
            this.setState({ complexity: "O(n^2) Time | O(1) Space" });
            this.setState({ status: this.ALGORITHMTYPE + " Selected!"})
        } 

        if (this.ALGORITHMTYPE === "Merge Sort") {
            this.setState({ complexity: "O(nlog(n)) Time | O(log(n)) Space" });
            this.setState({ status: this.ALGORITHMTYPE + " Selected!"})
        }
    }

    startSort = () => {
        if (this.ALGORITHMTYPE === "Bubble Sort") {
            this.bubbleSortAnimation();
        } 

        if (this.ALGORITHMTYPE === "Merge Sort") {
            this.mergeSortAnimation();
        }

        if (this.ALGORITHMTYPE === "Selection Sort") {
            this.selectionSortAnimation();
        }

        //alert the user if no algorithm has been selected and ALGORITHMTYPE is undefined
        if (!this.ALGORITHMTYPE) {
            alert("Please choose an algorithm!");
        }
    }

    resetArray = (e) => {
        const array = [];
        //prevents array size from turning to 0 if called from button click in render
        if (e) {
        this.setState({ size: e });
        }
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < this.state.size; i++) {
            //pushes a randomly generated int of range 1-250 to the state array
            array.push(Math.floor((Math.random() * 250) + 1));
        }
        this.setState({ array });
        var arrayLength = arrayBars.length;
        for (let i = 0; i < arrayLength; i++) {
            var jBarStyle = arrayBars[i].style;
            jBarStyle.backgroundColor = "red";
        }

        //if isSorted is true when entering this method, the array is sorted. 
        //reset status before setting isSorted state to false
        if (this.state.isSorted === true) {
            this.setState({ status: this.ALGORITHMTYPE + " Selected!" });
        } 
        
        //if resetArray is called, the array is no longer sorted so set isSorted to false
        this.setState({ isSorted: false });
    }

    bubbleSortAnimation() {
        if (this.state.isSorted) {
            alert("Array has already been sorted. Please generate a new array.");
        } else {
            this.firstSort();
            const animations = bubbleSort(this.state.array);
            const bars = document.getElementsByClassName("array-bar");
            for (let i = 0; i < animations.length; i++) {
                setTimeout(() => {
                    var [oldPosition, newPosition] = animations[i];
                    var oldBarStyle = bars[oldPosition].style;
                    var newBarStyle = bars[newPosition].style;

                    var temp = this.state.array[oldPosition];
                    this.state.array[oldPosition] = this.state.array[newPosition];
                    this.state.array[newPosition] = temp;

                    oldBarStyle.height = `${this.state.array[oldPosition]}px`;
                    newBarStyle.height = `${this.state.array[newPosition]}px`;

                    oldBarStyle.backgroundColor = "red";
                    newBarStyle.backgroundColor = "grey";

                    var currentPosition = oldPosition;
                    for (let j = 0; j < currentPosition; j++) {
                        var jbar = bars[j].style;
                        jbar.backgroundColor = "red";
                    }
                    if (i === animations.length - 1) {
                        this.lastSort();
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    selectionSortAnimation() {
        if (this.state.isSorted) {
            alert("Array has already been sorted. Please generate a new array.");
        } else {
            this.firstSort();
            const [animations, sortArray] = selectionSort(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < animations.length; i++) {
                const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                if(isColorChange === true) {
                    const color = (animations[i][0] === "comparision1") ? "white" : "red";
                    const [temp, barOneIndex, barTwoIndex] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * this.state.animationSpeed);
                }
                else {
                    const [temp, barIndex, newHeight] = animations[i];
                    const barStyle = arrayBars[barIndex].style;
                    setTimeout(() => {
                        barStyle.height = `${newHeight}px`;
                        if (i === animations.length - 1) {
                            this.lastSort();
                        }
                    },i * this.state.animationSpeed);  
                }
            }
        }
    }

    mergeSortAnimation() {
    if (this.state.isSorted) {
            alert("Array has already been sorted. Please generate a new array.");
        } else {
            setTimeout(() => {
                this.firstSort();
                const animations = mergeSort(this.state.array);
                for (let i = 0; i < animations.length; i++) {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    const isColorChange = i % 3 !== 2;
                    if (isColorChange) {
                        const [barOneIdx, barTwoIdx] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color = i % 3 === 0 ? "white" : "red";
                        setTimeout(() => {
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        }, i * this.state.animationSpeed);
                        } else {
                            setTimeout(() => {
                              const [barOneIdx, newHeight] = animations[i];
                              const barOneStyle = arrayBars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                              if (i === animations.length - 1) {
                                    this.lastSort();
                                }
                            }, i * this.state.animationSpeed);
                        }
                    }
                }, 1);
            }
        }

    firstSort() {
        //call before a sorting algorithm begins to update the status and disable the control panel buttons
        this.setState({ status: this.ALGORITHMTYPE + " Running..." })
        this.toggleUserInput();
    }

    lastSort() {
        //call after sorting algorithm is sorted to turn array bars green and re-enable control panel buttons
        const bars = document.getElementsByClassName("array-bar");
        var arrayLength = bars.length;
        for (let i = 0; i < arrayLength; i++) {
            setTimeout(() => {
                var barStyle = bars[i].style;
                barStyle.backgroundColor = "limegreen";
            }, i * this.state.animationSpeed);
        }
            this.toggleUserInput();
            this.setState({ sortButtonName: "Sort!" });
            this.setState({ status: this.ALGORITHMTYPE + " done! Please regenerate the array."});
            this.setState({ isSorted: true });
    }

    //toggles control panel component buttons and sets the sort button to a loading animation
    toggleUserInput() {
        this.setState({ isDisabled: !this.state.isDisabled });
        this.setState({ sortButtonName: <Loader type="ThreeDots" color="white" height={10} width={40} /> });
    }

    //changes the speed of the sorting animation
    changeSpeed = (e) => {
        this.setState({ animationSpeed: e });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ArrayBars 
                            array={this.state.array}
                            ALGORITHMTYPE={this.ALGORITHMTYPE}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StatusBar status={this.state.status} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col sm={7}>
                            <ControlPanel 
                                isDisabled={this.state.isDisabled}
                                sortButtonName={this.state.sortButtonName}
                                animationSpeed={this.state.animationSpeed}
                                size={this.state.size}
                                changeAlgorithmType={this.changeAlgorithmType}
                                resetArray={this.resetArray}
                                startSort={this.startSort}
                                changeSpeed={this.changeSpeed}
                            />
                    </Col>
                    <Col sm={5}>
                        <ComplexityGraph complexity={this.state.complexity}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SortingVisualizer;