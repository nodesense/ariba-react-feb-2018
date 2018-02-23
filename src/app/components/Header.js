import React from 'react';

//functional component
// props => properties
export default function Header(props) {
    console.log("Header called");
    
    return (
        <div>
            <h2> {props.title} </h2>
            <hr />
        </div>
    )
}