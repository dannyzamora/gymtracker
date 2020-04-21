import React from 'react';
import Modal from 'react-modal';


const Modul = ({ selected, handleSelectOff, Component }) => {


    return (
        <div className='content-container'>

            <Modal
                isOpen={selected}
                onRequestClose={handleSelectOff}
                contentLabel="Add Workout"
                className="modal"
                closeTimeoutMS={500}
                ariaHideApp={false}
            >

                <Component handleSelectOff={handleSelectOff} />



            </Modal>
        </div>

    )
};
export { Modul as default }

// FORGOT WHY I ADDED TWO FUNCTIONS FOR ON AND OFF WHEN ONE WORKED Fine