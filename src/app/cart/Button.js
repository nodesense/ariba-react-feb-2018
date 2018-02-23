
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false
        }
    }


     
    render() {

        return (
            <button onMouseEnter={ () => this.setState({highlight: true}) }
                    onMouseLeave={() => this.setState({highlight: false}) }
                    
                    className={this.state.highlight?'success': ''}

                    {...this.props}
                    >
                    {this.props.children}
            </button>
        )
    }
} 

 