import React, { useContext } from 'react';
import moment from '../moment';
import { UserWorkoutContext } from '../context/workouts-context';

const Dates = () => {
    
    const {current, setCurrent} = useContext(UserWorkoutContext)
    return (
        <div className="dates">
            <div onClick={() => setCurrent(current.clone().subtract(1, 'd'))}>
                <i className="arrow left"></i>
            </div>
            <div className = "dates__date">
                <h1 className="page-header__title">{current.calendar()} </h1>

            </div>
            <div onClick={() => setCurrent(current.clone().add(1, 'd'))}>
                <i className="arrow right"></i>
            </div>

        </div>
    );


};

export { Dates as default }