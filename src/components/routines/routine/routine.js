import React from 'react';
import './routine.css'

const Routine = ({   name, goal, creatorName }) => {
    return <div className="routine">
                <h3>{name}</h3> 
                <p>createdBy: {creatorName}</p>
            </div>
           
}

export default Routine