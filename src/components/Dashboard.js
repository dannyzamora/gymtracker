import React, { useEffect,useState, useReducer } from 'react';
import personalReducer from '../reducers/personal';
import { UserWorkoutContext } from '../context/workouts-context';

import Summary from './Summary';
import moment from '../moment';

import UserWorkoutList from '../components/UserWorkoutList'




const Dashboard = () => {

    const [state, dispatch] = useReducer(personalReducer,[]);
    const [current, setCurrent] = useState(moment());

    useEffect(() => {
        const workouts=JSON.parse(localStorage.getItem('workouts'));
        
        if(workouts){
            console.log('work',workouts)
            dispatch({type: 'POPULATE_WORKOUTS', workouts})
        }
    }, [])
    useEffect(() => {
        console.log('current',state)
        localStorage.setItem('workouts',JSON.stringify(state))
     }, [state])

   
 
    return (
        <>
            {/* <UserWorkouts /> */}
            <UserWorkoutContext.Provider value={{ state, dispatch, current, setCurrent }}>
                <Summary/>
                <UserWorkoutList />
            </UserWorkoutContext.Provider>

        </>

    )



};


export { Dashboard as default };