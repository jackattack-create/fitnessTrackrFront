import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { Routine } from './routine'
import './routinesPage.css'


const searchedRoutines = (routine, searchTerm) => {
  const lowerCaseSearch = searchTerm.toLowerCase();
  const {
    goal,
    name,
    creatorName,
  } = routine;

  const toMatch = [goal, name, creatorName ];

  for (const field of toMatch) {
    if (field.toLowerCase().includes(lowerCaseSearch)) {
      return true;
    }
  }
}


const Routines = ({ routines }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory();
  const routinesToDisplay = routines.filter((routine) => searchedRoutines(routine, searchTerm));
  
    return <div>
       <div className="search-tab">
            <input 
              type='text'
              value={searchTerm}
              placeholder="Search for a goal"
              onChange={(event) => {
                console.log(event.target.value);
                setSearchTerm(event.target.value);
              }}
            ></input>
            <button>Search</button>
        </div>
        
        {routinesToDisplay.length ? (
          routinesToDisplay.map((routine) => (
        
              <Routine 
                key={routine.id}
                routine={routine}
                history={history}
              />
            
          ))) : (
            <div>No posts to display</div>
        )}
          
    </div>
}

export default Routines