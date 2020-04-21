import React, { useState } from 'react';
import Modal from './Modal';
import UserWorkoutView from './UserWorkoutView';


const UserWorkout = ({ workout }) => {
    const [selected, setSelected] = useState(false);
    const handleSelectOn = () => {
        setSelected(true)
    };
    const handleSelectOff = () => {
        setSelected(false)
    };

    return (
        <>
            <div onClick={handleSelectOn} className='list-item' >
                <div className='list-item__name'>
                    <p >{workout.name}</p>

                </div>
                <div className='list-item__set'>
                    <p >{workout.set.length || 0} Sets</p>

                </div>

            </div>

            <Modal
                selected={selected}
                handleSelectOn={handleSelectOn}
                handleSelectOff={handleSelectOff}
                Component={UserWorkoutView(workout)}
            />

        </>
    )
}

export { UserWorkout as default }