import React, {useState} from 'react'
import { callApi } from '../../api';
import { useHistory, useParams } from 'react-router-dom';

import './newPost.css'

const NewPost = ({ token, setRoutines, routines, action}) => {
    const history = useHistory()
    const {routineId} = useParams()

    const isAnEdit = action === 'edit'
    const title = isAnEdit ? "edit routine" : "What's your new Routine?";
    const buttonText = isAnEdit ? "Post edit" : "Post new item"
    const method = isAnEdit ? "PATCH" : "POST"
    const API_URL = isAnEdit ? `/routines/${routineId}` : `/routines`

    const [newRoutine, setNewRoutine] = useState({
        name: '',
        goal: '',
        isPublic: false,
    });

    const handleChange = async (event) => {
        event.preventDefault()
        try {
          const {
                    routines
                } = await callApi({
                url: API_URL,
                method: method,
                body: {
                    post: {
                        name: newRoutine.name,
                        goal: newRoutine.goal,
                        isPublic: newRoutine.isPublic
                    },
                },
                token,
            });
            
            if (isAnEdit) {
                const otherRoutines = routines.filter((routine) => routine.id === routineId)
                setPosts([...otherRoutines, routine])
            } else {
                setPosts([...routines, routine])
            }

            history.push('/routines');
        } catch (error) {
            console.log('error adding your routine', error)
        }

    }

    const handleRoutineFieldChange = (property) => (event) => {
        if (property === 'isPublic') {
          setNewRoutine({ ...newRoutine, [property]: event.target.checked });
        } else {
          setNewRoutine({ ...newRoutine, [property]: event.target.value });
        }
      };

    return (
        <section >
            <div className="newRoutinePage">
            <h2>{title}</h2>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="name"
          onChange={handleRoutineFieldChange('name')}
          value={newRoutine.name}
        ></input>
        <input
            className="newGoal"
          type="text"
          placeholder="what's your goal?"
          onChange={handleRoutineFieldChange('goal')}
          value={newPost.description}
        ></input>
        
       
        <label className="isPublic">
         <input
            type="checkbox"
            onChange={handleRoutineFieldChange('isPublic')}
            value={newRoutine.isPublic}
          ></input>
        </label>
        <button>{buttonText}</button>
      </form>
            </div>
            
        </section>
    )
}

export default NewRoutine