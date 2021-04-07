import React from 'react';
import InfoIcon from './InfoIcon.jsx';
import ArrayCounter from './ArrayCounter.jsx';

class ArrayBars extends React.Component {
    render(){
        return(
            <div className="array-container">
            <InfoIcon ALGORITHMTYPE={this.props.ALGORITHMTYPE} />
            <ArrayCounter size={this.props.size} />
            <div className="arraybar-container">
                {this.props.array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}>
                    </div>
                ))}
            </div>
            </div>
        );
    }
}

export default ArrayBars;