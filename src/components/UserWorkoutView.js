import React, { useContext, useState,useEffect } from 'react';
import UserWorkoutForm from './UserWorkoutForm';
import { UserWorkoutContext } from '../context/workouts-context';
import { FaRegClock } from 'react-icons/fa';
import Timer from './Timer';


const UserWorkoutView = (workout) => {
    const { dispatch } = useContext(UserWorkoutContext);
    const [timer,setTimer]= useState(false)
    
    return () => (
        <div className='workout-view'>
            <div  className='workout-view--timer'>
                {timer?<Timer timer={timer} setTimer={setTimer}/>:<FaRegClock onClick= {()=>setTimer(!timer)} />}
            </div>
            <div className='workout-view__header'>
                <div className='workout-view__name'><h3>{workout.name}</h3></div>

                <button className='button remove__button' onClick={() => dispatch({ type: 'REMOVE_WORKOUT', uid: workout.uid })}>Remove</button>
            </div>

            <div className="list-body workout-view__body">
                <div className="workout-view__list workout-list-header">
                    {workout.set.length === 0 ? <p>Add Sets</p> : <p>Sets</p>}
                </div>
                {workout.set.map((s, i) => <div className="workout-view__list"><p>Reps: {s.reps}</p> <p> Weight: {s.weight}</p></div>)}
            </div>

            <UserWorkoutForm workout={workout} />

        </div>
    );

};

export { UserWorkoutView as default }