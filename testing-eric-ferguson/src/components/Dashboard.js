import React from 'react';

const Dashboard = (props) => {

    return (
        <div className='buttons'>
            <button className='ball' onClick={() => props.ballChanges()}>Ball</button>
            <button className='strike' onClick={() => props.strikeChanges()}>Strike!</button>
            <button className='foul' onClick={() => props.foulChanges()}>Foul!</button>
            <button className='hit' onClick={() => props.hitChanges()}>HIT!!</button>
        </div>
    )
}
export default Dashboard;