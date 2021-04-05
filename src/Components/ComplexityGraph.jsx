import React from 'react';
import { Image } from 'react-bootstrap';

class ComplexityGraph extends React.Component {
    render(){
        return(
            <div className="controls-container">
            <p className="complexity-title"><b>Complexity: </b>{this.props.complexity}</p>
            <Image className="imgfit" src="./bigograph.png" fluid/>
            </div>
        );
    }
}

export default ComplexityGraph;