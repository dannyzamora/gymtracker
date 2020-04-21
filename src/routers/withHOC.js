import React from 'react';
import Header from '../components/Header';

const withHeader = (PassedComponent) => {
    return () => (
        <>
            <Header />
            <PassedComponent />

        </>
    )
};

export {withHeader}