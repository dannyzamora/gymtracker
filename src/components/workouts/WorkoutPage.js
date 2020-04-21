import React, {} from 'react';
import WorkoutList from './WorkoutList';
import AddWorkout from './AddWorkout';




const WorkoutPage = () => {



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