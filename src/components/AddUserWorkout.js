import React, { useState } from 'react';
import Modal from './Modal';
import Search from './Search';


const AddUserWorkout = () => {
    const [selected,setSelected] = useState(false);
    const handleSelectOn = ()=> {
        setSelected(true)
    };
    const handleSelectOff = ()=> {
        setSelected(false)
    };

        return (
            <div >
                <button onClick={handleSelectOn} className="button button-add--workout">
                    Add Workout
                </button>
                <Modal 
                    selected={selected} 
                    handleSelectOn={handleSelectOn} 
                    handleSelectOff={handleSelectOff}
                    Component ={Search}/>
            </div>
        // <Search/>
    )
}

export { AddUserWorkout as default }