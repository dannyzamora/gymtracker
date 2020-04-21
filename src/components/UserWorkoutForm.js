import React, { useState, useContext } from 'react';
import { UserWorkoutContext } from '../context/workouts-context';

const UserWorkoutForm = ({ workout }) => {
    const { dispatch } = useContext(UserWorkoutContext)
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const addSet = (e, set, uid) => {
        e.preventDefault();
        const newset = [...set, {
            weight,
            reps
        }]
        dispatch({ type: 'ADD_SET', set: newset, uid })
    };
    return (
        <div className='workout-view__form-container'>
            <form className='workout-view__form' onSubmit={(e) => addSet(e, workout.set, workout.uid)}>
                <input className='workout-view__input' type="number" placeholder='Weight' onChange={(e) => setWeight(e.target.value)} />
                <input className='workout-view__input' type="number"  placeholder='Reps' onChange={(e) => setReps(e.target.value)} />
                <button className='button'>Add</button>
            </form>
        </div>
    );

};

export { UserWorkoutForm as default }