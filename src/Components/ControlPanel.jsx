import React from 'react';
import Loader from "react-loader-spinner";
import { Container, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';

class ControlPanel extends React.Component {
    render() {
        return(
            <div className="controls-container">
                <Container>
                    <div style={{paddingTop: "10px"}}>
                        <Row>
                            <Col>
                                <p><b>Control Panel</b></p>
                                <DropdownButton variant="dark" size="sm" title="Algorithms " id="bg-nested-dropdown" disabled={this.props.isDisabled}>
                                    <Dropdown.Item onClick={() => this.props.changeAlgorithmType("Bubble Sort")}>Bubble Sort</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.props.changeAlgorithmType("Selection Sort")}>Selection Sort</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.props.changeAlgorithmType("Merge Sort")}>Merge Sort</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                                </Row>
                                <Row style={{paddingTop: "10px"}}>
                                <Col><label>Size: <input type="range" min="10" max="200" value={this.props.size} disabled={this.props.isDisabled} onChange={(event) => this.props.resetArray(event.target.value)} className="slider"/></label>{this.props.size}</Col>
                                </Row>
                                <Row>
                                <Col><label>Speed: <input type="range" min="1" max="5" value={this.props.animationSpeed} disabled={this.props.isDisabled} onChange={(event) => this.props.changeSpeed(event.target.value)} className="slider"/></label></Col>
                                </Row>
                                <Row>
                                <Col><Button variant="dark" size="sm" disabled={this.props.isDisabled} onClick={() => this.props.resetArray()}>Randomize Array</Button></Col>
                                </Row>
                                <Row>
                            <Col style={{paddingTop: "10px"}}><Button variant="danger" size="sm" disabled={this.props.isDisabled} onClick={() => this.props.startSort()}>{this.props.sortButtonName}</Button></Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ControlPanel;