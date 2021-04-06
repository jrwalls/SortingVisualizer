import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertHeading extends React.Component {
	constructor(props) {
        super(props);
        this.state = { 
            show: true,
        };
    }

    //sets the state of show to false to close the alert heading
    onCloseHandler(e) {
    	this.setState({ show: false });
    }

	render() {
		    return (
		      <Alert show={this.state.show} variant="success" onClose={() => this.onCloseHandler()} dismissible>
		        <Alert.Heading>Sorting Algorithm Visualizer</Alert.Heading>
		        Select an algorithm with the dropdown button, adjust the size and speed as you wish and click on the sort button.
		        To learn more about each algorithm, click the information(🛈) icon. Made by <a style={{ color: "red" }} href="https://github.com/jrwalls">GitHub: @jrwalls</a>
		      </Alert>
		    );
		  }
	}

export default AlertHeading;