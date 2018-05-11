import React, {Component} from 'react';

class Caption extends Component {
    render() {
        return (

            <h3
                style={{
                borderRadius: "0.25em",
                textAlign: "center",
                color: "blue",
                border: "1px solid black",
                padding: "0.5em"
            }}>
                {this.props.title}
            </h3>

        );
    }
}

export default Caption;