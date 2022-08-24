import React from 'react';

class Headlineclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <h1>Hello {this.state.count}</h1>
        )
    }
}
export default Headlineclass;
