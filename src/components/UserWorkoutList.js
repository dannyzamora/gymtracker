import React, { useContext,useState, useEffect } from 'react';
import { UserWorkoutContext } from '../context/workouts-context';
import { FaRegClock } from 'react-icons/fa';
import AddUserWorkout from './AddUserWorkout';
import UserWorkout from './UserWorkout';
import dateSelector from '../selectors/workouts';
import Timer from './Timer'
const UserWorkoutList = () => {
    const { state,current } = useContext(UserWorkoutContext)
    const workouts = dateSelector(state,current)
    const [timer,setTimer]= useState(false)
    return (
        <div className="content-container">
            <div className="list-header">
                <h3>
                    Workouts
                </h3>
                {timer?<Timer timer={timer} setTimer={setTimer}/>:<FaRegClock onClick= {()=>setTimer(!timer)} />}
                <div className="show-for-desktop">
                    <AddUserWorkout />
                </div>

            </div>
            <div className="list-body">
                {workouts.length!==0? workouts.map(workout =>(<UserWorkout key={workout.uid} workout={workout} />
                )):<div className='list-item list-item__noworkout'><p >Add A Workout</p></div>}
            </div>
            <div className='show-for-mobile list-item--add'>
                <AddUserWorkout />
            </div>




        </div>)
}
export { UserWorkoutList as default }