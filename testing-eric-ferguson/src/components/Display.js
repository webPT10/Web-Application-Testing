import React from 'react';

const Display = (props) => {

    return (
        <>
            <p value={props.ball}>Balls: {props.ball}</p>
            <p value={props.strike}>Strikes: {props.strike}</p>
            <p value={props.foul}>Fouls: {props.foul}</p>
            <p value={props.hit}>Hits: {props.hit}</p>
        </>
    )
}
export default Display; 