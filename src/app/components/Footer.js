import React from 'react';

//functional component

// call this method, eq render
export default function Footer(props) {
    console.log("Footer called");
    
    // props immutable
    
    // crash the app
    // props.title = "Product App";

    //deconstruct
    let {title, year} = props;

    //BAD
    title = 'Product App';

    //create and returns virtual dom
    return (
        <div>
            <hr />
            <p>Copyrights @{title}, {year}</p>

            {/* footer content shall be here as props.children */}
            {props.children}
        </div>
    )
}