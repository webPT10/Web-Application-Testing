import React from 'react';

const Dashboard = (props) => {

    return (
        <>
            <button onClick={() => props.ballChanges()}>Ball</button>
            <button onClick={() => props.strikeChanges()}>Strike!</button>
            <button onClick={() => props.foulChanges()}>Foul!</button>
            <button onClick={() => props.hitChanges()}>HIT!!</button>
        </>
    )
}
export default Dashboard;