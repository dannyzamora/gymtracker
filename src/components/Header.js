import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () =>(
    <>
        <h1>Gym Tracker</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/WorkoutList'>Workouts</NavLink>
    </>
)

export {Header as default};