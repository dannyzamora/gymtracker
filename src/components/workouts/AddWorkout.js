import React,{useState,useContext} from 'react';
import {WorkoutsContext} from '../../context/workouts-context';


const AddWorkout = () => {
    const {dispatch} = useContext(WorkoutsContext);
    const [name,setName] = useState('');
    const [muscle,setMuscle] = useState('');

    const addWorkout = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_WORKOUT',
            name,
            muscle,
            
        })
        setName('');
        setMuscle('');
    }
    return (
        <>
            <p>Add Workout</p>
            <form onSubmit={addWorkout}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <input value={muscle} onChange={(e) => setMuscle(e.target.value)} />
                <button>Add Workout</button>
            </form>
        </>
    )
};

export { AddWorkout as default };