import React, { useContext } from 'react';
import Workout from './Workout';
import WorkoutsContext from '../context/workouts-context';





const WorkoutList = () => {
    const { workouts } = useContext(WorkoutsContext);


    return (
        <>
            {workouts.map(workout => (
                <Workout workout={workout} />
            ))}

        </>

    )
};

export { WorkoutList as default } 