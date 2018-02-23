
import React, {Component} from "react";
 
export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: ['Karthi', 'Venkat'],
            show: false,
            name: '',
            counter: 1
        }
    }

    toggle() {
        // Good API
        // update the state
        // merge the state
        // calls render method
        // async method

        console.log("before SetState show ", this.state.show);
        // Immutable
        this.setState({
            show: !this.state.show
        })

        console.log("after setState show ", this.state.show);
    
        this.setState({
            // immutable, GOOD
            counter: this.state.counter + 1
        })
    
    }

    onTextChange(e) {
        // target is dom element [input]
        console.log("Text ", e.target.name, e.target.value);

        this.setState ({
            name: e.target.value
        })
    }

    componentDidMount() {
        //Real dom element
        this.inputElem.focus();
        this.inputElem.value = 'Enter your name';
        
        this.header.textContent = 'About Page';
    }
    
    render() {
        console.log("About render");
        console.log("about render show", this.state.show);


        // option 1, old style
        let list = [];
        for(let name of this.state.members) {
            list.push(<li key={name}>{name}</li>);
        }
 

        return (
            <div> 
            <h2 
                ref={(elem) => this.header = elem }
            >About</h2>

            <input name="name"
                   value={this.state.name} 
                   onChange={ (e) => this.onTextChange(e) }

                   ref={ (elem) => this.inputElem = elem}
                   
                   />

            <ul>
                {list}
            </ul>

            <button onClick={ ()=> this.toggle() }>
                Toggle
            </button>

            {/*  JSX Comments  */}
            
            { this.state.show && 
                <ul>
                {
                    this.state.members
                        .map(name => (
                            <li key={name}>{name}</li>
                        ))
                }
                </ul>
            }

            </div>
        )
    }
} 
