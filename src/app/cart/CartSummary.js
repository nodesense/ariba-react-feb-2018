
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }


    // this method called whenever parent rener called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log("Cart Summary receive props", nextProps, this.props);
    }
    
    //PureComponent implements shouldComponentUpdate

    // called whenever parent rener called on update cycle
    // called whenever this.setState on this component
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("CArt summary should update");

    //     if (nextProps.amount != this.props.amount ||
    //         nextProps.count != this.props.count) {
    //             return true;
    //         }

    //     return false;
    // }
    
    render() {
        console.log("CartSummary render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount {this.props.amount} </p>
            <p> Total Items {this.props.count} </p>
            </div>
        )
    }
} 


// defaultProps is static, keyword
CartSummary.defaultProps = {
    amount: 0,
    count: 0
}

CartSummary.propTypes = {
    amount: PropTypes.number,
    count: PropTypes.number
}