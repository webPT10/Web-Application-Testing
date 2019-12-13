import React from 'react';

const Display = (props) => {

    return (
        <div className='counts'>
            <p className='ball' value={props.ball}>Balls: {props.ball}</p>
            <p className='strike' value={props.strike}>Strikes: {props.strike}</p>
            <p className='foul' value={props.foul}>Fouls: {props.foul}</p>
            <p className='hit' value={props.hit}>Hits: {props.hit}</p>
        </div>
    )
}
export default Display; 