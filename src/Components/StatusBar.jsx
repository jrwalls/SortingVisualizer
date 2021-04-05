import React from 'react';

class StatusBar extends React.Component {
    render(){
        return(
            <div className="alert-container">
            <b>Status:</b> {this.props.status}
            </div>
        );
    }
}

export default StatusBar;