import React from 'react';
import { Routine } from './routine'


const Routines = ({ routines }) => {
    return <div>
      {routines && routines.length
          ? routines.map(({ id, name, goal, creatorName }) => (
              <Routine 
                key={id}
                name={name}
                goal={goal}
                creatorName={creatorName}
              />
            ))
          : ''}
    </div>
}

export default Routines