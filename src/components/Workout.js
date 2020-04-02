import React,{useContext} from 'react';
import WorkoutsContext from '../context/workouts-context';

const Workout = ({ workout}) => {
    const {dispatch} = useContext(WorkoutsContext);
    return (
    <div>
        <h2>{workout.name}</h2>
        <h3>{workout.muscle}</h3>
        <p>{workout.description}</p>
        <button onClick = {()=> dispatch({type:"REMOVE_WORKOUT",name:workout.name})}>X</button>
    </div>
)};

export {Workout as default};
