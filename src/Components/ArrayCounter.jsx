import React from 'react';

class ArrayCounter extends React.Component {
    render(){
        return(
            <div className="array-counter">
            Size: {this.props.size}
            </div>
        );
    }
}

export default ArrayCounter;