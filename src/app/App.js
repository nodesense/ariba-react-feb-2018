import React, {Component} from 'react'

// default import
import Header from './components/Header';

//default import is always alias
import FooterEx from './components/Footer';

import Home from './components/Home';

import About from "./components/About";

import Cart from "./cart/Cart";

//Virtual DOM

export class App extends Component {

    constructor( ) {
        super();
 
        // state is react keyword
        // mutable, owned by component
        this.state = {
            pageViews: 0
        }
    }

    increment() {
        //alert('increment');

        //BAD
        //Mutating
        this.state.pageViews++;

        console.log("Pageviews ", this.state.pageViews);

        //BAD
        // force react to call render
        this.forceUpdate();
    }

    // create and return virtual dom
    render() {
        console.log('App render');

        // this creates a new function
        // every time render called
        let clickFn = () => {
            this.increment();
        };

        // JSX
        return (
            <div>
                <Header title='React App'  />
 
                <Cart />

                <Home pageViews={this.state.pageViews} />

                <About />

                <p> Page Views {this.state.pageViews}</p>

                <button onClick={clickFn}>
                   +1
                </button>

                <FooterEx title='React App' year="2018" pageViews={this.state.pageViews} >

                        <p>Contact Time: 9:00 to 6:00 PM</p>
                        <p>Main: Bangalore</p>
                
                </FooterEx>
            </div>
        )
    }
}