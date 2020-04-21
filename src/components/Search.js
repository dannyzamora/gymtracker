import React, { useContext, useState, useEffect } from 'react'
import moment from '../moment'
import { WorkoutsContext, UserWorkoutContext } from '../context/workouts-context';

const Search = ({ handleSelectOff }) => {
    const { workouts } = useContext(WorkoutsContext);
    const {state, current, dispatch } = useContext(UserWorkoutContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const handleOnSubmit = (e) => {
        const dateCreated = current.valueOf();
        e.preventDefault();
        dispatch({ type: 'ADD_WORKOUT', name: searchTerm,dateCreated })
        setSearchTerm("")
        handleSelectOff()
    }
    const handleOnSubmitSearch = (name) => {
        const dateCreated = current.valueOf();
        dispatch({ type: 'ADD_WORKOUT', name,dateCreated })
        setSearchTerm("")
        handleSelectOff()
    }

    useEffect(() => {
        if (searchTerm !== "") {
            const sterm = searchTerm.toLowerCase();
            let results = workouts.map(workout => workout.name)
                .filter(name => name.toLowerCase().includes(sterm))
                .sort((a, b) => {
                    if (a.toLowerCase().startsWith(sterm)) {
                        return -1
                    }
                    if (a < b) {
                        return -1;
                    }
                    if (a > b)
                        return 1;

                    return 0;
                })
                .slice(0, 8);

            setSearchResults(results);
        }
        else {
            setSearchResults([])
        }
    }, [searchTerm,workouts]);

    return (
        <div >
            <form className='search__form' onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    className="search__input"
                />
                <button className='button'>ADD</button>
            </form>
            <div className = 'search-results'>
                <div>
                    {searchResults.map((item,i) => (
                        <div key = {i} className='search-item' onClick={() => { handleOnSubmitSearch(item) }}>{item}</div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export { Search as default }
