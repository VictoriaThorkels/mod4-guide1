//  cards.js is a component

import { useState } from "react";

//  In here I have basic HTML. By doing so this goes from JS to JSX (JSX is basically just HTML written in JS)
//  Here I define "Cards" with const, so that the code knows what I am talking about
const Cards = (props) => {
//  Here I have styled the headers in JS, as so:
    const h1 = {
        fontSize: "40px",
        marginTop: "136px",
    }

//  Here I have connected a prop that holds a button
    return (
        <div  className="cards">
            <h1 style={h1}>Game of Thrones Characters</h1>
            {props.links} 
        </div>
    );
}


//  To use this component (cards.js) I must export at the bottom and import at the top of the file I want it to be connected to
export default Cards