import React from 'react';
import { Image } from 'react-bootstrap';
import bigograph from './bigograph.png';

class ComplexityGraph extends React.Component {
    render(){
        return(
            <div className="controls-container">
            <p className="complexity-title"><b>Complexity: </b>{this.props.complexity}</p>
            <Image className="imgfit" src={bigograph} fluid/>
            </div>
        );
    }
}

export default ComplexityGraph;