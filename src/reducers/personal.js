import uniqid from 'uniqid';


const personalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
            const uid = uniqid();
            return [
                ...state,
                {
                    uid,
                    name: action.name,
                    dateCreated: action.dateCreated,
                    time: 0,
                    set: []
                }

            ];
        case 'REMOVE_WORKOUT':
            return state.filter(workout => workout.uid !== action.uid);
        case 'ADD_SET':
            return state.map(workout => {
                if (workout.uid === action.uid) {
                    return {
                        ...workout,
                        set: action.set

                    }

                }
                else {
                    return workout
                }
            })
        case 'POPULATE_WORKOUTS':
            console.log('POP')
            return action.workouts;
        default:
            return state;

    }
}

export { personalReducer as default };