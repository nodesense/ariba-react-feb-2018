import React, {Component} from 'react';

export default class Home extends Component {
    // initialize state with props
    constructor(props) {
        super(); //MUST

        console.log("Home comp created ", props);
    }

    render() {
        console.log("Home render");

        // this.props is a react keyword

        return (
            <div>
                <h2>Home</h2>
                <p> Views {this.props.pageViews}</p>
            </div>
        )
    }
}