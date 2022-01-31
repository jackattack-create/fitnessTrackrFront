import React from 'react';
import {useHistory} from 'react-router-dom'
import './routine.css'

const Routine = ({  routine, history }) => {
    const { name, goal, creatorName, activities } = routine
    return <div className="routine">
                <h3>{name}</h3> 
                <h4>createdBy: {creatorName}</h4>
                <p>{goal}</p>
                <div className="routineActivitiesRow">
                    <h4>Activities Include:</h4>
                    {
                        activities.map(({ name, id }) => {
                        return <p key={id}>{name}</p>
                        })
                    }
                </div>
                <button onClick={() => history.push(`routines/${routine.id}`)}
        >More info</button>
            </div>
           
}

export default Routine