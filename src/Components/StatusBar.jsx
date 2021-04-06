import React from 'react';

class StatusBar extends React.Component {
    render(){
        return(
            <div className="status-container">
            <b style={{ color: "black" }}>Status:</b> {this.props.status}
            </div>
        );
    }
}

export default StatusBar;