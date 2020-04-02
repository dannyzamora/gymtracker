import React, { useContext, useEffect } from 'react';
import WorkoutList from './WorkoutList';
import AddWorkout from './AddWorkout';
import WorkoutsContext from '../context/workouts-context';
import workoutsReducer from '../reducers/workouts';


const testdata = [
    {
        name: "Bench Press",
        muscle: "chest",
        description: "The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench"

    },
    {
        name: "Pull ups",
        muscle: "Back",
        description: "lift your body up mother fucker"
    }



];

const WorkoutPage = () => {

    const {dispatch} = useContext(WorkoutsContext);


    // const [workouts, dispatch] = useReducer(workoutsReducer, testdata)
    // useEffect(() => {
    //     const workouts = testdata; // change later with actual data

    //     if (workouts) {
    //         dispatch({ type: 'POPULATE_WORKOUTS', workouts })

    //     }

    // }, []);

    return (
        <>

            <WorkoutList />
            <AddWorkout />


        </>
    )
};

export { WorkoutPage as default };