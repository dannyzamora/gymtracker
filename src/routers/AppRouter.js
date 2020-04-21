import React, { useReducer,useEffect } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NotFound from '../components/NotFound';
import WorkoutPage from '../components/workouts/WorkoutPage'
import Dashboard from '../components/Dashboard';
import {withHeader} from './withHOC';
import ContextRoute from './ContextRoute';
import {WorkoutsContext} from '../context/workouts-context';
import workoutsReducer from '../reducers/workouts';
import json from '../api/workouts.json';
const AppRouter = () => {
    
    const [workouts, dispatch] = useReducer(workoutsReducer, [])
    useEffect(()=>{
        
        dispatch({type:'POPULATE_WORKOUTS',workouts:json})
    },[])

    return (


        <BrowserRouter>
            <Switch>

                <ContextRoute path='/' exact={true} component={withHeader(Dashboard)} value = {{workouts,dispatch}} contextComponent={WorkoutsContext}  />
                <ContextRoute path='/WorkoutList' component={withHeader(WorkoutPage)} value = {{workouts,dispatch}} contextComponent={WorkoutsContext}  />
                <Route component={NotFound} />

            </Switch>

        </BrowserRouter>


    )



};

export { AppRouter as default }